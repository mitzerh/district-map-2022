const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const config = require('@config');


// path information
module.exports = (dir) => {

    let res = {};
    let stateList = [];
    let pathList = [];
    let files = fs.readdirSync(`${dir}/states`);

    for (let i = 0; i < files.length; i++) {
        let file = files[i];
        const info = require(`${dir}/states/${file}`);

        let id = files[i].replace(/\.js/, '')
        if (typeof info === 'object') {

            // add file path to info
            for (let id in info) {
                info[id].file = file;
            }

            let obj = {};
            obj[id] = info;
            hasDuplicates(id, info);
            _.merge(res, obj);
        }
    }

    function hasDuplicates(code, info) {
        let res = false;

        if (stateList.includes(code)) {
            console.log('ERROR: duplicate state code:', code);
            res = true;
        } else {
            stateList.push(code);
            for (let id in info) {
                if (pathList.includes(id)) {
                    console.log('ERROR: duplicate path:', id, info);
                    res = true;
                    break;
                } else {
                    pathList.push(id);
                }
            }
        }

        // do not continue
        if (res) {
            process.exit(1);
        }
    }

    return res;
};
