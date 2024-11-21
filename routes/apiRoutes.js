const router = require("express").Router();
const controllers = require("../controllers");

router.get("/songs", controllers.song.getAll);
router.post("/songs", controllers.song.create);

router.get('/search', controllers.lyric.searchLyrics);

module.exports = router;
