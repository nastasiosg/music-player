import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function AddSong() {
  const { albumName } = useParams();
  const [albumId, setAlbumId] = useState(null);
  const [songData, setSongData] = useState({
    title: '',
    length: '',
    songFile: null,
  });

  useEffect(() => {
    async function fetchAlbumId() {
      try {
        const response = await fetch(
          `http://localhost:8080/api/albums/${albumName}`
        );
        if (response.ok) {
          const data = await response.json();
          setAlbumId(data._id);
          console.log(data._id);
        } else {
          console.error('Album not found');
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchAlbumId();
  }, [albumName]);

  const handleUploadSong = async (e) => {
    e.preventDefault();

    // Length format mm:ss
    const validLengthFormat = /^\d{2}:\d{2}$/;
    if (!validLengthFormat.test(songData.length)) {
      console.log('Ungültiges Längenformat');
      return;
    }

    if (
      !songData.title ||
      !songData.length ||
      !songData.songFile ||
      !validLengthFormat
    ) {
      return console.log('Please fill all the fields.');
    }

    const songFormData = new FormData();
    songFormData.append('title', songData.title);
    songFormData.append('length', songData.length);
    songFormData.append('songFile', songData.songFile);
    songFormData.append('albumId', albumId);

    try {
      const response = await fetch('http://localhost:8080/api/songs', {
        method: 'POST',
        body: songFormData,
      });

      if (response.ok) {
        setSongData({
          title: '',
          length: '',
          songFile: null,
        });
        console.log(songFormData);
        console.log(songData);
      } else {
        console.error('Failed to upload song');
        console.log(songFormData);
        console.log(songData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="my-2 flex flex-col w-64 items-start">
      <form encType="multipart/form-data" className="flex  flex-col gap-1">
        <input
          type="text"
          placeholder="Song Title"
          className="rounded-md pl-2 py-1 bg-main-beige border text-sm text-main-black"
          value={songData.title}
          onChange={(e) => setSongData({ ...songData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="length (mm:ss)"
          className="rounded-md pl-2 py-1 bg-main-beige border text-sm text-main-black"
          value={songData.length}
          onChange={(e) => setSongData({ ...songData, length: e.target.value })}
        />
        <input
          type="file"
          name="songFile"
          accept="audio/*"
          className="rounded-md bg-main-beige text-sm border text-main-black"
          onChange={(e) =>
            setSongData({
              ...songData,
              songFile: e.target.files[0],
            })
          }
        />
        <button
          onClick={handleUploadSong}
          className="bg-main-mint rounded-md text-main-black font-bold px-2"
        >
          Upload Song
        </button>
      </form>
    </div>
  );
}

export default AddSong;
