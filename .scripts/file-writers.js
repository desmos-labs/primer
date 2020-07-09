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
            globalTokens: usersData.map((d) => d.totalTokens).sumValues(),
        };

        /**
         *
         * @param userData {UserData}
         * @return {string}
         */
        this.toCsvRow = function (userData) {
            return vsprintf("%s,%s,%s,%s,%s,%s,%s,%s,%s,%s\n", [
                userData.user, userData.phase1Tokens, userData.phase2Tokens,
                userData.phase3Tokens, userData.phase3ValidatorReward,
                userData.phase4Tokens, userData.phase4ValidatorReward,
                userData.phase5Tokens, userData.phase5ValidatorReward,
                userData.totalTokens,
            ]);
        }

        /**
         *
         * @param userData {UserData}
         * @return {string}
         */
        this.toMdRow = function (userData) {
            return vsprintf(`| %s | %s | %s | %s | %s | %s | %s | %s | %s | %s |\n`, [
                userData.user, userData.phase1Tokens, userData.phase2Tokens,
                userData.phase3Tokens, userData.phase3ValidatorReward,
                userData.phase4Tokens, userData.phase4ValidatorReward,
                userData.phase5Tokens, userData.phase5ValidatorReward,
                userData.totalTokens,
            ]);
        }
    }

    /**
     * Writes the JSON file containing the users data.
     */
    writeJsonFile() {
        const jsonPath = argv["json-file-path"];
        if (!jsonPath) {
            return;
        }

        fs.writeFileSync(jsonPath, JSON.stringify(usersData));
    }

    /**
     *
     * @param userData {UserData}
     * @return string
     */


    /**
     * Writes the CSV file containing the users data.
     */
    writeCsvFile() {
        const csvPath = argv["csv-file-path"];
        if (!csvPath) {
            return;
        }

        // Header
        const header = vsprintf("%s,%s,%s,%s,%s,%s,%s,%s,%s,%s\n", [
            "User", "Phase 1", "Phase 2",
            "Phase 3", "Phase 3 VP",
            "Phase 4", "Phase 4 VP",
            "Phase 5", "Phase 5 VP",
            "Total",
        ]);
        fs.writeFileSync(csvPath, header);

        // Rows
        this.usersData.forEach((data) => {
            fs.appendFileSync(csvPath, this.toCsvRow(data));
        });

        // Footer
        const footer = vsprintf("%s,%s,%s,%s,%s,%s,%s,%s,%s,%s\n", [
            "TOTAL", this.tokensData.phase1Total, this.tokensData.phase2Total,
            this.tokensData.phase3Total, this.tokensData.phase3ValidatorsTotal,
            this.tokensData.phase4Total, this.tokensData.phase4ValidatorsTotal,
            this.tokensData.phase5Total, this.tokensData.phase5ValidatorsTotal,
            this.tokensData.globalTokens,
        ]);
        fs.appendFileSync(csvPath, footer);
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
        let table = vsprintf(`| %s | %s | %s | %s | %s | %s | %s | %s | %s | %s |\n`, [
            "User", "Phase 1", "Phase 2",
            "Phase 3", "Phase 3 VP",
            "Phase 4", "Phase 4 VP",
            "Phase 5", "Phase 5 VP",
            "Total",
        ]);
        table += "| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n"

        // Rows
        this.usersData.forEach((data) => {
            table += this.toMdRow(data);
        });

        // Footer
        table += vsprintf(`| %s | %s | %s | %s | %s | %s | %s | %s | %s | %s |`, [
            "**Total**", this.tokensData.phase1Total, this.tokensData.phase2Total,
            this.tokensData.phase3Total, this.tokensData.phase3ValidatorsTotal,
            this.tokensData.phase4Total, this.tokensData.phase4ValidatorsTotal,
            this.tokensData.phase5Total, this.tokensData.phase5ValidatorsTotal,
            this.tokensData.globalTokens,
        ]);

        const placeholder = "<!-- Scoreboard -->";
        const mdContents = fs.readFileSync(mdFilePath).toString();
        const newContents = mdContents.replace(placeholder, table);
        fs.writeFileSync(mdFilePath, newContents);
    }
}
