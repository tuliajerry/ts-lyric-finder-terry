const { Song } = require("../models");

async function create(req, res) {
  const { title, artist, lyrics } = req.body;
  try {
    await Song.create(title, artist, lyrics);
    res.redirect("/");
  } catch (err) {
    res.status(500).send(err.message);
  }
}

async function getAll(req, res) {
  try {
    const songs = await Song.findAll();
    res.render("songs", { songs });
  } catch (err) {
    res.status(500).send(err.message);
  }
}

module.exports = { create, getAll };
