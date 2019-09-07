const organizer = require("../src/organizer");
const path = require("path");

describe("organizer", () => {
    it("loads config file", () => {
        let config = organizer.loadConfig(path.join(__dirname,"..","config.json"))
        console.log(config)
    })
})
