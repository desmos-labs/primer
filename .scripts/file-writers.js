import {TotalTokensData} from "./types";

const fs = require('fs');
const argv = require("yargs").argv;

export class FileWriter {
    /**
     *
     * @param {Array<TokenData>} tokensData
     * @returns {TotalTokensData}
     * @private
     */
    static _getTokensTotals(tokensData) {
        return new TotalTokensData(
            tokensData.map((d) => d.phase1).sumValues(),
            tokensData.map((d) => d.phase2).sumValues(),
            tokensData.map((d) => d.total()).sumValues(),
        )
    }

    /**
     * Writes the JSON file containing the given data.
     * @param {Array<UserData>} usersData: list of users data.
     * @param {Array<TokenData>} tokensData: list of tokens data.
     */
    static writeJsonFile(usersData, tokensData) {
        const jsonPath = argv["json-file-path"];
        if (!jsonPath) {
            return;
        }

        fs.writeFileSync(jsonPath, JSON.stringify({phasesData: usersData, tokens: tokensData}));
    }

    /**
     * Writes the CSV file containing the given data.
     * @param {Array<UserData>} usersData: list of users data.
     * @param {Array<TokenData>} tokensData: list of tokens data.
     */
    static writeCsvFile(usersData, tokensData) {
        const csvPath = argv["csv-file-path"];
        if (!csvPath) {
            return;
        }

        fs.writeFileSync(csvPath, "Username,Phase 1 earned tokens,Phase 2 earned tokens,Total\n");
        tokensData.forEach(function (data) {
            fs.appendFileSync(csvPath, `${data.user},${data.phase1},${data.phase2},${data.total()}\n`);
        });

        const totalTokens = this._getTokensTotals(tokensData);
        fs.appendFileSync(csvPath, `TOTAL,${totalTokens.phase1Total},${totalTokens.phase2Total},${totalTokens.globalTokens}\n`);
    }


    /**
     * Writes the scoreboard MarkDown file containing the given data.
     * @param {Array<UserData>} usersData: list of users data.
     * @param {Array<TokenData>} tokensData: list of tokens data.
     */
    static writeScoreboardFile(usersData, tokensData) {
        const mdFilePath = argv["scoreboard-file-path"];
        if (!mdFilePath) {
            return;
        }

        const mdContents = fs.readFileSync(mdFilePath).toString();

        let table = `
| User | Phase 1 | Phase 2 | Total |
| :--- | :-----: | :-----: | :---: |
`;
        tokensData.forEach(function (data) {
            table += `| ${data.user} | ${data.phase1} | ${data.phase2} | ${data.total()} |\n`;
        });

        const totalTokens = this._getTokensTotals(tokensData);
        table += `| **Total** | ${totalTokens.phase1Total} | ${totalTokens.phase2Total} | ${totalTokens.globalTokens}\n`;

        const placeholder = "<!-- Scoreboard -->";
        const newContents = mdContents.replace(placeholder, table);
        fs.writeFileSync(mdFilePath, newContents);
    }
}
