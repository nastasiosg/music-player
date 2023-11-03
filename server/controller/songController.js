import Song from '../models/Song.js';

export async function uploadSong(req, res) {
  try {
    const { title, length } = req.body;

    const newSong = new Song({
      title,
      length,
      songFile: req.file.filename,
    })
    
    const savedSong = await newSong.save();
    console.log('Song uploaded', savedSong);

    res.status(201).json(savedSong);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload song' });
  }
}
