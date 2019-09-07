import fs = require("fs")
import path = require("path")

interface Configuration {
    name: string
    extensions: string[]
}

export function loadConfig(path: string): Configuration[] {
    let file = fs.readFileSync(path);
    let json = JSON.parse(file.toString());
    return json
}

export function setUpDirectories(dir_path: string, config: Configuration[]) {
    config.forEach(ext => {
        let dest_path = path.join(dir_path, ext.name);
        if (!fs.existsSync(dest_path)) {
            fs.mkdirSync(dest_path);
        }
    });
}

export function sortFiles(dir_path: string, config: Configuration[]) {
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