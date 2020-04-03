import {Utils} from "./common"

const path = require('path');
const PHASE_1_SUBMISSIONS = path.join(__dirname, `../../phase-1/submissions`);
const PHASE_2_SUBMISSIONS = path.join(__dirname, `../../phase-2/submissions`);

/**
 * Allows to easily get the data from the Phase 1 of the Primer program.
 */
export class Phase1 {
    /**
     * Reads all the referrals that have been created.
     * @returns {Promise<Map<String, Array<String>>>} a map that contains all the referrals.
     * The keys are the names of users that have referred other users, while the values are the names of the
     * referred users.
     */
    static async getReferrals() {
        return await Utils.getFilesContents(`${PHASE_1_SUBMISSIONS}/referral`);
    }

    /**
     * Gets all the accepted referrals.
     * @returns {Promise<Map<String, String>>} a map hat contains all the accepted referrals.
     * The keys are the name of the user that has been referred, and the values are the names of the referred users.
     */
    static async getAcceptedReferrals() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_1_SUBMISSIONS}/referred`));
    }

    /**
     * Gets all the created posts.
     * @returns {Promise<Map<String, String>>} a map that contains all the created posts.
     * The keys represent tha name of the creator, while the values represent the hashes of the transactions.
     */
    static async getPosts() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_1_SUBMISSIONS}/posts`));
    }

    /**
     * Gets all the created likes.
     * @returns {Promise<Map<String, String>>} a map that contains all the created likes.
     * The keys represent the name of the liker, while the values represent the hashes of the likes transactions.
     */
    static async getLikes() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_1_SUBMISSIONS}/likes`));
    }

    /**
     * Computes the tokens to be awarded for Phase 1 Challenges to a specific user.
     * @param usersData {Array<UserData>}: the list of users data.
     * @param user {UserData}: the currently considered user.
     * @returns {number}: the amount of tokens to be awarded to the user for Phase 1.
     */
    static computePhaseAmount(usersData, user) {
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
}

/**
 * Allows to easily get the data from the Phase 2 of the Primer program.
 */
export class Phase2 {

    /**
     * Gets all the reactions.
     * @returns {Promise<Map<String, String>>} a map containing all the created reactions.
     * The keys represent the names of the user, while the values represent the hashes of the reaction transactions.
     */
    static async getReactions() {
        return  Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_2_SUBMISSIONS}/reactions`));
    }

    /**
     * Gets all the created validators
     * @returns {Promise<Map<String, String>>} a map containing all the created validators.
     * The keys represent the names of the user, while the values represent the hashes of the validator creation
     * transactions.
     */
    static async getValidators() {
        return  Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_2_SUBMISSIONS}/validators`));
    }

    /**
     * Computes the tokens to be awarded for Phase 2 Challenges to a specific user.
     * @param user {UserData}: the currently considered user.
     * @returns {number}: the amount of tokens to be awarded to the user for Phase 2.
     */
    static computePhaseAmount(user) {
        let tokens = 0;

        // 30 tokens for the reaction
        tokens += user.reaction ? 30 : 0;

        // 300 tokens for the validator
        tokens += user.validator ? 300 : 0;

        return tokens;
    }
}
