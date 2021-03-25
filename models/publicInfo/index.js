let newsDef = require('./news-admin');
let blogDef = require('./blog-admin');
let subscriptionDef = require('./subscription-admin');
let questionDef = require('./question-admin');

const schemas = {
    'News': newsDef,
    'Blog': blogDef,
    'Subscription': subscriptionDef,
    'Question': questionDef,
};

const config = {
    dateFormat: 'MM-DD-YYYY',
    timeFormat: 'hh:mm:ss',
}

const authz = {
    'module-authz': { 'LoginUser': 'R', 'Anyone': '' }
}

const DB_CONFIG = {
    APP_NAME: process.env.APP_NAME,
    MODULE_NAME: __dirname.split('/').slice(-1)[0], //last part of the dir
};

module.exports = { schemas, config, authz, DB_CONFIG };