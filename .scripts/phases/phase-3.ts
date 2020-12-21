import {Utils} from "./common";
import {PrecommitData} from "../types";

const path = require('path');
const csv = require('jquery-csv');
const PHASE_3_SUBMISSIONS = path.join(__dirname, `../../phase-3/submissions`);

/**
 * Returns the list of all the Primer Phase 3 entries.
 */
export async function getPhase3Data(): Promise<Array<Phase3Data>> {
    const polls = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_3_SUBMISSIONS}/polls`));
    const multimediaPosts = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_3_SUBMISSIONS}/multimedia`));
    const pollAnswers = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_3_SUBMISSIONS}/answers`));
    const validatorOperatorAddresses = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_3_SUBMISSIONS}/updates`));
    const users = new Set<String>([
        ...polls.keys(),
        ...multimediaPosts.keys(),
        ...pollAnswers.keys(),
        ...validatorOperatorAddresses.keys(),
    ]);

    // --- Precommits ---
    const fileContents = await Utils.getFilesContents(`${PHASE_3_SUBMISSIONS}/precommits`);
    const precommits = fileContents.get('precommits.csv');
    const objects = csv.toObjects(precommits.join("\n"));

    const precommitsData = new Map<String, PrecommitData>();
    for (const object of objects) {
        const data = new PrecommitData(
            object.operatorAddress,
            object.validator,
            parseInt(object.precommitCount.replace(",", "")),
        )
        precommitsData.set(object.operatorAddress, data);
    }
    // --- End precommits ---


    return Array.from(users).map((user) => {
        const validatorAddress = validatorOperatorAddresses.get(user);
        const precommitData = precommitsData.get(validatorAddress);

        return new Phase3Data(
            user,
            polls.get(user),
            multimediaPosts.get(user),
            pollAnswers.get(user),
            precommitData
        );
    });
}

/**
 * Contains the data for Desmos Primer Phase 3, for a single user.
 */
export class Phase3Data {
    public user: String;

    public poll: String;
    public get hasPoll(): boolean {
        return this.poll != null;
    }

    public multimediaPost: String;
    public get hasMultimediaPost(): boolean {
        return this.multimediaPost != null;
    }

    public pollAnswer: String;
    public get hasPollAnswer(): boolean {
        return this.pollAnswer != null;
    }

    public precommitData: PrecommitData;
    public get validatorAddress(): String {
        return this.precommitData?.operatorAddress;
    }

    public get reward(): number {
        return (this.hasPoll ? 100 : 0) +
            (this.hasPollAnswer ? 10 : 0) +
            (this.hasMultimediaPost ? 50 : 0) +
            (this.validatorAddress != null ? 50 : 0)
    }

    constructor(user: String, poll: String, multimediaPost: String, pollAnswer: String, precommitData: PrecommitData) {
        this.user = user;

        this.poll = poll;
        this.multimediaPost = multimediaPost;
        this.pollAnswer = pollAnswer;
        this.precommitData = precommitData;
    }
}
