const Helper = require('@helper');
const config = require('@config');
const JSDOM = require('jsdom').JSDOM;
const mapping = require('@mapping');

const dir = __dirname;
const PATH_INFO = mapping(dir);

let raw = Helper.read(dir);
let dom = new JSDOM(raw);
let document = dom.window.document;

let paths = document.querySelectorAll('path');

paths.forEach((item, i) => {
    let id = item.getAttribute('id');
    let num = parseInt(id.replace(/path/, ''), 10)
    item.setAttribute('data-num', num);

    let code = config.states[i] || null;
    if (code) {
        item.setAttribute('data-code', code);
    }

    // districts
    let pathInfo = Helper.getPathInfo(id, PATH_INFO);
    if (pathInfo) {
        console.log('found!', id, pathInfo);
        item.setAttribute('data-district', pathInfo.district);
        item.setAttribute('data-code', pathInfo.code);
    }
    //console.log(item.outerHTML);
})


Helper.write(dom.serialize());
