
var Dispatcher= require('../dispatcher/appDispathcer.jsx');

var AuthorApi = require('../api/authorApi');
var ActionTypes= require('./actionType');
var AuhtorActions= {
    createAuthor:function(author){
        var newAuthor= AuthorApi.saveAuthor(author);
        
        Dispatcher.dispatch({
            actionType:ActionTypes.CREATE_AUTHOR,
            author:newAuthor
        })
    },
    updateAuhtor:function(author){
        var updatedAuthor= AuthorApi.saveAuthor(author);

        Dispatcher.dispatch({
            actionType:ActionTypes.UPDATE_AUTHOR,
            author:updatedAuthor
        })
    },
    deleteAuthor:function(id){
        var updatedAuthor= AuthorApi.deleteAuthor(id);

        Dispatcher.dispatch({
            actionType:ActionTypes.DELETE_AUTHOR,
            id:id
        })
    },
};

module.exports=AuhtorActions;