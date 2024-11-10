const axios = require('axios');

const GENIUS_API_URL = 'https://api.genius.com';
const GENIUS_API_TOKEN = process.env.GENIUS_API_TOKEN;  // Your Genius API Token


async function getSongLyrics(songTitle) {
  try {
   
    const searchRes = await axios.get(`${GENIUS_API_URL}/search`, {
      params: { q: songTitle },
      headers: { Authorization: `Bearer ${GENIUS_API_TOKEN}` },
    });

    if (searchRes.data.response.hits.length === 0) {
      throw new Error('Song not found');
    }

    const songPath = searchRes.data.response.hits[0].result.path;

   
    const songPageUrl = `${GENIUS_API_URL}${songPath}`;

   
    const songPageRes = await axios.get(songPageUrl);
    const lyricsMatch = songPageRes.data.match(/<div class="lyrics">.*?>(.*?)<\/p>/s);
    
   
    if (lyricsMatch && lyricsMatch[1]) {
      return lyricsMatch[1].replace(/<[^>]*>/g, ''); 
    }
    
    throw new Error('Lyrics not found');
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch lyrics');
  }
}

module.exports = { getSongLyrics };
