import {Utils} from "./common";

const path = require('path');
const PHASE_3_SUBMISSIONS = path.join(__dirname, `../../phase-3/submissions`);

/**
 * Allows to easily get the data from the Phase 2 of the Primer program.
 */
export class Phase3 {

    /**
     * Gets all the polls.
     * @returns {Promise<Map<String, String>>} a map containing all the created polls.
     * The keys represent the names of the user, while the values represent the hashes of the poll transactions.
     */
    static async _getPolls() {
        return  Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_3_SUBMISSIONS}/polls`));
    }

    /**
     * Gets all the created multimedia posts
     * @returns {Promise<Map<String, String>>} a map containing all the created multimedia posts.
     * The keys represent the names of the user, while the values represent the hashes of the multimedia post creation
     * transactions.
     */
    static async _getMultimedia() {
        return  Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_3_SUBMISSIONS}/multimedia`));
    }

    /**
     * Gets all the created poll answers
     * @returns {Promise<Map<String, String>>} a map containing all the created poll answers.
     * The keys represent the names of the user, while the values represent the hashes of the poll answer creation
     * transactions.
     */
    static async _getPollAnswers() {
        return  Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_3_SUBMISSIONS}/answers`));
    }

    // TODO: Add the validators

    /**
     * Gathers all the data.
     * @returns {Promise<Phase3Data>} containing all the Phase 2 data.
     */
    static async getData() {
        return new Phase3Data(
            await this._getPolls(),
            await this._getMultimedia(),
            await this._getPollAnswers(),
        )
    }
}

class Phase3Data {
    constructor(polls, multimedia, answers) {
        this.polls = polls;
        console.log(`Polls created: ${this.polls.size}`);

        this.answers = answers;
        console.log(`Polls answers added: ${this.answers.size}`);

        this.multimedia = multimedia;
        console.log(`Multimedia posts created: ${this.multimedia.size}`);
    }

    /**
     * @returns {Array<String>}
     */
    getUsers() {
        return [
            ...this.polls.keys(),
            ...this.answers.keys(),
            ...this.multimedia.keys(),
        ];
    }
}
