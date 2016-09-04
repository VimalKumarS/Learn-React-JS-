/**
 * Created by vimal on 8/30/2016.
 */
var react= require('react');

var About= react.createClass({
    statics:{
        willTransitionTo:function(tansition,param,query,callback){
            transition.abort();
        },
        willTransitionFrom:function(tansition,component){
            transition.abort()
        }
    },
    render:function(){
        return (
            <div>
                <h1>About</h1>
                <ul>
                <li>React</li>
            <li>React router</li>
            <li>Flux</li>
            <li>Node</li>
            <li>Gulp</li>
        <li>Browserify</li>
        <li>Bootstrap</li>
                </ul>
            </div>
        );
    }
})