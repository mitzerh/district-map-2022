const Helper = require('@helper');
const config = require('@config');
const JSDOM = require('jsdom').JSDOM;
const mapping = require('@mapping');

const dir = __dirname;
const PATH_INFO = mapping(dir);

let folder = Helper.folderName(dir);
let raw = Helper.read(dir);
let dom = new JSDOM(raw);
let document = dom.window.document;

/**
 * this portion is where you start to
 * customize lookup for the dom
 */

let paths = document.querySelectorAll('path');

paths.forEach((item, i) => {
    let id = item.getAttribute('id');
    let num = parseInt(id.replace(/path/, ''), 10)
    item.setAttribute('data-num', num);

    // place the state code
    // the first 50 paths in the svg
    // looks to be the state boundaries
    let code = config.states[i] || null;
    if (code) {
        item.setAttribute('data-code', code);
    }

    // place the districts & state code
    let pathInfo = Helper.getPathInfo(id, PATH_INFO);
    if (pathInfo) {
        console.log('found!', id, pathInfo);
        if (pathInfo.district) {
            item.setAttribute('data-district', pathInfo.district);
        }
        item.setAttribute('data-code', pathInfo.code);
    }
})

//let svg = dom.serialize();
let svg = document.querySelector('svg').outerHTML;
let html = Helper.readFile(`${dir}/template.html`);
html = html.replace('{{SVG_MAP}}', svg);

Helper.write(svg, html, folder);
