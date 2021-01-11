const schema = require('./memresources');
const { views } = require('./resource');

//Export model
module.exports = {
  schema,
  views,
  name: 'Public Resources',
  api: 'LR',
  mraUI: {
    listWidgets: {
      general: {
        views: ['list'],
      },
      select: {
        views: ['list'],
      },
      sub: {
        views: ['list'],
      },
    },
    listWidgetTypes: {
      general: 'general',
      select: 'select',
      sub: 'sub',
    },
  },
  mraBE: {
    valueSearchFields: ['topicTags'],
  },
};
