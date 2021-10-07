const stopwatch = require('../controller/stopwatchController.js');

module.exports = (app) => {
  app.route('/stopwatch')
    .get(stopwatch.getStopwatches)
}