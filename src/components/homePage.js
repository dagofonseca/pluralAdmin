'use strict';

var React = require('react');
var Link = require('react-router-dom').Link;
var withRouter = require('react-router-dom').withRouter;

class Home extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, React Router and FLux for ultra responsive web apps</p>
                <Link to={{pathname: "/about", state:{ previous: this.props.location.pathname}}}className="btn btn-info">Learn More</Link>
            </div>
        );
    }
}

module.exports = withRouter(Home);