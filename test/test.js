const organizer = require("../src/organizer")

describe("organizer", () => {
    it("Should print file names", () => {
        let output = organizer.listDirectory(__dirname);
        console.log(output);
    })
})
