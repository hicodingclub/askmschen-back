let newsDef = require('./news-public');
let blogDef = require('./blog-public');
let subscriptionDef = require('./subscription-public');



const schemas = {
    'News': newsDef,
    'Blog': blogDef,
    'Subscription': subscriptionDef,
};

const config = {
    dateFormat: 'MM-DD-YYYY',
    timeFormat: 'hh:mm:ss'
}

const authz = {
    'module-authz': { 'LoginUser': 'R', 'Anyone': 'R' },
    'Subscription': { 'LoginUser': '', 'Anyone': 'C' }
}

const DB_CONFIG = {
    APP_NAME: process.env.APP_NAME,
    MODULE_NAME: __dirname.split('/').slice(-1)[0], //last part of the dir
};

module.exports = { schemas, config, authz, DB_CONFIG };