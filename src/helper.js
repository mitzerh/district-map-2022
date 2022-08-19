const config = require('@config');
const CLIHelper = require('cli-helper').constructor;

class Helper extends CLIHelper {

    constructor() {
        super();
    }

    read() {
        let mapPath = `${config.dir.src}/map/house-2022.svg`;
        return this.readFile(mapPath);
    }

}

module.exports = new Helper;
