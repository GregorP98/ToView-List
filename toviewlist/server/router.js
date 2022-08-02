const router = require("express").Router();
const episodeController = require("./episodeController");

router.get("/episode", episodeController.getEpisode);
router.post("/episode", episodeController.setEpisode);

module.exports = router;
