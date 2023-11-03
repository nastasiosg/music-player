import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import TopNav from '../components/TopNav';

function AlbumDetails() {
  const [album, setAlbum] = useState({});
  const { albumName } = useParams();
  const albumImg = `/uploads/${album.coverImage}`;
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [songData, setSongData] = useState({
    title: '',
    length: '',
    songFile: null,
  });

  useEffect(() => {
    const fetchAlbumData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/albums/${albumName}`
        );
        if (response.ok) {
          const albumData = await response.json();
          // console.log(albumData)
          setAlbum(albumData);
        } else {
          console.error('Failed to fetch album data');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbumData();
  }, [albumName]);

  const handlePlusButton = (e) => {
    e.preventDefault();
    setIsFormVisible(true);
  };

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
      }
    } catch (error) {
      console.error(error);
    }

    setIsFormVisible(false);
  };

  return (
    <div className="py-3">
      <TopNav />
      <div className="flex flex-col mt-7 px-6">
        <img src={albumImg} alt={album.title} className="rounded-md w-20" />
        <h1 className="text-lg font-bold text-main-mint">{album.title}</h1>
        <div className="flex items-center gap-1 text-xs text-main-mint">
          <p className="">{album.artist}</p>
          <p>–</p>
          <p className="">{album.genre}</p>
          <p>–</p>
          <button
            onClick={handlePlusButton}
            className="text-base font-bold cursor-pointer"
            type="submit"
          >
            +
          </button>
        </div>
        {isFormVisible && (
          <div className="my-2 flex flex-col w-64 items-start gap-1">
            <form encType="multipart/form-data">
              <input
                type="text"
                placeholder="Song Title"
                className="rounded-md pl-2 py-1 bg-main-beige border text-sm text-main-black"
                value={songData.title}
                onChange={(e) =>
                  setSongData({ ...songData, title: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="length (mm:ss)"
                className="rounded-md pl-2 py-1 bg-main-beige border text-sm text-main-black"
                value={songData.length}
                onChange={(e) =>
                  setSongData({ ...songData, length: e.target.value })
                }
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
        )}
      </div>
    </div>
  );
}

export default AlbumDetails;
