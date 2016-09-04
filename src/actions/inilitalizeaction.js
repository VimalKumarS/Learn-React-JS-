/**
 * Created by vimal on 9/4/2016.
 */

var Dispatcher= require('../dispatcher/appDispathcer.jsx');
var ActionTypes= require('./actionType');
var AuthorApi= require('../api/authorApi')


var InitializeActions={
    intApp:function(){
        Dispatcher.dispatch({
            actionType:Actiontype.INITIALIZE,
            initialData:{
                authors:AuhtorApi.getAllAuhtors()
            }
        });
    }
}

module.exports=InitializeActions;