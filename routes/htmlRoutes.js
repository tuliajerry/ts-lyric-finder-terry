const router = require("express").Router();
const checkAuth = require("../middleware/auth");


router.get("/", ({ session: { isLoggedIn }, query: { error } }, res) => {
  res.render("index", { isLoggedIn, error });
});


router.get("/login", (req, res) => {
  if (req.session.isLoggedIn) return res.redirect("/");
  res.render("login", { error: req.query.error });
});


router.get("/signup", (req, res) => {
  if (req.session.isLoggedIn) return res.redirect("/");
  res.render("signup", { error: req.query.error });
});


router.get("/private", checkAuth, ({ session: { isLoggedIn } }, res) => {
  res.render("protected", { isLoggedIn });
});


router.get("/lyrics", checkAuth, ({ session: { isLoggedIn } }, res) => {
  res.render("lyrics", { isLoggedIn });
});

module.exports = router;
