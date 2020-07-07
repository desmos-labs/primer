import {Utils} from "./common";

const path = require('path');
const csv = require('jquery-csv');
const PHASE_5_SUBMISSIONS = path.join(__dirname, `../../phase-5/submissions`);

/**
 * Allows to easily get the data from the Phase 5 of the Primer program.
 */
export class Phase5 {

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
     * @returns {Promise<Map<String, String>>} a map containing all the registered reactions..
     * The keys represent the names of the user, while the values represent the hashes of the post creation
     * transactions.
     */
    static async _getTags() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_5_SUBMISSIONS}/tags`));
    }

    /**
     * Gets all the created reports.
     * @returns {Promise<Map<String, String>>} a map containing all the registered reactions..
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

        const morpheus4000Precommits = fileContents.get('precommits-morpheus-5000.csv');
        const objects = csv.toObjects(morpheus4000Precommits.join("\n"));

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
            await this._getProfiles(),
            await this._getReports(),
            await this._getTags(),
            await this._getValidators(),
            await this._getPrecommits(),
        )
    }
}

/**
 * @property {Map<String, String>} profiles
 * @property {Map<String, String>} reports
 * @property {Map<String, String>} tags
 * @property {Map<String, String>} validators
 * @property {Map<String, int>} precommits
 */
class Phase5Data {
    constructor(profiles, reports, tags, validators, precommits) {
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
            ...this.profiles.keys(),
            ...this.reports.keys(),
            ...this.tags.keys(),
            ...this.validators.keys(),
        ];
    }
}
