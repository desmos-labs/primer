/**
 * Contains all the data related to a specific user for all the phases.
 */
export class UserData {
    constructor(user, p1Referral, p1ReferredBy, p1Post, p1Like, p2Reaction, p2Validator) {
        this.user = user;
        this.referrals = p1Referral;
        this.referredBy = p1ReferredBy;
        this.post = p1Post;
        this.like = p1Like;
        this.reaction = p2Reaction;
        this.validator = p2Validator;
    }
}

/**
 * Contains the data about the earned tokens for a specific user.
 */
export class TokenData {
    constructor(user, phase1, phase2) {
        this.user = user;
        this.phase1 = phase1;
        this.phase2 = phase2;
    }

    /**
     * Returns the total amount of tokens.
     * @returns {number} the total amount of tokens represented inside this instance.
     */
    total() {
        return this.phase1 + this.phase2;
    }
}

/**
 * Contains the data of the sum of all the awarded tokens.
 */
export class TotalTokensData {
    constructor(phase1Total, phase2Total, allPhasesTotal) {
        this.phase1Total = phase1Total;
        this.phase2Total = phase2Total;
        this.globalTokens = allPhasesTotal;
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
