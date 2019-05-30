/*eslint-disable strict */
$ = jQuery = require('jquery');
var React = require('react');
var Header = require('./common/header');
var PropTypes = require('prop-types');
var HashRouter = require('react-router-dom').HashRouter;
var Routes = require('../router');

class App extends React.Component {

    render() {
        return (
            <HashRouter>                
                <Header />
                <div className="container-fluid">
                    <Routes />
                </div>
            </HashRouter>
        )
    }
}

App.propTypes = {
    route: PropTypes.string
}

module.exports = App;