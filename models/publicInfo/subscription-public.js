const schema = require('./subscription');

var brief = "name email";
var detail = "name email";
var create = "name email";
var edit = "name email";
var textSearch = "name email";
var index = "email"; //let's temporarily put any field here since this schema is not referred. 

var views = [brief, detail, create, edit, textSearch, index];

//Export model
module.exports = {
    schema,
    views,
    name: "Subscription",
    // patch: ['muser_id'], //field is member which is already defined, so no need to patch
    api: "C",
    mraUI: {
        listType: 'table', // table, list, or grid

        disableListSearch: true, // not show the search bar
        listActionButtons: ['', ''],

        detailActionButtons: ['', '', ''],
        //detailActions: [["Make Payment", "/actions/pay"]],

        selectActionViewType: 'grid', // select extraView type: dropdown, grid, table, list
    },
};