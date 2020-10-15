import {Utils} from "./common";
import {PrecommitData} from "../types/precommit-data";

const path = require('path');
const csv = require('jquery-csv');
const PHASE_4_SUBMISSIONS = path.join(__dirname, `../../phase-4/submissions`);

const PRECOMMITS_REWARDS = new Map([
    [345600, 1500],
    [353480, 1750],
    [361540, 2040],
    [369790, 2380],
    [378220, 2780],
    [386850, 3240],
    [395670, 3780],
    [404690, 4410],
    [413920, 5140],
    [423360, 6000],
]);

/**
 * Returns the list of all the Primer Phase 4 entries.
 */
export async function getPhase4Data(): Promise<Array<Phase4Data>> {
    const accounts = await Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_4_SUBMISSIONS}/accounts`));
    const reactions = await Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_4_SUBMISSIONS}/reactions`));
    const validatorsOperatorAddresses = await Utils.removeEmptyValue(await Utils.getFilesContents(`${PHASE_4_SUBMISSIONS}/updates`));
    const users = new Set<String>([
        ...accounts.keys(),
        ...reactions.keys(),
        ...validatorsOperatorAddresses.keys(),
    ]);

    // --- Precommits ---
    const fileContents = await Utils.getFilesContents(`${PHASE_4_SUBMISSIONS}/precommits`);
    const morpheus4000Precommits = fileContents.get('precommits-morpheus-4000.csv');
    const morpheus4001Precommits = fileContents.get('precommits-morpheus-4001.csv');
    const precommits = csv.toObjects(morpheus4000Precommits.join("\n") + morpheus4001Precommits.join("\n"));

    const precommitsData = new Map<String, PrecommitData>();
    for (const object of precommits) {
        const existingPrecommitsCount = precommitsData.get(object.operatorAddress)?.precommitsSigned ?? 0;
        const currentPrecommitsCount = parseInt(object.precommitCount.replace(",", ""));

        const data = new PrecommitData(
            object.operatorAddress,
            object.validator,
            existingPrecommitsCount + currentPrecommitsCount,
        )
        precommitsData.set(object.operatorAddress, data);
    }
    // --- End precommits ---


    return Array.from(users).map((user) => {
        const validatorAddress = validatorsOperatorAddresses.get(user);
        const precommitData = precommitsData.get(validatorAddress);

        return new Phase4Data(
            user,
            reactions.get(user),
            accounts.get(user),
            precommitData,
        );
    })
}

/**
 * Contains the data for Desmos Primer Phase 4, for a single user.
 */
export class Phase4Data {
    public user: String;

    public reaction: String;
    public account: String;
    public precommitData: PrecommitData;

    constructor(user: String, reaction: String, account: String, precommitData: PrecommitData) {
        this.user = user;

        this.reaction = reaction;
        this.account = account;
        this.precommitData = precommitData;
    }
}
