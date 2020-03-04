require("@babel/core");
require("@babel/polyfill");

import {TokenData, UserData} from "./types.js";
import {Phase1, Phase2} from "./phases/phases.js";
import {FileWriter} from "./file-writers"

// Main function. Reads the data, computes the tokens and prints to stdOut
readData().then((data) => {
    const tokensData = getTokensData(data);

    const total = tokensData.map((data) => data.total()).reduce(((a, c) => a + c), 0);
    console.log(`Total tokens allocated: ${total}`);

    FileWriter.writeJsonFile(data, tokensData);
    FileWriter.writeCsvFile(data, tokensData);
    FileWriter.writeScoreboardFile(data, tokensData);
});

/**
 * Reads the data from GitHub, puts all together and returns the complete object.
 * @returns {Promise<Array<UserData>>} Object containing the data of each user.
 */
async function readData() {

    // --- Phase 1 ---
    const referrals = await Phase1.getReferrals();
    console.log(`Referring users: ${referrals.size}`);
    console.log(`Referred users: ${referrals.sumValues()}`);

    const acceptedReferrals = await Phase1.getAcceptedReferrals();
    console.log(`Accepted referrals: ${acceptedReferrals.size}`);

    const posts = await Phase1.getPosts();
    console.log(`Posts created: ${posts.size}`);

    const likes = await Phase1.getLikes();
    console.log(`Likes created: ${likes.size}`);

    // --- Phase 2 ---
    const reactions = await Phase2.getReactions();
    console.log(`Reactions added: ${reactions.size}`);

    const validators = await Phase2.getValidators();
    console.log(`Validators created: ${validators.size}`);

    // --- Users ---
    const users = [];
    users.push(...referrals.keys());
    users.push(...acceptedReferrals.keys());
    users.push(...posts.keys());
    users.push(...likes.keys());
    users.push(...reactions.keys());
    users.push(...validators.keys());

    return users.unique().map(function (key) {
        return new UserData(key,
            referrals.get(key), acceptedReferrals.get(key), posts.get(key), likes.get(key),     // Phase 1
            reactions.get(key), validators.get(key),                                            // Phase 2
        );
    });
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
            Phase1.computePhaseAmount(userData, user),
            Phase2.computePhaseAmount(user),
        );
    })
}
