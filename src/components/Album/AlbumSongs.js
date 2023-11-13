import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AlbumSongs() {
  const [songs, setSongs] = useState([]);
  const { albumName } = useParams();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const responseAlbumId = await fetch(
          `http://localhost:8080/api//albums/${albumName}`
        );
        if (!responseAlbumId.ok) {
          console.errer('Album not found');
          return;
        }

        const dataAlbumId = await responseAlbumId.json();
        const albumId = dataAlbumId._id;

        const responseSongs = await fetch(
          `http://localhost:8080/api/songs/for-album/${albumId}`
        );

        if (responseSongs.ok) {
          const songData = await responseSongs.json();
          setSongs(songData);
        } else {
          console.error('Failed to fetch songs');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchSongs();
  }, [albumName]);
  
  return (
    <div className="mt-3">
      <ul>
        {songs.map((song, index) => (
          <li key={song._id} className="text-main-mint text-sm">
            {index + 1}. {song.title} – {song.length} 
            <audio controls>
              <source src={`/uploads/songs/${song.songFile}`} type="audio/mp3" />
              Your browser doesn't support the audio element.
            </audio>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlbumSongs;
