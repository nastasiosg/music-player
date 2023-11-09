import Song from '../models/Song.js';

// Diese Funktion sucht nach Songs ohne albumId und löscht sie
export async function deleteSongsWithoutAlbumId() {
  try {
    // Finden Sie Songs ohne albumId
    const songsWithoutAlbumId = await Song.find({ album: { $exists: false } });

    // Löschen Sie die gefundenen Songs
    const deleteResult = await Song.deleteMany({ album: { $exists: false } });

    console.log(`${deleteResult.deletedCount} Songs ohne albumId gelöscht`);
  } catch (error) {
    console.error('Fehler beim Löschen der Songs ohne albumId', error);
  }
}
