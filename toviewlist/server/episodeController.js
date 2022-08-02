const { response } = require("express");
const model = require("./models/episodeModels");

const getEpisode = async function (request, response) {
  try {
    const episode = await model.getEpisode();
    response.status(200).json(episode);
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
};

const setEpisode = async function (request, response) {
  try {
    console.log("received request:", request.body);
    const newEpisode = await model.setEpisode(request.body);
    response.status(201).json(newEpisode);
  } catch (error) {
    console.error(error);
    response.status(500).end();
  }
};

module.exports = { getEpisode, setEpisode };
