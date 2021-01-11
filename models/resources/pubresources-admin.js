const schema = require('./memresources');
const { views } = require('./resource');

//Export model
module.exports = {
  schema,
  views,
  name: 'Public Resources',
  api: 'LCRUDA', //E - export
  mraBE: {
    valueSearchFields: ['topicTags'],
  },
};
