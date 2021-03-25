const schema = require('./question');

var brief = "name email";
var detail = "name email question";
var create = "name email question";
var edit = "name email question";
var textSearch = "name email";
var index = "email"; //let's temporarily put any field here since this schema is not referred. 

var views = [brief, detail, create, edit, textSearch, index]

//Export model
module.exports = {
    schema,
    views,
    name: 'Questions',
    api: 'LCRUDEM', //E - export
};