const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");


router.post("/login", controllers.auth.login);
router.get("/logout", controllers.auth.logout);
router.post("/signup", controllers.user.create);


router.get("/songs", controllers.song.getAll);
router.post("/songs", controllers.song.create);


router.get("/search", controllers.lyric.searchLyrics);

module.exports = router;
