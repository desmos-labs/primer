require("@babel/core");
require("@babel/polyfill");

const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

import PhasesService from "./PhasesService.js";

function getReferringUsersNumber(referrals) {
    return referrals.size;
}

function getReferredUsersNumber(referrals) {
    return Array.from(referrals.values()).map(a => a.length).reduce(((a, c) => a + c), 0);
}

/**
 * Adds a data to the {userData} map.
 */
function _addData(userData, mapToIterate, mapKey) {
    for (const [key, value] of mapToIterate.entries()) {
        const data = userData[key] || {};
        data[mapKey] = value;
        userData[key] = data;
    }
}

/**
 * Reads the data from GitHub, puts all together and returns the complete object.
 * @returns {Promise<Object>} Object containing the data of each user.
 */
async function readData() {
    const referrals = await PhasesService.getReferrals();
    console.log(`Referring users: ${getReferringUsersNumber(referrals)}`);
    console.log(`Referred users: ${getReferredUsersNumber(referrals)}`);

    const acceptedReferrals = await PhasesService.getAcceptedReferrals();
    console.log(`Accepted referrals: ${acceptedReferrals.size}`);

    const posts = await PhasesService.getPosts();
    console.log(`Posts created: ${posts.size}`);

    const likes = await PhasesService.getLikes();
    console.log(`Likes created: ${likes.size}`);

    const userData = {};
    _addData(userData, referrals, "referrals");
    _addData(userData, acceptedReferrals, "referredBy");
    _addData(userData, posts, "post");
    _addData(userData, likes, "like");
    return userData;
}

/**
 * Allows to compute the tokens that each user should get.
 * @param userData {Object} representing the current data of the users.
 * @returns {Object}
 */
function computeTokens(userData) {
    const tokens = {};

    for (const [user, data] of Object.entries(userData)) {

        // Check referrals
        for (const referral of (data["referrals"] || [])) {
            // We need to make sure that the referral exists and has a post
            const referralData = userData[referral] ?? {};

            // 200 tokens per valid referral
            const referralPoints = 200 * (referralData.post ? 1 : 0);

            tokens[user] = (tokens[user] || 0) + referralPoints;
        }

        // 20 tokens for the post
        tokens[user] = (tokens[user] || 0) + (data.hasOwnProperty("post") ? 20 : 0);

        // 10 tokens for the like
        tokens[user] = (tokens[user] || 0) + (data.hasOwnProperty("like") ? 10 : 0);

        // Check if the referring user exists
        if (data.hasOwnProperty("referredBy")) {
            // 50 tokens for being referred, if the referring person exists
            const referringUser = data["referredBy"];
            tokens[user] = (tokens[user] || 0) + (userData[referringUser] ? 50 : 0)
        }
    }

    return tokens;
}

// Main function. Reads the data, computes the tokens and prints to stdOut
readData().then(data => {
    const points = computeTokens(data);

    let total = 0;
    Object.keys(points).forEach((key, index) => total += points[key]);
    console.log(`Total tokens allocated: ${total}`);

    fs.writeFileSync(filePath, JSON.stringify({data: data, tokens: points}));
});