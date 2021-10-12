const { DataTypes } = require("sequelize");
const db = require("../db.js");

const Stopwatch = db.define("Stopwatch", {
  title: {
    type: DataTypes.STRING,
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  running: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

Stopwatch.sync().then(() => console.log("Table created!"));

module.exports = Stopwatch;
