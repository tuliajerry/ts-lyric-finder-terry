const router = require("express").Router();
const controllers = require("../controllers");
const checkAuth = require("../middleware/auth");

router.get("/", ({ session: { isLoggedIn } }, res) => {
  res.render("index", { isLoggedIn });
});

router.get("/private", checkAuth, ({ session: { isLoggedIn } }, res) => {
  res.render("protected", { isLoggedIn });
});

router.get('/lyrics', ({ session: { isLoggedIn } }, res) => {
  res.render('lyrics', { isLoggedIn });
});

module.exports = router;
