const fs = require("fs");
const path = require('path');

const getNotesData = () => {
    return JSON.parse(fs.readFileSync(path.join(__dirname, "../notes.json"), "utf8"))
}

module.exports = getNotesData
