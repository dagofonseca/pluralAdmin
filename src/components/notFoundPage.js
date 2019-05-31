'use strict';

var React = require('react');
var Link = require('react-router-dom').Link;

class NotFound extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>404 Not Found</h1>
                <p>Whoops!  Sorry, there is nothing to see</p>
                <p><Link to="/">Back to home</Link></p>
            </div>
        );
    }
}

module.exports = NotFound;