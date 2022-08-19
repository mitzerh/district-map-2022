
const moduleAlias = require('module-alias');
const dir = __dirname;

const list = {
    '@helper': `${dir}/src/helper`,
    '@config': `${dir}/config`
};

moduleAlias.addAliases(list);
