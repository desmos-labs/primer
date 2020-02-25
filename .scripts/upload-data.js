require("@babel/core");
require("@babel/polyfill");

import axios from "axios";

const fs = require('fs');
const csvFilePath = process.argv[2];

// Gist data
const gistId = "a4c53515573ecb513847a2bd2dca17ed";
const gistFileContents = fs.readFileSync(csvFilePath).toString();

// APIs data
const endpoint = `https://api.github.com/gists/${gistId}`;
const body = {
    "files": {
        "scoreboard.csv": {
            "content": gistFileContents
        }
    }
};
const headers = {Authorization: `token ${process.env.GITHUB_TOKEN}`};

axios.patch(endpoint, body, {headers: headers})
    .catch((error) => console.log(error))
    .then(function (response) {
        console.log("Scoreboard updated");
    });
