const fs = require('fs');
const argv = require("yargs").argv;

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
            globalTokens: usersData.map((d) => d.totalTokens).sumValues(),

            toCsv: function () {
                return `TOTAL,${this.phase1Total},${this.phase2Total},${this.phase3Total},${this.globalTokens}\n`;
            },
            toMdTableRow: function () {
                return `| **Total** | ${this.phase1Total} | ${this.phase2Total} | ${this.phase3Total} | ${this.globalTokens}\n`;
            },
        };
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
     * Writes the CSV file containing the users data.
     */
    writeCsvFile() {
        const csvPath = argv["csv-file-path"];
        if (!csvPath) {
            return;
        }

        fs.writeFileSync(csvPath, "Username,Phase 1 earned tokens,Phase 2 earned tokens,Phase 3 earned tokens,Total\n");
        this.usersData.forEach(function (data) {
            fs.appendFileSync(csvPath, data.toCsv());
        });
        fs.appendFileSync(csvPath, this.tokensData.toCsv());
    }


    /**
     * Writes the scoreboard MarkDown file containing the given data.
     */
    writeScoreboardFile() {
        const mdFilePath = argv["scoreboard-file-path"];
        if (!mdFilePath) {
            return;
        }

        const mdContents = fs.readFileSync(mdFilePath).toString();

        let table = `
| User | Phase 1 | Phase 2 | Phase 3 | Total |
| :--- | :-----: | :-----: | :-----: | :---: |
`;
        this.usersData.forEach(function (data) {
            table += data.toMdTableRow();
        });
        table += this.tokensData.toMdTableRow();

        const placeholder = "<!-- Scoreboard -->";
        const newContents = mdContents.replace(placeholder, table);
        fs.writeFileSync(mdFilePath, newContents);
    }
}
