const schema = require('./blog');

const brief = 'signaturePicture | title | publishDate | topicTags';
const detail = 'signaturePicture title author publishDate content topicTags'; //sequence is critical for mraUI detailType 'post'
const create = 'title content author signaturePicture topicTags hot';
const edit = 'title content author signaturePicture topicTags hot';
const textSearch = 'title content'
const index = 'title';

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
    schema,
    views,
    api: 'LR',
    mraUI: {
        listWidgets: {
            general: {
              views: ['list', 'gallery-bottom-title'],
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

        listTitle: 'Ms. Chen Blog',
        /*
                listCategories: [{
                    listCategoryField: 'topicTags',
                }]
        */
    },
    mraBE: {
        valueSearchFields: [
            'topicTags',
        ]
    },
};