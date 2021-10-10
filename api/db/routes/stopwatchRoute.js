const stopwatch = require('../controller/stopwatchController.js');

module.exports = (app) => {
  app.route('/stopwatch')
    .get(stopwatch.getStopwatches)
    .post(stopwatch.addStopwatch)

  app.route('/stopwatch/:id')
    .put(stopwatch.updateStopwatch)
    .delete(stopwatch.deleteStopwatch)
}