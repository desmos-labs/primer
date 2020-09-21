const fs = require('fs');
const argv = require("yargs").argv;
const vsprintf = require('sprintf-js').vsprintf

export class FileWriter {
    /**
     *
     * @param usersData {Array<UserData>}
     */
    constructor(usersData) {
        this.usersData = usersData;
        this.tokensData = {
            phase1Total: usersData.map((d) => d.phase1Tokens).sumValues(),
            phase2Total: usersData.map((d) => d.phase2Tokens).sumValues(),
            phase3Total: usersData.map((d) => d.phase3Tokens).sumValues(),
            phase3ValidatorsTotal: usersData.map((d) => d.phase3ValidatorReward).sumValues(),
            phase4Total: usersData.map((d) => d.phase4Tokens).sumValues(),
            phase4ValidatorsTotal: usersData.map((d) => d.phase4ValidatorReward).sumValues(),
            phase5Total: usersData.map((d) => d.phase5Tokens).sumValues(),
            phase5ValidatorsTotal: usersData.map((d) => d.phase5ValidatorReward).sumValues(),
            validatingSummerTotal: usersData.map((d) => d.validatingSummerReward),
            globalTokens: usersData.map((d) => d.totalTokens).sumValues(),
        };

        /**
         *
         * @param userData {UserData}
         * @return {string}
         */
        this.toMdRow = function (userData) {
            return vsprintf(`| %s | %s | %s | %s | %s | %s | %s | %s | %s | %s | %s |\n`, [
                userData.user, userData.phase1Tokens, userData.phase2Tokens,
                userData.phase3Tokens, userData.phase3ValidatorReward,
                userData.phase4Tokens, userData.phase4ValidatorReward,
                userData.phase5Tokens, userData.phase5ValidatorReward,
                userData.validatingSummerReward,
                userData.totalTokens,
            ]);
        }
    }

    /**
     * Writes the scoreboard MarkDown file containing the given data.
     */
    writeScoreboardFile() {
        const mdFilePath = argv["scoreboard-file-path"];
        if (!mdFilePath) {
            return;
        }

        // Header
        let table = vsprintf(`| %s | %s | %s | %s | %s | %s | %s | %s | %s | %s | %s |\n`, [
            "User", "Phase 1", "Phase 2",
            "Phase 3", "Phase 3 VP",
            "Phase 4", "Phase 4 VP",
            "Phase 5", "Phase 5 VP",
            "Validating Summer",
            "Total",
        ]);
        table += "| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n"

        // Rows
        this.usersData.forEach((data) => {
            table += this.toMdRow(data);
        });

        // Footer
        table += vsprintf(`| %s | %s | %s | %s | %s | %s | %s | %s | %s | %s | %s |`, [
            "**Total**", this.tokensData.phase1Total, this.tokensData.phase2Total,
            this.tokensData.phase3Total, this.tokensData.phase3ValidatorsTotal,
            this.tokensData.phase4Total, this.tokensData.phase4ValidatorsTotal,
            this.tokensData.phase5Total, this.tokensData.phase5ValidatorsTotal,
            this.tokensData.validatingSummerTotal,
            this.tokensData.globalTokens,
        ]);

        const placeholder = "<!-- Scoreboard -->";
        const mdContents = fs.readFileSync(mdFilePath).toString();
        const newContents = mdContents.replace(placeholder, table);
        fs.writeFileSync(mdFilePath, newContents);
    }
}
