const Helper = require('@helper');
const config = require('@config');
const JSDOM = require('jsdom').JSDOM;

let raw = Helper.read();
let dom = new JSDOM(raw);
let document = dom.window.document;


let paths = document.querySelectorAll('path')

paths.forEach((item, i) => {
    let id = item.getAttribute('id');
    let num = parseInt(id.replace(/path/, ''), 10)
    item.setAttribute('data-num', num);

    let code = config.states[i] || null;
    if (code) {
        item.setAttribute('data-code', code);
    }
    //console.log(item.outerHTML);
})

let markup = dom.serialize();
console.log(markup);
Helper.writeFile(`${config.dir.dest}/map.svg`, markup)
//console.log(document.querySelectorAll('path'));

//console.log(raw);
