import {Utils} from "./common";

const path = require('path');
const PHASE_2_SUBMISSIONS = path.join(__dirname, `../../phase-2/submissions`);

/**
 * Allows to easily get the data from the Phase 2 of the Primer program.
 */
export class Phase2 {

    /**
     * Gets all the reactions.
     * @returns {Promise<Map<String, String>>} a map containing all the created reactions.
     * The keys represent the names of the user, while the values represent the hashes of the reaction transactions.
     */
    static async _getReactions() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_2_SUBMISSIONS}/reactions`));
    }

    /**
     * Gets all the created validators
     * @returns {Promise<Map<String, String>>} a map containing all the created validators.
     * The keys represent the names of the user, while the values represent the hashes of the validator creation
     * transactions.
     */
    static async _getValidators() {
        return Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_2_SUBMISSIONS}/validators`));
    }

    /**
     * Gathers all the data.
     * @returns {Promise<Phase2Data>} containing all the Phase 2 data.
     */
    static async getData() {
        return new Phase2Data(
            await this._getReactions(),
            await this._getValidators(),
        )
    }
}

/**
 * @property reactions
 * @property validators
 */
class Phase2Data {
    constructor(reactions, validators) {
        console.log("\n--- Phase 2 ---");

        this.reactions = reactions;
        console.log(`Reactions added: ${this.reactions.size}`);

        this.validators = validators;
        console.log(`Validators created: ${this.validators.size}`);
    }

    /**
     * @returns {Array<String>}
     */
    getUsers() {
        return [
            ...this.reactions.keys(),
            ...this.validators.keys(),
        ];
    }
}
