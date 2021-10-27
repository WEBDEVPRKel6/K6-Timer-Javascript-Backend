const stopwatch = require("../controller/stopwatchController.js");

module.exports = (app) => {
  app
    .route("/stopwatch")
    .get(stopwatch.getStopwatches)
    .post(stopwatch.addStopwatch);

  app.route("/stopwatch/update/:id").put(stopwatch.updateStopwatch);

  app.route("/stopwatch/delete/:id").delete(stopwatch.deleteStopwatch);

  app.route("/stopwatch/delete").delete(stopwatch.deleteAllStopwatch);

  app.route("/stopwatch/reset/:id").put(stopwatch.resetStopwatch);

  app.route("/stopwatch/reset").put(stopwatch.resetAllStopwatch);
};
