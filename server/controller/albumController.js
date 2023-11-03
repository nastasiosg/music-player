import Album from '../models/Album.js';

export async function createAlbum(req, res) {
  try {
    const { title, artist, genre } = req.body;

    const newAlbum = new Album({
      title,
      artist,
      genre,
      coverImage: req.file.filename,
    });

    const savedAlbum = await newAlbum.save();
    console.log('Album created:', savedAlbum);

    res.status(201).json(savedAlbum);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create Album' });
  }
}

export async function getAllAlbums(req, res) {
  try {
    const albums = await Album.find();
    console.log('All Albums:', albums);
    res.json(albums);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to get albums' });
  }
}

export async function getAlbumByName(req, res) {
  const albumName = req.params.albumName;

  try {
    const album = await Album.findOne({ title: albumName });

    if (!album) {
      return res.status(404).json({ error: 'Album not found' });
    }

    return res.json(album);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to get album by name' });
  }
}
