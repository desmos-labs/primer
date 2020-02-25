require("@babel/core");
require("@babel/polyfill");

import {TokenData, UserData} from "./Objects.js";
import PhasesService from "./PhasesService.js";

const fs = require('fs');

const filePath = process.argv[2];
let csvFilePath = null;
if (process.argv.length > 3) {
    csvFilePath = process.argv[3];
}

function getReferringUsersNumber(referrals) {
    return referrals.size;
}

function getReferredUsersNumber(referrals) {
    return Array.from(referrals.values()).map(a => a.length).reduce(((a, c) => a + c), 0);
}

/**
 * Reads the data from GitHub, puts all together and returns the complete object.
 * @returns {Promise<Array<UserData>>} Object containing the data of each user.
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

    const users = [];
    users.push(...referrals.keys());
    users.push(...acceptedReferrals.keys());
    users.push(...posts.keys());
    users.push(...likes.keys());

    return users.unique().map(function (key) {
        return new UserData(key, referrals.get(key), acceptedReferrals.get(key), posts.get(key), likes.get(key));
    });
}

/**
 * Computes the tokens to be awarded for Phase 1 Challenges to a specific user.
 * @param usersData {Array<UserData>}: the list of users data.
 * @param user {UserData}: the currently considered user.
 * @returns {number}: the amount of tokens to be awarded to the user for Phase 1.
 */
function computePhase1Amount(usersData, user) {
    let tokens = 0;

    // Check referrals
    for (const referral of (user.referrals || [])) {
        // We need to make sure that the referral exists and has a post
        const referralData = usersData.find((e) => e.user === referral);

        // 200 tokens per valid referral
        const referralPoints = 200 * (referralData?.post ? 1 : 0);
        tokens += referralPoints;
    }

    // 20 tokens for the post
    tokens += user.post ? 20 : 0;

    // 10 tokens for the like
    tokens += user.like ? 10 : 0;

    // Check if the referring user exists
    if (user.referredBy) {
        // 50 tokens for being referred, if the referring person exists
        const referringUser = usersData.find((e) => e.user === user.referredBy);
        tokens += referringUser ? 50 : 0
    }

    return tokens;
}

/**
 * Allows to compute the tokens that each user should get.
 * @param userData {Array<UserData>}: list of users phases completion data.
 * @returns {Array<TokenData>}: the data of the tokens to be awarded.
 */
function getTokensData(userData) {
    return userData.map(function (user) {
        return new TokenData(
            user.user,
            computePhase1Amount(userData, user),
        );
    })
}

// Main function. Reads the data, computes the tokens and prints to stdOut
readData().then(data => {
    const tokensData = getTokensData(data);

    const total = tokensData.map((data) => data.phase1).reduce(((a, c) => a + c), 0);
    console.log(`Total tokens allocated: ${total}`);

    // Write to a JSON file
    fs.writeFileSync(filePath, JSON.stringify({phasesData: data, tokens: tokensData}));

    // Write to a CSV file if it exists
    if (csvFilePath != null) {
        fs.writeFileSync(csvFilePath, "Username,Phase 1 earned tokens\n");
        tokensData.forEach(function (data) {
            fs.appendFileSync(csvFilePath, `${data.user},${data.phase1}\n`)
        });
    }
});
