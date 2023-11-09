import Song from '../models/Song.js';
import Album from '../models/Album.js';
// import { deleteSongsWithoutAlbumId } from './deleteSongsWithoutAlbumId.js';

export async function uploadSong(req, res) {
  try {
    const { title, length, albumId } = req.body;

    console.log(albumId);

    const newSong = new Song({
      title,
      length,
      songFile: req.file.filename,
      album: albumId,
    });
    // console.log(newSong.title, newSong.album);
    const savedSong = await newSong.save();
    console.log('Song uploaded', savedSong);

    await Album.findByIdAndUpdate(albumId, { $push: { songs: savedSong._id } });

    // await deleteSongsWithoutAlbumId();
    // await Album.deleteMany({});
    // await Song.deleteMany({});

    res.status(201).json(savedSong);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload song' });
  }
}

export async function getAllSongs(req, res) {
  try {
    const songs = await Song.find();
    res.json(songs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch songs' });
  }
}

export async function getSongsForAlbum(req, res) {
  try {
    const { albumId } = req.params;

    if (!albumId) {
      return res.status(400).json({ error: 'Album ID is missing' });
    }

    const songs = await Song.find({ album: albumId });

    res.json(songs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch song for the album' });
  }
}
