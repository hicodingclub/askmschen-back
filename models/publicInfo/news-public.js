const schema = require('./news');

const brief = "signaturePicture title publishDate";
const detail = "signaturePicture title publishDate content"; //sequence is critical for mraUI detailType 'post'
const create = "title content signaturePicture";
const edit = "title content signaturePicture";
const textSearch = "title content"
const index = "title";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
    schema,
    views,
    api: "LR",
    listWidgets: [],
    mraUI: {
        detailType: 'post', //use the post view in detailed page
        listType: 'list', // list, table, or grid
        listToDetail: 'click', // link, click, or none
        defaultListSort: { 'publishDate': 'desc' },
        publicListFilter: {},
        homeListNumber: 5,

        listTitle: 'News and Events',

    },
};