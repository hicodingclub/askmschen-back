const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema({
    title: { type: String, required: true, maxlength: 100 },
    author: { type: String, required: true, maxlength: 50 },
    publishDate: { type: Date, default: Date.now },
    content: { type: String, editor: true, required: true },
    signaturePicture: {
        type: String,
        required: true,
        mraType: 'picture',
        mraSharable: true
    },
    topicTags: { type: [{ type: String }], required: false, textarea: false },

    /*
    resource: {
        type: [{ type: String, mraType: 'file', mraSharable: false }],
        required: true,
    },
    */
    hot: { type: Boolean, default: false },
});

module.exports = schema;