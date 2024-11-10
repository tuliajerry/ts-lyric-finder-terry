const { getSongLyrics } = require('../services/genius');

async function searchLyrics(req, res) {
  try {
    const { songTitle } = req.query; 

    if (!songTitle) {
      return res.redirect('/?error=Please provide a song title');
    }

   
    const lyrics = await getSongLyrics(songTitle);

    
    res.render('lyrics', { songTitle, lyrics });
  } catch (err) {
    console.error(err);
    res.redirect(`/?error=${err.message}`);
  }
}

module.exports = { searchLyrics };
