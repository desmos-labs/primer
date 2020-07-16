const axios = require("axios");
import {Phase5} from "./phases/phase-5";

const lcdUrl = "http://lcd.morpheus.desmos.network:1317/";

/**
 * @type {Map<String, Array<String>>} Map containing the list of transaction hashes
 * and the associated users that have used such hashes.
 */
const txs = new Map();

Phase5.getData().then((data) => {
    // Add all the transactions
    addTxs(txs, data.hashtags);
    addTxs(txs, data.profiles);
    addTxs(txs, data.reports);
    addTxs(txs, data.tags);

    // Check for multiple users for the same hash
    txs.forEach((value, key) => {
        if (value.length > 1) throw `Transaction with hash ${key} has been used by multiple users`
    })
})

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




