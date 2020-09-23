const fs = require('fs');
const path = require('path');

export class Utils {

    /**
     * Allows to read the given directory contents returning them as a map.
     * @param {String} dir: path to the directory to read.
     */
    static async getFilesContents(dir: String): Promise<Map<String, Array<String>>> {
        if (!fs.existsSync(dir)) {
            return new Map();
        }

        const files = fs.readdirSync(dir).filter((file) => file !== ".gitkeep");

        let contents = new Map<String, Array<String>>();
        for (const file of files) {
            const filePath = path.join(dir, file);
            const userName = filePath.split("/").pop().toString();
            const lines = fs.readFileSync(filePath, 'utf8')
                .split("\n").filter(name => name.trim().length !== 0);
            contents.set(userName, lines);
        }

        return contents;
    }

    /**
     * Iterates over all the keys present in the given map.
     * For each entry, takes only the first item of the value. If the value is an empty array, skips the key.
     * @param {Map<String, Array<String>>} map containing the original data as a list of string-to-[]string entries.
     */
    static async removeEmptyValue(map): Promise<Map<String, String>> {
        let newMap = new Map();
        for (const k of map.keys()) {
            const value = map.get(k);
            if (value.length > 0) {
                newMap.set(k, value[0]);
            }
        }
        return newMap;
    }
}
