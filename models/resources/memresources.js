const mongoose = require('mongoose');
const { getResourceSchema } = require('./resource')

const schema = getResourceSchema();

module.exports = schema;