'use strict';

console.log('App.js running!');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Hello Universe'
  ),
  React.createElement(
    'p',
    null,
    'sceond line'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
