'use strict';

console.log('App.js running!');

var list = [1, 2, 3];
var count = 0;

var add = function add() {
  console.log('mionusOne');
};

var plusOne = function plusOne() {
  console.log('plusOne');
};

var newValue = function newValue() {};

function formSubmit(e) {
  e.preventDefault();
  var input_element = e.target.elements.in;
  var value = input_element.value;
  list.push(value);
  render();
  input_element.value = '';
}

var appRoot = document.getElementById('app');

function render() {
  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'toggle display'
    ),
    list.map(function (l) {
      return React.createElement(
        'p',
        { key: l },
        l
      );
    }),
    React.createElement(
      'form',
      { onSubmit: formSubmit },
      React.createElement('input', { type: 'text', onClick: newValue, name: 'in' }),
      React.createElement(
        'button',
        { type: 'submit' },
        'submit'
      )
    )
  );
  ReactDOM.render(template, appRoot);
}

render();
