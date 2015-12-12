var ApiActions = require('../actions/benchActions.js');

var ApiUtil = {
  fetchBenches: function () {
    $.ajax({
      url: "api/benches",
      success: function (benches) {
        ApiActions.receiveBenches(benches);
      }
    });
  }
};

// temp export ApiUtil to the window for testing:
window.ApiUtil = ApiUtil;

module.exports = ApiUtil;
