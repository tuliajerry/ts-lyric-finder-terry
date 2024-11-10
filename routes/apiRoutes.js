const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

// admin login/logout
router.post("/login", controllers.auth.login);
router.get("/logout", controllers.auth.logout);
router.post("/signup", controllers.user.create);

// routes/apiRoutes.js
router.get("/songs", controllers.song.getAll);
router.post("/songs", controllers.song.create);

module.exports = router;
