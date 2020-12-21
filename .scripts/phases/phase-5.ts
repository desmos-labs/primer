import {Utils} from "./common";
import {PrecommitData} from "../types";

const path = require('path');
const csv = require('jquery-csv');
const PHASE_5_SUBMISSIONS = path.join(__dirname, `../../phase-5/submissions`);

/**
 * Returns the list of all the Primer Phase 5 entries.
 */
export async function getPhase5Data(): Promise<Array<Phase5Data>> {
    const hashtags = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_5_SUBMISSIONS}/hashtags`));
    const profiles = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_5_SUBMISSIONS}/profiles`));
    const tags = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_5_SUBMISSIONS}/tags`));
    const reports = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_5_SUBMISSIONS}/reports`));
    const validatorsOperatorAddresses = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_5_SUBMISSIONS}/updates`));
    const users = new Set<String>([
        ...hashtags.keys(),
        ...profiles.keys(),
        ...tags.keys(),
        ...reports.keys(),
        ...validatorsOperatorAddresses.keys(),
    ]);

    // --- Precommits ---
    const fileContents = await Utils.getFilesContents(`${PHASE_5_SUBMISSIONS}/precommits`);
    const precommits = fileContents.get('precommits-morpheus-7001.csv');
    const objects = csv.toObjects(precommits.join("\n"));

    const precommitsData = new Map<String, PrecommitData>();
    for (const object of objects) {
        const existingPrecommitsCount = precommitsData.get(object.operatorAddress)?.precommitsSigned ?? 0;
        const currentPrecommitsCount = parseInt(object.precommitCount.replace(",", ""));

        const data = new PrecommitData(
            object.operatorAddress,
            object.validator,
            existingPrecommitsCount + currentPrecommitsCount
        )
        precommitsData.set(object.operatorAddress, data);
    }
    // --- End precommits ---


    return Array.from(users).map((user) => {
        const validatorAddress = validatorsOperatorAddresses.get(user);
        const precommitData = precommitsData.get(validatorAddress);

        return new Phase5Data(
            user,
            hashtags.get(user),
            profiles.get(user),
            reports.get(user),
            tags.get(user),
            precommitData,
        );
    })
}

/**
 * Contains the data for Desmos Primer Phase 5, for a single user.
 */
export class Phase5Data {
    public user: String;

    public hashtag: String;
    public get hasHashtag(): boolean {
        return this.hashtag != null;
    }

    public profile: String;
    public get hasProfile(): boolean {
        return this.profile != null;
    }

    public report: String;
    public get hasReport(): boolean {
        return this.report != null;
    }

    public tag: String;
    public get hasTag() : boolean {
        return this.tag != null;
    }

    public precommitData: PrecommitData;
    public get validatorAddress(): String {
        return this.precommitData?.operatorAddress;
    }

    public get reward() : number {
        return (this.hasHashtag ? 25 : 0) +
            (this.hasTag ? 50 : 0) +
            (this.hasReport ? 25 : 0) +
            (this.hasProfile ? 50 : 0);
    }

    constructor(user: String, hashtag: String, profile: String, report: String, tag: String, precommitData: PrecommitData) {
        this.user = user;

        this.hashtag = hashtag;
        this.profile = profile;
        this.report = report;
        this.tag = tag;
        this.precommitData = precommitData;
    }
}
