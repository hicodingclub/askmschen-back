const schema = require('./memresources');
const { views } = require('./resource');

//Export model
module.exports = {
  schema,
  views,
  name: 'Member Resources',
  api: 'LCRUDA', //E - export
  mraBE: {
    valueSearchFields: ['topicTags'],
  },
};
