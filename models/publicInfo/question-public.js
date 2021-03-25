const schema = require('./question');

var brief = "name email";
var detail = "name email question";
var create = "name email question";
var edit = "name email question";
var textSearch = "name email";
var index = "email"; //let's temporarily put any field here since this schema is not referred. 

var views = [brief, detail, create, edit, textSearch, index];

//Export model
module.exports = {
    schema,
    views,
    name: "Question",
    // patch: ['muser_id'], //field is member which is already defined, so no need to patch
    api: "C",
    mraUI: {
        listWidgets: {
            general: {
                views: ['table'],
            },
            select: {
                views: ['table', ],
            },
            sub: {
                views: ['table', ],
            }
        },
        listWidgetTypes: {
            general: 'general',
            select: 'select',
            sub: 'sub',
        },

        disableListSearch: true, // not show the search bar
        listActionButtons: ['', ''],

        detailActionButtons: ['', '', ''],
        //detailActions: [["Make Payment", "/actions/pay"]],

        selectActionViewType: 'grid', // select extraView type: dropdown, grid, table, list
    },
};