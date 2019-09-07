const organizer = require("./organizer")
const argv = require("minimist")(process.argv.slice(2))
const path = require("path")

module.exports = () => {
    const dir = argv._[0]
    const full_path = path.join(process.cwd(), dir);
    const config = organizer.loadConfig(path.join(__dirname,"..","config.json"));
    organizer.setUpDirectories(full_path, config);
    organizer.sortFiles(full_path, config);
}