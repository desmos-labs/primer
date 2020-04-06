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
     */
    constructor(user, phase1Data, phase2Data, phase3Data) {
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
        }
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

        // TODO: Add the validator

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

        this.totalTokens = this.phase1Tokens + this.phase2Tokens + this.phase3Tokens;
    }

    /**
     *
     * @return {string}
     */
    toCsv() {
        return `${this.user},${this.phase1Tokens},${this.phase2Tokens},${this.phase3Tokens},${this.totalTokens}\n`;
    }

    toMdTableRow() {
       return `| ${this.user} | ${this.phase1Tokens} | ${this.phase2Tokens} | ${this.phase3Tokens} | ${this.totalTokens} |\n`;
    }
}

Array.prototype.unique = function() {
    let a = this.concat();
    for(let i=0; i<a.length; ++i) {
        for(let j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

Map.prototype.sumValues = function() {
    return Array.from(this.values()).map(a => a.length).reduce(((a, c) => a + c), 0);
};

Array.prototype.sumValues = function() {
    return this.reduce((a, c) => a + c, 0);
};
