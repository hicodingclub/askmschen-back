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
        listWidgets: {
            general: {
              views: ['list', 'table', 'grid'],
            },
            select: {
              views: ['list', 'table',],
            },
            sub: {
              views: ['list', 'table',],
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
    },
};