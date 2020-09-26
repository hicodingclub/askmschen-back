const schema = require('./payment');
const emailer = require('./payment-emailing');

const brief = 'enrollment price createdAt[Created At] status';
const detail =
  'enrollment price createdAt[Created At] transLogP[Transaction Log] status';
const create = 'enrollment price transLogP transLogA status';
const edit = 'status notes';
const textSearch = 'enrollment';
const index = '_id'; //let's temporarily put any field here since this schema is not referred.

const views = [brief, detail, create, edit, textSearch, index];

//Export model
module.exports = {
  schema,
  views,
  name: 'Online Payment',

  patch: ['muser_id'], //extra fields to patch to schema
  owner: { enable: true, type: 'user' },

  api: 'LCR', //E - export
  mraUI: {
    listWidgets: {
      general: {
        views: ['list',],
      },
      select: {
        views: ['list',],
      },
      sub: {
        views: ['list',],
      }
    },
    listWidgetTypes: {
      general: 'general',
      select: 'select',
      sub: 'sub',
    },
    disableListSearch: true, // not show the search bar
    listActionButtons: ['', ''],
    listTitle: 'Your Payments',
    defaultListSort: { createdAt: 'desc' },

    detailActionButtons: ['', '', ''],
    detailTitle: 'Payment',
  },
  mraBE: {
    // list of fields; owner will set owner field in this list; and "_id" will also be put in;
    // "undefined" to allow list without search criteria
    listOnlyAllowSearchOn: ['enrollment'],
    emailer, //email templates to create during app start up from backend.
  },
};
