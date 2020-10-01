const axios = require("axios");

const LCD_URL = "http://lcd.morpheus.desmos.network:1317/";

/**
 * @type {Map<String, Array<String>>} Map containing the list of transaction hashes
 * and the associated users that have used such hashes.
 */
const txs = new Map();

// Phase5.getData().then((data) => {
//     data.hashtags.forEach(async (value) => checkHashtagTx(value))
//     data.profiles.forEach(async (value) => checkProfileTx(value))
//     data.reports.forEach(async (value) => checkReportTx(value))
//     data.tags.forEach(async (value) => checkTagTx(value))
//
//     // Add all the transactions
//     addTxs(txs, data.hashtags);
//     addTxs(txs, data.profiles);
//     addTxs(txs, data.reports);
//     addTxs(txs, data.tags);
//
//     // Check for multiple users for the same hash
//     txs.forEach((value, key) => {
//         if (value.length > 1) {
//             console.error(`Transaction with hash ${key} has been used by multiple users`)
//             process.exit(1)
//         }
//     })
//
//     console.log("--- No transactions conflicts found ---")
// })

// --------------------------------------------------
// Utils
// --------------------------------------------------

/**
 * Takes the given transactions map and adds the transactions that
 * are listed inside the given data map.
 * @param txs {Map}: a map containing the already viewed transactions.
 *        The keys of this map are the hashes of the transactions, while the values
 *        are String arrays that contain the list of users that have used such hashes.
 * @param data {Map}: a map containing the new transactions to be added to the list.
 *        The keys are the the names of the users using the hashes.
 *        The values are the hashes of the transactions themselves.
 */
function addTxs(txs, data) {
    data.forEach((value, key) => {
        const currVal = txs.get(value) ?? [];
        currVal.push(key)

        txs.set(value, currVal);
    })
}

function assert(condition, message) {
    if (!condition) {
        console.error(message)
        process.exit(1)
    }
}

function getMessage(txHash) {
    return new Promise((resolve, reject) => {
        axios.get(`${LCD_URL}/txs/${txHash}`).then((response) => {
            const json = response.data;
            if (json.logs === undefined) {
                return reject(`Tx with hash ${txHash} failed`)
            }

            const message = json.tx.value.msg[0];
            return resolve(message);
        });
    })
}

// --------------------------------------------------
// Checks
// --------------------------------------------------

async function checkHashtagTx(txHash) {
    const message = await getMessage(txHash)
    assert(message.type === "desmos/MsgCreatePost", `Tx with hash ${txHash} is not post creation`)
    assert(message.value.message.includes("#"), `Tx with hash ${txHash} does not include a #`)
}

async function checkProfileTx(txHash) {
    try {
        const message = await getMessage(txHash)
        assert(message.type === "desmos/MsgSaveProfile", `Tx with hash ${txHash} is not profile saving`)
    } catch (e) {
        return console.log(e)
    }
}

async function checkReportTx(txHash) {
    const message = await getMessage(txHash);
    assert(message.type === "desmos/MsgReportPost", `Tx with hash ${txHash} is not post report`)
}

async function checkTagTx(txHash) {
    const message = await getMessage(txHash);
    assert(message.type === "desmos/MsgCreatePost", `Tx with hash ${txHash} is not a tag`)

    const media = message.value.medias[0]
    assert(!media.tags.isEmpty, `Tx with hash ${txHash} has no tags inside media`)
}

