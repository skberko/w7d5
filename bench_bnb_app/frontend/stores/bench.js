var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher.js');
var _benches = [];
var BenchStore = new Store(AppDispatcher);
var BenchConstants = require('../constants/bench_constants');

BenchStore.all = function () {
  return _benches.slice(0);
};

var resetBenches = function (benches) {
  _benches = benches;
};

BenchStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      var result = resetBenches(payload.benches);
      break;
  }
  BenchStore.__emitChange();
};



//We are going to temporarily export the BenchStore to the window so
// we can test it in the console before we get our components working:
window.BenchStore = BenchStore;

module.exports = BenchStore;
