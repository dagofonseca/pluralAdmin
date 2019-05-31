'use strict';

var React = require('react');
var Route = require('react-router-dom').Route;
var Redirect = require('react-router-dom').Redirect;
var Switch = require('react-router-dom').Switch;
var HomePage = require('./components/homePage');
var About = require('./components/about/aboutPage');
var Authors = require('./components/authors/authorPage');
var NotFound = require('./components/notFoundPage');

class Routes extends React.Component {
    
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomePage} />
                <PrivateRoute path="/about" component={About} />
                <Route path="/authors" component={Authors} />
                <Redirect from="/about-us" to="/about" />
                <Redirect from="/awthors" to="/authors" />
                <Redirect from="/about/*" to="/about" />
                <Route component={NotFound} />
            </Switch>
        );
    }
}

module.exports = Routes;

function PrivateRoute({ component: Component, path }) {
    
    return (
        <Route
            exact
            path={path}
            render={ (props) =>
                confirm("Do you really want to go to this page?") ?
                    <Component /> : <Redirect  to={props.location.state.previous} />
                
            }
        />
    );
}


//     ) : <h3>nothing hapend</h3>
// }

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