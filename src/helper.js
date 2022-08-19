const config = require('@config');
const _ = require('lodash');
const CLIHelper = require('cli-helper').constructor;

class Helper extends CLIHelper {

    constructor() {
        super();
    }

    read(dir) {
        let mapPath = `${dir}/map.svg`;
        return this.readFile(mapPath);
    }

    write(markup, id) {
        this.writeFile(`${config.dir.dest}/map.${id}.svg`, markup)
    }

    getPathInfo(lookup, pathInfo) {
        let found = null;
        for (let code in pathInfo) {
            for (let id in pathInfo[code]) {
                if (id === lookup) {
                    found = _.merge({ code: code },
                        pathInfo[code][id]
                    );
                    break;
                }
            }
        }
        return found;
    }

    folderName(dir) {
        let sp = dir.split('/');
        return sp[sp.length-1];
    }

}

module.exports = new Helper;
