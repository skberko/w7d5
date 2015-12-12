var React = require('react');
var BenchStore = require('../stores/benches.js');
var ApiUtil = require('../utils/api_util.js');

var Index = React.createClass({
  getInitialState: function () {
    return { benches: BenchStore.all() };
  },

  _onChange: function () {
    this.setState({ benches: BenchStore.all() });
  },

  componentDidMount: function () {
    this.benchListener = BenchStore.addListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  }
});

module.exports = Index;
