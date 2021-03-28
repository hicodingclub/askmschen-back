const schema = require('./subscription');

var brief = "name email createdAt[Created At]";
var detail = "name email createdAt[Created At]";
var create = "name email";
var edit = "name email";
var textSearch = "name email";
var index = "email"; //let's temporarily put any field here since this schema is not referred. 

var views = [brief, detail, create, edit, textSearch, index]

//Export model
module.exports = {
    schema,
    views,
    name: 'Subscriptions',
    api: 'LCRUDEM', //E - export
};