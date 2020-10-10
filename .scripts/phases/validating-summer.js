import {Utils} from "./common";

const path = require('path');
const csv = require('jquery-csv');
const SUBMISSIONS = path.join(__dirname, `../../validating-summer`);

/**
 * Allows to easily get the data from the Phase 5 of the Primer program.
 */
export class ValidatingSummer {

    /**
     * Gets all the number of precommits that all the validators have signed.
     * @return {Promise<Map<String, int>>} Map containing the number of precommits that the validators have signed.
     * The key is going to be the name of the validator, and the value is going to be the number of precommits.
     */
    static async _getPrecommits() {
        const fileContents = await Utils.getFilesContents(`${SUBMISSIONS}`);
        if (fileContents.size === 0) {
            return new Map();
        }

        const morpheus7001Precommits = fileContents.get('morpheus-7001.csv');
        const morpheus8000Precommits = fileContents.get('morpheus-8000.csv');
        const objects = csv.toObjects(morpheus7001Precommits.join("\n") + morpheus8000Precommits.join("\n"));

        const map = new Map();
        for (const object of objects) {
            const existingPrecommitsCount = map.get(object.validator) ?? 0;
            const currentPrecommitsCount = parseInt(object.precommitCount.replace(",", ""));
            map.set(object.validator, existingPrecommitsCount + currentPrecommitsCount);
        }

        return map;
    }

    /**
     * Gathers all the data.
     * @returns {Promise<ValidatingSummerData>} containing all the Phase 5 data.
     */
    static async getData() {
        return new ValidatingSummerData(
            await this._getPrecommits(),
        )
    }
}

/**
 * @property {Map<String, int>} precommits
 */
class ValidatingSummerData {
    constructor(precommits) {
        console.log("\n--- Validating summer ---");

        this.precommits = precommits;
        console.log(`Participating validators: ${precommits.size}\n`)
    }

    /**
     * @returns {Array<String>}
     */
    getUsers() {
        return [
            ...this.precommits.keys(),
        ];
    }
}
