'use strict';

var React = require('react');
var ReactDOM = require('react-dom')
// var Router = require('react-router');
var Routes = require('./router');

// Router.run(routes, function(Handler){
//     ReactDOM.render(<Handler />, document.getElementById('app'));
// })
ReactDOM.render(<Routes />,document.getElementById('app'));