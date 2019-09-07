const fs = require("fs")

module.exports.listDirectory = function listDirectory(directory) {
    let output = fs.readdirSync(directory);
    return output
} 

