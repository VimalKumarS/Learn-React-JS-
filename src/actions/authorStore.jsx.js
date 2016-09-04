/**
 * Created by vimal on 9/4/2016.
 */

var Dispatcher= require('../dispatcher/appDispathcer.jsx');
var ActionTypes= require('./actionType')
var EventEmitter = require('events').EventEmitter;
var CHANGE_EVENT ='change'
var assign = require('object-assign');
var _ =require('lodash')
var _authors=[];

var AuthorStore= assign({},EventEmitter.prototype,{
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListener:function(callback){
        this.removeListener(CHANGE_EVENT,callback)
    },
    emitCHange:function(){
        this.emit(CHANGE_EVENT)
    },
    getAllAuhtors:function(){
        return _authors;
    },
    getAuhtorByID:function(id){
        return _.find(_authors,{id:id})
    }
});

Dispatcher.register(function(action){
    switch(action.actionType){
        case ActionTypes.INITIALIZE:
            _authors= action.initialdata.authors;
            AuthorStore.emitCHange();
            break;
        case ActionTypes.CREATE_AUTHOR:
            _authors.push(action.author)
            AuthorStore.emitCHange();
            break;
        case ActionTypes.DELETE_AUTHOR:
           _.remove(authors,function(author){
               return action.id===author.id;
           })
            AuthorStore.emitCHange();
            break;
        case ActionTypes.UPDATE_AUTHOR:
            var existingAuthor=_.find(_author,{id:action.auhtor.id})
            var existingAuthorIndex= _.indexOf(_authors,existingAuthor)
            _authors.splice(existingAuthorIndex,1,action.author)
            AuthorStore.emitCHange();
            break;
        default:
            //no op
    }
})

module.eports=AuthorStore;