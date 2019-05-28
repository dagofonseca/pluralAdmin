'use strict';

var React = require('react');
var Router = require('react-router-dom').BroserRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;

function Index() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

class AppRouter extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about/">About</Link>
                            </li>
                            <li>
                                <Link to="/users/">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    <Route path="/" exact component={Index} />
                    <Route path="/about/" component={About} />
                    <Route path="/users/" component={Users} />
                </div>
            </Router>
        );
    }
}

module.exports = AppRouter;

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

// module.exports = routes;

