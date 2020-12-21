import {Utils} from "./common";

const path = require('path');
const PHASE_1_SUBMISSIONS = path.join(__dirname, `../../phase-1/submissions`);

/**
 * Returns the list of all the Primer Phase 1 entries.
 */
export async function getPhase1Data(): Promise<Array<Phase1Data>> {
    let referrals = await Utils.getFilesContents(`${PHASE_1_SUBMISSIONS}/referral`);
    let acceptedReferrals = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_1_SUBMISSIONS}/referred`));
    let posts = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_1_SUBMISSIONS}/posts`));
    let likes = await Utils.takeFirstNonEmpty(await Utils.getFilesContents(`${PHASE_1_SUBMISSIONS}/likes`));
    let users = new Set<String>([
        ...referrals.keys(),
        ...acceptedReferrals.keys(),
        ...posts.keys(),
        ...likes.keys(),
    ]);

    return Array.from(users).map((user) => new Phase1Data(
        user,
        referrals.get(user),
        acceptedReferrals.get(user),
        posts.get(user),
        likes.get(user),
    ));
}

/**
 * Contains the data related to the Phase 1 of the Primer program, for a single user.
 */
export class Phase1Data {
    public user: String;

    public referrals: Array<String>;
    public acceptedReferral: String;

    public post: String;
    public get hasPost(): boolean {
        return this.post != null;
    }

    public like: String;
    public get hasLike(): boolean {
        return this.like != null;
    }

    public get reward(): number {
        return (this.post != null ? 20 : 0) +
            (this.like != null ? 10 : 0);
    }


    constructor(user: String, referrals: Array<String>, acceptedReferral: String, post: String, like: String) {
        this.user = user;
        this.referrals = referrals;
        this.acceptedReferral = acceptedReferral;
        this.post = post;
        this.like = like;
    }
}
