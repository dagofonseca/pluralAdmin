'use strict';

var React = require('react');
var Route = require('react-router-dom').Route;
var Switch = require('react-router-dom').Switch;
var HomePage = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Authors = require('./components/authors/authorPage');

class Routes extends React.Component{
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/authors" component={Authors} />
            </Switch>
        );
    }
}

module.exports = Routes;

// var Router = require('react-router');
// var DefaultRoute = Router.DefaultRoute;
// var Route = Router.Route;

// var routes = (
//     <Route name="app" path="/" handler={require('./components/app')}>
//         <DefaultRoute hanlder={require('./components/homePage')} />
//         <Route name="authors" handler={require('./components/authors/authorPage')} />
//         <Route name="about" handler={require('./components/about/aboutPage')} />
//     </Route>
// );