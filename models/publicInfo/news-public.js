const schema = require('./news');

const brief = "signaturePicture title publishDate";
const detail = "signaturePicture title author publishDate content"; //sequence is critical for mraUI detailType 'post'
const create = "title content author signaturePicture";
const edit = "title content author signaturePicture";
const textSearch = "title author content"
const index = "title";

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
    schema,
    views,
    api: "LR",
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

        detailType: 'post', //use the post view in detailed page
        listToDetail: 'click', // link, click, or none
        defaultListSort: { 'publishDate': 'desc' },
        publicListFilter: {},
        homeListNumber: 5,

        listTitle: 'News and Events',

    },
};