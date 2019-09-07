const fs = require("fs")

module.exports.loadConfig = function(path) {
    let file = fs.readFileSync(path);
    let json = JSON.parse(file);
    return json
}

