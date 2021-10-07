const Stopwatch = require('../model/stopwatchModel.js');

exports.getStopwatches = async (req, res) => {
  try {
    const result = await Stopwatch.findAll();
    if (!result)
      res.status(404).send('Data not found');

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
}