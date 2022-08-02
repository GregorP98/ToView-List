const mongoose = require("mongoose");

const connectToDB = async function () {
  await mongoose.connect("mongodb://127.0.0.1:27017/tvdb");
};

module.exports = { mongoose, connectToDB };
