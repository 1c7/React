console.log('App.js running!');

var template = (
  <div>
    <h1>Hello Universe</h1>
    <p>sceond line</p>
  </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);