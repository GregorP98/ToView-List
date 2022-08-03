const { mongoose } = require("./index.js");

const episodeSchema = new mongoose.Schema({
  id: String,
  seriesName: String,
  episodeTitle: String,
  released: String,
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
