let memResourcesDef = require('./memresources-public');
let pubResourcesDef = require('./pubresources-public');

const schemas = {
    'PubResources': pubResourcesDef,
    'MemResources': memResourcesDef,
};

const config = {
    dateFormat: 'MM-DD-YYYY',
    timeFormat: 'hh:mm:ss'
}

const authz = {
    'module-authz': { 'LoginUser': 'R', 'Anyone': '' },
    'PubResources': { 'LoginUser': 'R', 'Anyone': 'R' },
    'MemResources': { 'LoginUser': 'R', 'Anyone': '' },
}

const DB_CONFIG = {
    APP_NAME: process.env.APP_NAME,
    MODULE_NAME: __dirname.split('/').slice(-1)[0], //last part of the dir
};

module.exports = { schemas, config, authz, DB_CONFIG };