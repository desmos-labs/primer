import {Utils} from "./common";

const path = require('path');
const csv = require('jquery-csv');
const PHASE_5_SUBMISSIONS = path.join(__dirname, `../../phase-5/submissions`);

/**
 * Allows to easily get the data from the Phase 5 of the Primer program.
 */
export class Phase5 {

    /**
     * Gets all the hashtag posts created.
     * @returns {Promise<Map<String, String>>} a map containing all the created posts.
     * The keys represent the names of the user, while the values represent the hashes of the post creation
     * transactions.
     */
    static async _getHashtags() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_5_SUBMISSIONS}/hashtags`));
    }

    /**
     * Gets all the profiles.
     * @returns {Promise<Map<String, String>>} a map containing all the created or edited profiles.
     * The keys represent the names of the user, while the values represent the hashes of
     * the profile creation/edit transactions.
     */
    static async _getProfiles() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_5_SUBMISSIONS}/profiles`));
    }

    /**
     * Gets all the posts in which a user is tagged.
     * @returns {Promise<Map<String, String>>} a map containing all the created posts.
     * The keys represent the names of the user, while the values represent the hashes of the post creation
     * transactions.
     */
    static async _getTags() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_5_SUBMISSIONS}/tags`));
    }

    /**
     * Gets all the created reports.
     * @returns {Promise<Map<String, String>>} a map containing all the created reports.
     * The keys represent the names of the user, while the values represent the hashes of the report creation
     * transactions.
     */
    static async _getReports() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_5_SUBMISSIONS}/reports`));
    }

    /**
     * Gets all the updated validators
     * @returns {Promise<Map<String, String>>} a map containing all the updated validators.
     * The keys represent the names of the user, while the values represent the operator address of the associated
     * validator.
     */
    static async _getValidators() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_5_SUBMISSIONS}/updates`));
    }

    static PRECOMMITS_REWARDS = new Map([
        [476534, 1500],
        [488497, 1750],
        [500760, 2040],
        [513331, 2380],
        [526217, 2780],
        [539427, 3240],
        [552969, 3780],
        [566851, 4410],
        [581081, 5140],
        [595668, 6000],
    ]);

    /**
     * Gets all the number of precommits that all the validators have signed.
     * @return {Promise<Map<String, int>>} Map containing the number of precommits that the validators have signed.
     * The key is going to be the address of the validator, and the value is going to be the number of precommits.
     */
    static async _getPrecommits() {
        const fileContents = await Utils.getFilesContents(`${PHASE_5_SUBMISSIONS}/precommits`);
        if (fileContents.size === 0) {
            return new Map();
        }

        const precommits = fileContents.get('precommits-morpheus-7001.csv');
        const objects = csv.toObjects(precommits.join("\n"));

        const map = new Map();
        for (const object of objects) {
            const existingPrecommitsCount = map.get(object.operatorAddress) ?? 0;
            const currentPrecommitsCount = parseInt(object.precommitCount.replace(",", ""));
            map.set(object.operatorAddress, existingPrecommitsCount + currentPrecommitsCount);
        }

        return map;
    }

    /**
     * Gathers all the data.
     * @returns {Promise<Phase5Data>} containing all the Phase 5 data.
     */
    static async getData() {
        return new Phase5Data(
            await this._getHashtags(),
            await this._getProfiles(),
            await this._getReports(),
            await this._getTags(),
            await this._getValidators(),
            await this._getPrecommits(),
        )
    }
}

/**
 * @property {Map<String, String>} hashtags
 * @property {Map<String, String>} profiles
 * @property {Map<String, String>} reports
 * @property {Map<String, String>} tags
 * @property {Map<String, String>} validators
 * @property {Map<String, int>} precommits
 */
class Phase5Data {
    constructor(hashtags, profiles, reports, tags, validators, precommits) {
        console.log("\n--- Phase 5 ---");

        this.hashtags = hashtags;
        console.log(`Hashtags created: ${this.hashtags.size}`);

        this.profiles = profiles;
        console.log(`Profiles created/edited: ${this.profiles.size}`);

        this.reports = reports;
        console.log(`Reports created: ${this.reports.size}`);

        this.tags = tags;
        console.log(`Tags created: ${this.tags.size}`);

        this.validators = validators;
        console.log(`Updated validators: ${this.validators.size}`);

        this.precommits = precommits;
    }

    /**
     * @returns {Array<String>}
     */
    getUsers() {
        return [
            ...this.hashtags.keys(),
            ...this.profiles.keys(),
            ...this.reports.keys(),
            ...this.tags.keys(),
            ...this.validators.keys(),
        ];
    }
}
