import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import TopNav from '../components/TopNav';
import AddSong from '../components/Album/AddSong';
import AlbumSongs from '../components/Album/AlbumSongs';

const cudi = '/uploads/1699275586954-70328888.webp';

function AlbumDetails() {
  const [album, setAlbum] = useState({});
  const { albumName } = useParams();
  const albumImg = `/uploads/${album.coverImage}`;
  const [isFormVisible, setIsFormVisible] = useState(false);

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

  const handleCloseButton = (e) => {
    e.preventDefault();
    setIsFormVisible(false);
  }

  return (
    <div className="py-3">
      <TopNav />
      <div className="flex flex-col mt-7 px-6">
        <img src={cudi} alt={album.title} className="rounded-md w-20" />
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
          <div className="border rounded-md p-2 w-80 flex flex-col">
            <button
              onClick={handleCloseButton}
              className="self-start text-xs text-red-500 font-bold cursor-pointer"
              type="submit"
            >
              x
            </button>
            <AddSong />
          </div>
        )}
        <AlbumSongs />
      </div>
    </div>
  );
}

export default AlbumDetails;
