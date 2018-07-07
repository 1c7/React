'use strict';

var User = function User(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Name: ',
      props.name
    ),
    React.createElement(
      'h2',
      null,
      'Age: ',
      props.age
    ),
    React.createElement(
      'h3',
      null,
      'Title: ',
      props.title
    )
  );
};
User.defaultProps = {
  title: 123
};

ReactDOM.render(React.createElement(User, { name: 'androis', age: 27 }), document.getElementById('app'));
