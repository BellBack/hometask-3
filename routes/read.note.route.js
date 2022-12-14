const express = require("express");
const path = require('path');

//services
// const isSessionValid = require("../middlewares/is.session.valid.middleware");
// const getListOfLobbies = require("../middlewares/get.list.of.lobbies.middleware");
// const lobbiesService = require("../services/lobbies.service");
// const gamesService = require("../services/games.template.service");


const router = express.Router();
router.use(express.static(path.join(__dirname, "../public")));

router.use(isSessionValid);
router.use("/lobbies(.html)?", getListOfLobbies);
router.get("/lobbies(.html)?", lobbiesService);
router.get("/:id", gamesService);

module.exports = router;
