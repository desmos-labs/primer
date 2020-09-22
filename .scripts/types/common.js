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
