const db = require("../config/connection");

async function create(title, artist, lyrics) {
  const [result] = await db.query(
    `INSERT INTO songs (title, artist, lyrics) VALUES (?, ?, ?)`,
    [title, artist, lyrics]
  );
  return result;
}

async function findAll() {
  const [songs] = await db.query(`SELECT * FROM songs`);
  return songs;
}

async function findById(id) {
  const [[song]] = await db.query(`SELECT * FROM songs WHERE id = ?`, [id]);
  return song;
}

async function update(id, title, artist, lyrics) {
  await db.query(
    `UPDATE songs SET title = ?, artist = ?, lyrics = ? WHERE id = ?`,
    [title, artist, lyrics, id]
  );
}

async function remove(id) {
  await db.query(`DELETE FROM songs WHERE id = ?`, [id]);
}

module.exports = { create, findAll, findById, update, remove };
