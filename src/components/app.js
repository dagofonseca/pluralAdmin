/*eslint-disable strict */
$ = jQuery = require('jquery');
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var Header = require('./common/header');
var PropTypes = require('prop-types');

class App extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="container-fluid">
                    <RouteHandler />
                </div>
            </div>
        )
    }
}

App.propTypes = {
    route: PropTypes.string
}

module.exports = App;