import {Utils} from "./common";

const path = require('path');
const csv = require('jquery-csv');
const PHASE_4_SUBMISSIONS = path.join(__dirname, `../../phase-4/submissions`);

/**
 * Allows to easily get the data from the Phase 4 of the Primer program.
 */
export class Phase4 {

    /**
     * Gets all the accounts.
     * @returns {Promise<Map<String, String>>} a map containing all the created accounts.
     * The keys represent the names of the user, while the values represent the hashes of
     * the account creation transactions.
     */
    static async _getAccounts() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_4_SUBMISSIONS}/accounts`));
    }

    /**
     * Gets all the registered reactions.
     * @returns {Promise<Map<String, String>>} a map containing all the registered reactions..
     * The keys represent the names of the user, while the values represent the hashes of the reaction registration
     * transactions.
     */
    static async _getReactions() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_4_SUBMISSIONS}/reactions`));
    }

    /**
     * Gets all the updated validators
     * @returns {Promise<Map<String, String>>} a map containing all the updated validators.
     * The keys represent the names of the user, while the values represent the operator address of the associated
     * validator.
     */
    static async _getValidators() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_4_SUBMISSIONS}/updates`));
    }

    /**
     * Gets all the number of precommits that all the validators have signed.
     * @return {Promise<Map<String, int>>} Map containing the number of precommits that the validators have signed.
     * The key is going to be the address of the validator, and the value is going to be the number of precommits.
     */
    static async _getPrecommits() {
        const fileContents = await Utils.getFilesContents(`${PHASE_4_SUBMISSIONS}/precommits`);
        if (fileContents.size === 0) {
            return new Map();
        }

        const morpheus4000Precommits = fileContents.get('precommits-morpheus-4000.csv');
        const morpheus4001Precommits = fileContents.get('precommits-morpheus-4001.csv');
        const objects = csv.toObjects(morpheus4000Precommits.join("\n") + morpheus4001Precommits.join("\n"));

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
     * @returns {Promise<Phase4Data>} containing all the Phase 4 data.
     */
    static async getData() {
        return new Phase4Data(
            await this._getAccounts(),
            await this._getReactions(),
            await this._getValidators(),
            await this._getPrecommits(),
        )
    }
}

/**
 * @property {Map<String, String>} accounts
 * @property {Map<String, String>} reactions
 * @property {Map<String, String>} validators
 * @property {Map<String, int>} precommits
 */
class Phase4Data {
    constructor(accounts, reactions, validators, precommits) {
        this.accounts = accounts;
        console.log(`Accounts created: ${this.accounts.size}`);

        this.reactions = reactions;
        console.log(`Reactions registered: ${this.reactions.size}`);

        this.validators = validators;
        console.log(`Updated validators: ${this.validators.size}`);

        this.precommits = precommits;
    }

    /**
     * @returns {Array<String>}
     */
    getUsers() {
        return [
            ...this.accounts.keys(),
            ...this.reactions.keys(),
            ...this.validators.keys(),
        ];
    }
}
