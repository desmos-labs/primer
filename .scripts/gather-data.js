import {Phase1, Phase2, Phase3, Phase4, Phase5, ValidatingSummer} from "./phases/phases.js";
import {UserData} from "./types/user-data.js";
import {FileWriter} from "./file-writers"

require("@babel/core");
require("@babel/polyfill");

/**
 * Reads the data from GitHub, puts all together and returns the complete object.
 * @returns {Promise<Array<UserData>>} Object containing the data of each user.
 */
async function readData() {
    const phase1Data = await Phase1.getData();
    const phase2Data = await Phase2.getData();
    const phase3Data = await Phase3.getData();
    const phase4Data = await Phase4.getData();
    const phase5Data = await Phase5.getData();
    const validatingSummerData = await ValidatingSummer.getData();

    // --- Users ---
    const users = [
        ...phase1Data.getUsers(),
        ...phase2Data.getUsers(),
        ...phase3Data.getUsers(),
        ...phase4Data.getUsers(),
        ...phase5Data.getUsers(),
        ...validatingSummerData.getUsers(),
    ];

    return users.unique().map(function (key) {
        return new UserData(
            key,
            phase1Data,
            phase2Data,
            phase3Data,
            phase4Data,
            phase5Data,
            validatingSummerData,
        );
    });
}

// Main function. Reads the data, computes the tokens and prints to stdOut
readData().then((usersData) => {
    // Compute the tokens amount and sort the data
    usersData.forEach((e) => e.computeTokensAmounts(usersData));
    usersData.sort((first, second) => second.totalTokens - first.totalTokens);

    const total = usersData.map((userData) => userData.totalTokens).reduce(((a, c) => a + c), 0);
    console.log(`\n--- Total tokens allocated --- \n${total}`);

    const fileWriter = new FileWriter(usersData);
    fileWriter.writeScoreboardFile();
});
