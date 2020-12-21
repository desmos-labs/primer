import {Utils} from "./common";

const path = require('path');
const PHASE_2_SUBMISSIONS = path.join(__dirname, `../../phase-2/submissions`);

/**
 * Returns the list of all the Primer Phase 2 entries.
 */
export async function getPhase2Data(): Promise<Array<Phase2Data>> {
    const reactions = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_2_SUBMISSIONS}/reactions`));
    const validators = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_2_SUBMISSIONS}/validators`));

    const users = new Set<String>([
        ...reactions.keys(),
        ...validators.keys(),
    ]);

    return Array.from(users).map((user) => new Phase2Data(
        user,
        reactions.get(user),
        validators.get(user) != null,
    ));
}

/**
 * Contains the data for Desmos Primer Phase 2, for a single user.
 */
export class Phase2Data {
    public user: String;

    public reaction: String;
    public get hasReaction(): boolean {
        return this.reaction != null;
    }

    public createdValidator: boolean;

    public get reward(): number {
        return (this.hasReaction ? 30 : 0) +
            (this.createdValidator ? 300 : 0)
    }

    constructor(user: String, reaction: String, createdValidator: boolean) {
        this.user = user;

        this.reaction = reaction;
        this.createdValidator = createdValidator;
    }
}
