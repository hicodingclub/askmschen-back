const schema = require('./news');

const brief = "signaturePicture title publishDate";
const detail = "signaturePicture title author publishDate content"; //sequence is critical for mraUI detailType 'post'
const create = "title content author signaturePicture";
const edit = "title content signaturePicture";
const textSearch = "title author content"
const index = "title";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
    schema,
    views,
    name: 'News and Events',

    mraUI: {
        detailType: 'post', //use the post view in detailed page
        listType: 'list', // list, table, or grid
        listToDetail: 'click', // link, click, or none
        defaultListSort: { 'publishDate': 'desc' },
    },
};