import {Utils} from "./common";

const path = require('path');
const PHASE_1_SUBMISSIONS = path.join(__dirname, `../../phase-1/submissions`);

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
    static async _getReferrals() {
        return await Utils.getFilesContents(`${PHASE_1_SUBMISSIONS}/referral`);
    }

    /**
     * Gets all the accepted referrals.
     * @returns {Promise<Map<String, String>>} a map hat contains all the accepted referrals.
     * The keys are the name of the user that has been referred, and the values are the names of the referred users.
     */
    static async _getAcceptedReferrals() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_1_SUBMISSIONS}/referred`));
    }

    /**
     * Gets all the created posts.
     * @returns {Promise<Map<String, String>>} a map that contains all the created posts.
     * The keys represent tha name of the creator, while the values represent the hashes of the transactions.
     */
    static async _getPosts() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_1_SUBMISSIONS}/posts`));
    }

    /**
     * Gets all the created likes.
     * @returns {Promise<Map<String, String>>} a map that contains all the created likes.
     * The keys represent the name of the liker, while the values represent the hashes of the likes transactions.
     */
    static async _getLikes() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_1_SUBMISSIONS}/likes`));
    }

    /**
     * Gathers all the data.
     * @returns {Promise<Phase1Data>} containing all the Phase 1 data.
     */
    static async getData() {
        return new Phase1Data(
            await this._getReferrals(),
            await this._getAcceptedReferrals(),
            await this._getPosts(),
            await this._getLikes(),
        )
    }
}

/**
 * @property referrals {Map<String, Array<String>>}
 * @property acceptedReferrals {Map<String, String>}
 * @property posts {Map<String, String>}
 * @property likes {Map<String, String>}
 */
export class Phase1Data {
    constructor(referrals, acceptedReferrals, posts, likes) {
        console.log("\n--- Phase 1 ---");

        this.referrals = referrals;
        console.log(`Referring users: ${this.referrals.size}`);
        console.log(`Referred users: ${this.referrals.sumValues()}`);

        this.acceptedReferrals = acceptedReferrals;
        console.log(`Accepted referrals: ${this.acceptedReferrals.size}`);

        this.posts = posts;
        console.log(`Posts created: ${this.posts.size}`);

        this.likes = likes;
        console.log(`Likes created: ${this.likes.size}`);
    }

    /**
     *
     * @returns {Array<String>}
     */
    getUsers() {
        return [
            ...this.referrals.keys(),
            ...this.acceptedReferrals.keys(),
            ...this.posts.keys(),
            ...this.likes.keys(),
        ];
    }
}
