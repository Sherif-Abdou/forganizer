const organizer = require("../src/organizer");
const path = require("path");
const fs = require("fs");
const rimraf = require("rimraf")

describe("organizer", () => {
    it("loads config file", () => {
        let config = organizer.loadConfig(path.join(__dirname,"..","config.json"))
        console.log(config)
    })

    it("creates folders based on config", () => {
        rimraf.sync(path.join(__dirname,"files"))
        fs.mkdirSync(path.join(__dirname,"files"))
        let config = organizer.loadConfig(path.join(__dirname,"..","config.json"))
        organizer.setUpDirectories(path.join(__dirname,"files"), config);
    })
})
