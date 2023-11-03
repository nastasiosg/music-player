import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Components
import TopNav from '../components/TopNav';

function AddMusic({ username }) {
  const navigate = useNavigate();
  const [required, setRequired] = useState('');
  const [albumData, setAlbumData] = useState({
    title: '',
    artist: '',
    coverImage: null,
    genre: '',
  });
  const options = [
    { label: 'Hip-Hop', value: 'Hip-Hop' },
    { label: 'Techno', value: 'Techno' },
    { label: 'R&B', value: 'R&B' },
    { label: 'Country', value: 'Country' },
    { label: 'Jazz', value: 'Jazz' },
    { label: 'Individual', value: 'Individual' },
  ];

  const handleAddAlbum = async (e) => {
    e.preventDefault();

    if (
      !albumData.title ||
      !albumData.artist ||
      !albumData.coverImage ||
      !albumData.genre
    ) {
      return setRequired('Please fill all the fields.');
    }

    const formData = new FormData();
    formData.append('title', albumData.title);
    formData.append('artist', albumData.artist);
    formData.append('coverImage', albumData.coverImage);
    formData.append('genre', albumData.genre);

    try {
      const response = await fetch('http://localhost:8080/api/albums', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // console.log(formData);
        // Reset form
        setAlbumData({
          title: '',
          artist: '',
          coverImage: null,
          genre: '',
        });
        const albumName = albumData.title.replace(/\s+/g, '-').toLowerCase();
        navigate(`/albums/${albumName}`);
      } else {
        console.error('Failed to add album');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="py-3">
      <TopNav />
      <div className="flex flex-col mt-7 px-6">
        {!username && (
          <>
            <h1 className="font-bold text-main-mint text-xl">
              Please login or register first.
            </h1>
          </>
        )}
        {username && (
          <>
            <div className="flex flex-col mt-10 mx-auto items-center justify-center py-7 border-2 border-main-mint rounded-md w-[400px] h-[250px]">
              <h1 className="font-bold text-main-mint text-xl mb-4">
                Add Music
              </h1>
              <div className="w-3/4 m-auto">
                <form
                  className="flex flex-col gap-1"
                  encType="multipart/form-data"
                  onSubmit={handleAddAlbum}
                >
                  <input
                    type="text"
                    placeholder="Album Title"
                    value={albumData.title}
                    onChange={(e) =>
                      setAlbumData({ ...albumData, title: e.target.value })
                    }
                    className="rounded-md pl-2 py-1 bg-main-beige border text-sm text-main-black"
                  />
                  <input
                    type="text"
                    placeholder="Artist"
                    value={albumData.artist}
                    onChange={(e) =>
                      setAlbumData({ ...albumData, artist: e.target.value })
                    }
                    className="rounded-md pl-2 py-1 bg-main-beige border text-sm text-main-black"
                  />
                  <select
                    name="genre"
                    className="rounded-md pl-2 py-1 bg-main-beige border text-sm text-main-black"
                    onChange={(e) =>
                      setAlbumData({ ...albumData, genre: e.target.value })
                    }
                  >
                    {options.map((option, index) => (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <input
                    type="file"
                    accept="image/*"
                    name="coverImage"
                    className="rounded-md bg-main-beige text-sm border text-main-black"
                    onChange={(e) =>
                      setAlbumData({
                        ...albumData,
                        coverImage: e.target.files[0],
                      })
                    }
                  />
                  <button
                    className="bg-main-mint rounded-md text-main-black font-bold"
                    type="submit"
                  >
                    Add Album
                  </button>
                  <p className="text-sm text-main-blue font-bold text-center">{required}</p>
                </form>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AddMusic;
