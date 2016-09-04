/**
 * Created by vimal on 8/29/2016.
 */
/*eslint-disable strict*/

$=jQuery=require('jquery')
var React= require('react')
var Home = require('./Component/homepage.jsx')
var aboutPage= require('./Component/about/AboutPage.jsx')
var Authors= require('./Component/author/authorPage.jsx')
//var app = console.log("Hello world from browserify");

//
var RouteHandler= require('react-router');.RouteHandler;
var Router= require('react-router');
var routes= require('./routes')

var App= React.createClass({
    render:function(){
        var Child;
        switch(this.props.route){
            case 'about' : Child = aboutPage;break;
            case 'authors': Child= Authors ; break;
            default : Child = Home;
        }
         return (
                <div>
               <!--<Child /> -->
                 <RouteHandler/>
                 </div>

        );
    }
})
/*
function render(){
    var route=window.location.hash.substr(1)
    React.render(<App route={route} />, document.getElementById('app'));
}
window.addEventListener('hashchange', render,false);
render();*/
//React.render(<Home />,document.getElementById('app'));

//module.exports=app;


// Run with route

var InitializeActions = require('./actions/inilitalizeaction')
InitializeActions.intApp();
Router.run(routes,function(Handler){
    React.render(<Handler/>,document.getElementById('app'))
});