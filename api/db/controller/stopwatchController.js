const Stopwatch = require("../model/stopwatchModel.js");

exports.getStopwatches = async (req, res) => {
  try {
    const result = await Stopwatch.findAll();
    if (!result) res.status(404).send("Data not found");

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.addStopwatch = async (req, res) => {
  const { title, time, date, running } = req.body;

  try {
    const res = await Stopwatch.create({
      title,
      time,
      date,
      running,
    });
    res.status(201).json({ msg: "Data Created", response: res });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateStopwatch = async (req, res) => {
  const id = req.params.id;
  const { title, time, date, running } = req.body;

  try {
    await Stopwatch.update(
      {
        title,
        time,
        date,
        running,
      },
      {
        where: {
          id: id,
        },
      }
    );
    res.status(200).send("Data updated");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteStopwatch = async (req, res) => {
  const id = req.params.id;

  try {
    await Stopwatch.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send("Data deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteAllStopwatch = async (req, res) => {
  try {
    await Stopwatch.destroy({
      truncate: true,
    });
    res.status(200).send("All data deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
