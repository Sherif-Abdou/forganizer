const fs = require("fs")
const path = require("path")

module.exports.loadConfig = function(path) {
    let file = fs.readFileSync(path);
    let json = JSON.parse(file);
    return json
}

module.exports.setUpDirectories = function(dir_path, config) {
    config.forEach(ext => {
        let dest_path = path.join(dir_path, ext.name);
        if (!fs.existsSync(dest_path)) {
            fs.mkdirSync(dest_path)
        }
    })
}