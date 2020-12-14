import {PsqlWriter} from "./psql-writer";
import {getPhase1Data} from "./phases/phase-1";
import {getPhase2Data} from "./phases/phase-2";
import {getPhase3Data} from "./phases/phase-3";
import {getPhase4Data} from "./phases/phase-4";
import {getPhase5Data} from "./phases/phase-5";
import {getPhase6Data} from "./phases/phase-6";

require("@babel/core");
require("@babel/polyfill");

/**
 * Reads the data from GitHub, puts all together and returns the complete object.
 */
async function storeData() {
    const psqlWriter = new PsqlWriter();

    const phase1Data = await getPhase1Data();
    for (const data of phase1Data) {
        await psqlWriter.insertPhase1Data(data);
    }

    const phase2Data = await getPhase2Data();
    for (const data of phase2Data) {
        await psqlWriter.insertPhase2Data(data);
    }

    const phase3Data = await getPhase3Data();
    for (const data of phase3Data) {
        await psqlWriter.insertPhase3Data(data);
    }

    const phase4Data = await getPhase4Data();
    for (const data of phase4Data) {
        await psqlWriter.insertPhase4Data(data);
    }

    const phase5Data = await getPhase5Data();
    for (const data of phase5Data) {
        await psqlWriter.insertPhase5Data(data);
    }

    const phase6Data = await getPhase6Data();
    for (const data of phase6Data) {
        await psqlWriter.insertPhase6Data(data);
    }
}

// Main function. Reads the data, computes the tokens and prints to stdOut
storeData().then(() => {
    console.log("Storing completed");
}).catch((error) => {
    console.log(error);
});
