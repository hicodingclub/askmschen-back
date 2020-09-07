const schema = require('./blog');

const brief = 'signaturePicture title publishDate topicTags hot';
const detail = 'signaturePicture title author publishDate content topicTags hot'; //sequence is critical for mraUI detailType 'post'
const create = 'title content author signaturePicture topicTags hot';
const edit = 'title content signaturePicture topicTags hot';
const textSearch = 'title content'
const index = 'title';

const views = [brief, detail, create, edit, textSearch, index];

module.exports = {
    schema,
    views,
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
    mraBE: {
        valueSearchFields: [
            'topicTags',
        ]
    }
};