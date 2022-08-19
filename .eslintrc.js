module.exports = {
    'root': true,
    'extends': 'eslint:recommended',
    'parserOptions': {
        'sourceType': 'module'
    },
    'rules': {
        'linebreak-style': ['error', 'unix'],

        'comma-dangle': ['error', 'never'],
        'no-cond-assign': ['error', 'always'],
        //'quotes': ['error', 'single', { 'avoidEscape': true }],

        'no-unused-vars': 'off',
        'no-console': 'off',
        'no-useless-escape': 'off'
    },
    'env': {
        'es6': true,
        'node': true
    }

};
