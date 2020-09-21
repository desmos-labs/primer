import {ValidatingSummer} from '../phases/phases.js';

/**
 * Contains all the data related to a specific user for all the phases.
 */
export class UserData {
    /**
     *
     * @param user {String}
     * @param phase1Data {Phase1Data}
     * @param phase2Data {Phase2Data}
     * @param phase3Data {Phase3Data}
     * @param phase4Data {Phase4Data}
     * @param phase5Data {Phase5Data}
     * @param validatingSummerData {ValidatingSummerData}
     */
    constructor(user,
                phase1Data, phase2Data, phase3Data,
                phase4Data, phase5Data,
                validatingSummerData,
    ) {
        this.user = user;

        this.phase1 = {
            referrals: phase1Data.referrals.get(user),
            referredBy: phase1Data.acceptedReferrals.get(user),
            post: phase1Data.posts.get(user),
            like: phase1Data.likes.get(user),
        };

        this.phase2 = {
            reaction: phase2Data.reactions.get(user),
            validator: phase2Data.validators.get(user),
        };

        this.phase3 = {
            multimedia: phase3Data.multimedia.get(user),
            poll: phase3Data.polls.get(user),
            answer: phase3Data.answers.get(user),
            validator: phase3Data.validators.get(user),
            precommits: phase3Data.precommits.get(phase3Data.validators.get(user)),

            precommitsRewards: new Map([
                [1, 1],
                [4, 2],
                [18, 3],
                [78, 7],
                [331, 12],
                [1416, 21],
                [6044, 40],
                [25796, 73],
                [110097, 135],
                [469894, 250],
            ]),
        }

        this.phase4 = {
            account: phase4Data.accounts.get(user),
            reaction: phase4Data.reactions.get(user),
            validator: phase4Data.validators.get(user),
            precommits: phase4Data.precommits.get(phase4Data.validators.get(user)),

            precommitsRewards: new Map([
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
            ]),
        };

        this.phase5 = {
            hashtag: phase5Data.hashtags.get(user),
            profile: phase5Data.profiles.get(user),
            report: phase5Data.reports.get(user),
            tag: phase5Data.tags.get(user),
            validator: phase5Data.validators.get(user),
            precommits: phase5Data.precommits.get(phase5Data.validators.get(user)),

            precommitsRewards: new Map([
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
            ]),
        }

        this.validatingSummer = {
            precommits: validatingSummerData.precommits.get(user),
            precommitsRewards: ValidatingSummer.PRECOMMITS_REWARDS,
        }
    }

    /**
     * Computes the number of tokens that should be rewarded based on the number of precommits signed.
     * @param rewards {Map<int, int>} Map containing the precommits rewards. The keys should represent the number of
     * precommits and the values the number of tokens to distribute.
     * @param precommits {int} Number of precommits signed.
     * @return {int} The number of tokens that should be returned.
     * @private
     */
    _computePrecommitsReward(rewards, precommits) {
        if (!precommits) return 0;

        let commitsToken = 0;
        for (const entry of rewards.entries()) {
            if (precommits >= entry[0]) {
                commitsToken = entry[1];
            }
        }
        return commitsToken;
    }

    /**
     * Computes the tokens to be awarded for Phase 1 Challenges to this user.
     * @param usersData {Array<UserData>}: the list of users data.
     * @returns {number}: the amount of tokens to be awarded to the user for Phase 1.
     */
    _computePhase1Amount(usersData) {
        let tokens = 0;

        // Check referrals
        for (const referral of (this.phase1.referrals || [])) {
            // We need to make sure that the referral exists and has a post
            const referralData = usersData.find((e) => e.user === referral);

            // 200 tokens per valid referral
            const referralPoints = 200 * (referralData?.phase1.post ? 1 : 0);
            tokens += referralPoints;
        }

        // 20 tokens for the post
        tokens += this.phase1.post ? 20 : 0;

        // 10 tokens for the like
        tokens += this.phase1.like ? 10 : 0;

        // Check if the referring user exists
        if (this.phase1.referredBy) {
            // 50 tokens for being referred, if the referring person exists
            const referringUser = usersData.find((e) => e.user === this.phase1.referredBy);
            tokens += referringUser ? 50 : 0
        }

        return tokens;
    }

    /**
     * Computes the tokens to be awarded for Phase 2 Challenges to this user.
     * @returns {number}: the amount of tokens to be awarded to the user for Phase 2.
     */
    _computePhase2Amount() {
        let tokens = 0;

        // 30 tokens for the reaction
        tokens += this.phase2.reaction ? 30 : 0;

        // 300 tokens for the validator
        tokens += this.phase2.validator ? 300 : 0;

        return tokens;
    }

    /**
     * Computes the tokens to be awarded for Phase 3 Challenges to this user.
     * @returns {number}: the amount of tokens to be awarded to the user for Phase 3.
     */
    _computePhase3Amount() {
        let tokens = 0;

        // 100 tokens per poll
        tokens += this.phase3.poll ? 100 : 0;

        // 10 tokens for the answer
        tokens += this.phase3.answer ? 10 : 0;

        // 50 tokens for a multimedia post
        tokens += this.phase3.multimedia ? 50 : 0;

        return tokens;
    }

    /**
     * Computes the tokens to be awarded for Phase 4 Challenges to this user.
     * @returns {number}: the amount of tokens to be awarded to the user for Phase 4.
     */
    _computePhase4Amount() {
        let tokens = 0;

        // 50 tokens per account
        tokens += this.phase4.account ? 50 : 0;

        // 50 tokens per reaction
        tokens += this.phase4.reaction ? 50 : 0;

        // 50 tokens for the update
        tokens += this.phase4.validator ? 50 : 0;

        return tokens;
    }

    /**
     * Computes the tokens to be awarded for Phase 5 Challenges to this user.
     * @returns {number}: the amount of tokens to be awarded to the user for Phase 5.
     */
    _computePhase5Amount() {
        let tokens = 0;

        // 25 tokens per hashtag
        tokens += this.phase5.hashtag ? 25 : 0;

        // 50 tokens per account
        tokens += this.phase5.profile ? 50 : 0;

        // 25 tokens per report
        tokens += this.phase5.report ? 25 : 0;

        // 50 tokens per tag
        tokens += this.phase5.tag ? 50 : 0;

        // 50 tokens for the update
        tokens += this.phase5.validator ? 50 : 0;

        return tokens;
    }

    /**
     *
     * @param usersData {Array<UserData>}
     * @return UserData
     */
    computeTokensAmounts(usersData) {
        this.phase1Tokens = this._computePhase1Amount(usersData);

        this.phase2Tokens = this._computePhase2Amount();

        this.phase3Tokens = this._computePhase3Amount();
        this.phase3ValidatorReward = this._computePrecommitsReward(this.phase3.precommitsRewards, this.phase3.precommits);

        this.phase4Tokens = this._computePhase4Amount();
        this.phase4ValidatorReward = this._computePrecommitsReward(this.phase4.precommitsRewards, this.phase4.precommits);

        this.phase5Tokens = this._computePhase5Amount();
        this.phase5ValidatorReward = this._computePrecommitsReward(this.phase5.precommitsRewards, this.phase5.precommits);

        this.validatingSummerReward = this._computePrecommitsReward(this.validatingSummer.precommitsRewards, this.validatingSummer.precommits);

        this.totalTokens = this.phase1Tokens +
            this.phase2Tokens +
            this.phase3Tokens + this.phase3ValidatorReward +
            this.phase4Tokens + this.phase4ValidatorReward +
            this.phase5Tokens + this.phase5ValidatorReward +
            this.validatingSummerReward;
    }
}

Array.prototype.unique = function () {
    let a = this.concat();
    for (let i = 0; i < a.length; ++i) {
        for (let j = i + 1; j < a.length; ++j) {
            if (a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

Map.prototype.sumValues = function () {
    return Array.from(this.values()).map(a => a.length).reduce(((a, c) => a + c), 0);
};

Array.prototype.sumValues = function () {
    return this.reduce((a, c) => a + c, 0);
};
