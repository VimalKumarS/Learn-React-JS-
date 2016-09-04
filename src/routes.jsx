var react = require('react');

var Router= require('react-router');
var defaultRoute=Router.DefaultRoute;
var Route= Router.Route;
var NotFoundRoute= Router.NotFoundRoute;
var Redirect = Router.Redirect


var routes=(
    <Route name="app" path="/" handler={ require('./Componenet/app')}>
    <DefaultRoute handler={ require('./Componenet/homepage')} />
    <Route name="authors" handler={require('./Componenet/author/authorPage')} />
    <Route name="about" handler={require('./Componenet/about/aboutPage')} />
    <NotFoundRoute handler="{require('')}" />
        <Redirect form="about-us" to="about" />
</Route>
);

module.exports= routes;