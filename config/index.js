
const path = require('path');
const base = path.normalize(`${__dirname}/..`);

const Config = (() => {

    let config = {};

    config.dir = {
        base: base
        src: `${base}/src`
    }

    return config;

})();

module.exports = Config;
