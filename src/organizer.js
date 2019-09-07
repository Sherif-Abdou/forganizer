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
            fs.mkdirSync(dest_path);
        }
    });
}

module.exports.sortFiles = function(dir_path, config) {
    let files = fs.readdirSync(dir_path);
    files.forEach(file => {
        const full_path = path.join(dir_path, file);
        if (!fs.lstatSync(full_path).isDirectory()) {
            const file_ext = path.parse(full_path).ext
            config.forEach(configuration => {
                configuration.extensions.forEach(ext => {
                    if (ext == file_ext) {
                        fs.renameSync(full_path, path.join(dir_path, configuration.name, file))
                    }
                });
            });
        }
    });
}