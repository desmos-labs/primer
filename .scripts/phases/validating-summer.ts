import {Utils} from "./common";
import {PrecommitData} from "../types/precommit-data";

const path = require('path');
const csv = require('jquery-csv');
const SUBMISSIONS = path.join(__dirname, `../../validating-summer`);

const PRECOMMIT_REWARDS = new Map([
    [462631, 6000],
]);

/**
 * Gathers all the validating summer data.
 */
export async function getValidatingSummerData(): Promise<Array<PrecommitData>> {
    // --- Precommits ---
    const fileContents = await Utils.getFilesContents(`${SUBMISSIONS}`);
    const morpheus7001Precommits = fileContents.get('morpheus-7001.csv');
    const morpheus8000Precommits = fileContents.get('morpheus-8000.csv');
    const objects = csv.toObjects(morpheus7001Precommits.join("\n") + morpheus8000Precommits.join("\n"));

    const map = new Map<String, PrecommitData>();
    for (const object of objects) {
        const existingPrecommitsCount = map.get(object.operatorAddress)?.precommitsSigned ?? 0;
        const currentPrecommitsCount = parseInt(object.precommitCount.replace(",", ""));

        const data = new PrecommitData(
            object.operatorAddress,
            object.validator,
            existingPrecommitsCount + currentPrecommitsCount,
        )
        map.set(object.operatorAddress, data);
    }
    // --- End precommits ---


    return Array.from(map.values());
}
