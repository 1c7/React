'use strict';

console.log('App.js running!');

var template = React.createElement(
  'h1',
  null,
  'Hello Universe'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
