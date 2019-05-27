$ = jQuery = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom')
var Home = require('./components/homePage');
var About = require('./components/about/aboutPage');
var PropTypes = require('prop-types');

(function (win) {
    "use strict";
    class App extends React.Component {
            
        render() {
            var Child;
    
            switch (this.props.route) {
                case 'about': Child = About;
                    break;
                default: Child = Home;
            }
            return (
                <div>
                    <Child />
                </div>
            )
    
        }
    }
    
    App.propTypes = {
        route: PropTypes.string
    }
    
    function render() {
        var route = win.location.hash.substr(1);
        ReactDOM.render(<App route={route} />, document.getElementById('app'));
    }
    
    win.addEventListener('hashchange', render);
    render();
    
    ReactDOM.render(<Home />, document.getElementById('app'));
})(window);