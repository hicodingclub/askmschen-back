const schema = require('./payment');

const brief = 'enrollment price createdAt[Created At] status';
const detail =
  'enrollment price createdAt[Created At] transLogP[Transaction Log] transLogA[Transaction Log - Admin] status';
const create = 'enrollment price transLogP transLogA status';
const edit = 'status notes';
const textSearch = 'enrollment';
const index = '_id';

const views = [brief, detail, create, edit, textSearch, index];

//Export model
module.exports = {
  schema,
  views,
  name: 'Payment',

  patch: ['muser_id'], //extra fields to patch to schema
  api: 'LRUA', //E - export
  mraUI: {
    listWidgets: {
      general: {
        views: ['table', 'list', 'grid'],
      },
      select: {
        views: ['table', 'list'],
      },
      sub: {
        views: ['table', 'list'],
      }
    },
    listWidgetTypes: {
      general: 'general',
      select: 'select',
      sub: 'sub',
    },
    defaultListSort: { createdAt: 'desc' },
  },
};
