const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function getResourceSchema() {
  const schema = new Schema(
    {
      title: { type: String, required: true },
      subTitle: { type: String, required: true },
      topicTags: { type: [{ type: String }], required: false, },

      description: { type: String, editor: true },
      attachments: {
        type: [{ type: String, mraType: 'file', mraSharable: false }],
        required: false,
      }
    },
    {
      timestamps: true,
    }
  );
  return schema;
}

const brief = 'title | subTitle | topicTags | createdAt[Publish Date]';
const detail = 'title | subTitle | topicTags | description | attachments | createdAt[Publish Date]';
const create = 'title subTitle topicTags description attachments';
const edit = 'title subTitle topicTags description attachments';
const textSearch = 'title';
const index = 'title';

const views = [brief, detail, create, edit, textSearch, index]

module.exports = {
    getResourceSchema,
    views,
}
