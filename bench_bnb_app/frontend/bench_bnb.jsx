var React = require('react');
var ReactDOM = require('react-dom');
var BenchStore = require('./stores/bench.js');

var Router = require('react-router').Router;
var Route = require('react-router').Route;

var MyComponent = React.createClass({
  render: function () {
    return(
      <div>

      </div>
    );
  }
});

var routes = (
  <Route path="/" component={MyComponent}></Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{ routes }</Router>,
    document.getElementById('root'));
});
