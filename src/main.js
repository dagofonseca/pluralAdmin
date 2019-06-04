'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/app');
var InitializeActions = require('./actions/initializeActions');

InitializeActions.initApp();

ReactDOM.render(<App />,document.getElementById('app'));

// Router.run(routes, function(Handler){
//     ReactDOM.render(<Handler />, document.getElementById('app'));
// })