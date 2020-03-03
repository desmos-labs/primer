class UserData {
    constructor(user, referrals, referredBy, post, like) {
        this.user = user;
        this.referrals = referrals;
        this.referredBy = referredBy;
        this.post = post;
        this.like = like;
    }
}

class TokenData {
    constructor(user, phase1) {
        this.user = user;
        this.phase1 = phase1;
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

export {UserData, TokenData}
