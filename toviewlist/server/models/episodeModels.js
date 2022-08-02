const { mongoose } = require("./index.js");

const episodeSchema = new mongoose.Schema({
  seriesName: String,
  episodeTitle: String,
  date: String,
  network: String,
});

const Episode = mongoose.model("Episode", episodeSchema);

const getEpisode = async function () {
  const episodes = await Episode.find({});
  return episodes;
};

const setEpisode = async function (episode) {
  const newEpisode = await Episode.create(episode);
  return newEpisode;
};

module.exports = { getEpisode, setEpisode };
