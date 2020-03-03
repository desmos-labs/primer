const fs = require('fs');
const path = require('path');

const PHASE_1_URL = path.join(__dirname, `../phase-1/submissions`);

/**
 * Allows to easily get the data from the different phases of the program.
 */
class PhasesService {

    async _getFilesContents(dir) {
        const files = fs.readdirSync(dir).filter((file) => file !== ".gitkeep");

        let contents = new Map();
        for (const file of files) {
            const filePath = path.join(dir, file);
            const userName = filePath.split("/").pop().toString();
            const lines = fs.readFileSync(filePath, 'utf8')
                .split("\n").filter(name => name.trim().length !== 0);
            contents.set(userName, lines);
        }

        return contents;
    }

    _removeEmptyValue(map) {
        for (const k of map.keys()) {
            const value = map.get(k);
            value.length === 0 ? map.delete(k) : map.set(k, value[0]);
        }
        return map;
    }

    /**
     * Reads all the referrals that have been created.
     * @returns {Promise<Map<String, Array<String>>>} a map that contains all the referrals.
     * The keys are the names of users that have referred other users, while the values are the names of the
     * referred users.
     */
    async getReferrals() {
        return await this._getFilesContents(`${PHASE_1_URL}/referral`);
    }

    /**
     * Gets all the accepted referrals.
     * @returns {Promise<Map<String, String>>} a map hat contains all the accepted referrals.
     * The keys are the name of the user that has been referred, and the values are the names of the referred users.
     */
    async getAcceptedReferrals() {
        return this._removeEmptyValue(await this._getFilesContents(`${PHASE_1_URL}/referred`));
    }

    /**
     * Gets all the created posts.
     * @returns {Promise<Map<String, String>>} a map that contains all the created posts.
     * The keys represent tha name of the creator, while the values represent the hashes of the transactions.
     */
    async getPosts() {
        return this._removeEmptyValue(await this._getFilesContents(`${PHASE_1_URL}/posts`));
    }

    /**
     * Gets all the created likes.
     * @returns {Promise<Map<String, String>>} a map that contains all the created likes.
     * The keys represent the name of the liker, while the values represent the hashes of the likes transactions.
     */
    async getLikes() {
        return this._removeEmptyValue(await this._getFilesContents(`${PHASE_1_URL}/likes`));
    }

}

export default new PhasesService()
