import React, { Suspense, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// Icons
import searchIcon from '../assets/icons/search.svg';
import loginIcon from '../assets/icons/login.png';
import signInIcon from '../assets/icons/signin.png';
import libraryIcon from '../assets/icons/library.png';
import Audioplayer from './Audioplayer';

function SideNav() {
  const [playlists, setPlaylists] = useState(['Playlist 1', 'Playlist abc']);
  const [newPlaylist, setNewPlaylist] = useState('');
  const [showPlaylistInput, setShowPlaylistInput] = useState(false);

  function handleAddPlaylist() {
    if (newPlaylist.trim() !== '') {
      setPlaylists([...playlists, newPlaylist]);
      setNewPlaylist('');
      setShowPlaylistInput(false);
    }
  }

  return (
    <>
      <div className="grid grid-rows-6 grid-cols-5 h-screen overflow-hidden">
        <div className="col-start-1 col-span-1 h-screen bg-main-black">
          <div className="p-2 h-full">
            <div className="flex flex-col justify-center w-full items-center text-main-mint">
              <ul className="flex gap-[4px] p-2 mb-7 custom-animate-bounce animation-temporary">
                <li className="font-bold font-mono text-main-mint text-center">
                  Outer
                </li>
                <li className="font-bold font-mono text-main-mint text-center">
                  Music
                </li>
              </ul>
              <ul className="mb-7 pb-2 w-full flex flex-col items-center">
                <ul className="mb-1 w-full flex justify-around items-center">
                  <li className="uppercase text-xs tracking-wide font-bold text-main-beige">
                    Menu
                  </li>
                  <li className="cursor-pointer font-bold text-main-beige">
                    -
                  </li>
                </ul>
                <ul className="mb-1 flex gap-2 items-center justify-center w-full">
                  <li className="">
                    <img src={loginIcon} alt="Login Icon" className="w-4" />
                  </li>
                  <li className="">
                    <NavLink className="" to="login">
                      Login
                    </NavLink>
                  </li>
                </ul>
                <ul className="mb-1 flex gap-2 items-center justify-center w-full">
                  <li className="">
                    <img src={signInIcon} alt="Sign-Up Icon" className="w-4" />
                  </li>
                  <li className="">
                    <NavLink className="" to="sign-up">
                      Sign-Up
                    </NavLink>
                  </li>
                </ul>
                <ul className="mb-1 flex gap-2 items-center justify-center w-full">
                  <li>
                    <img src={searchIcon} alt="Seach Icon" className="w-4" />
                  </li>
                  <li className="font-bold">
                    <NavLink className="" to="/">
                      Explore
                    </NavLink>
                  </li>
                </ul>
                {/* <li className="mb-1">Search</li> */}
                <ul className="mb-1 flex gap-2 items-center justify-center w-full">
                  <img src={libraryIcon} alt="Sign-Up Icon" className="w-4" />
                  <li className="">
                    <NavLink className="" to="library">
                      Library
                    </NavLink>
                  </li>
                </ul>
              </ul>
              <ul className="mb-1 w-full flex justify-evenly items-center">
                <li className="uppercase text-xs tracking-wide font-bold text-main-beige">
                  Playlists
                </li>
                <li className="cursor-pointer font-bold text-main-beige">
                  <button
                    className="text-main-beige"
                    onClick={() => setShowPlaylistInput(true)}
                  >
                    +
                  </button>
                </li>
              </ul>
              <ul className="w-full flex flex-col justify-center items-center">
                {playlists.map((playlist) => (
                  <li key={playlist}>{playlist}</li>
                ))}
                {showPlaylistInput ? (
                  <li className="flex w-3/4 gap-1 items-center justify-center">
                    <input
                      type="text"
                      value={newPlaylist}
                      onChange={(e) => setNewPlaylist(e.target.value)}
                      className="text-main-black w-3/4 h-5 rounded-md pl-1 bg-main-beige focus"
                    />
                    <button onClick={handleAddPlaylist} className="text-sm">
                      Add
                    </button>
                  </li>
                ) : (
                  ''
                )}
              </ul>
            </div>
          </div>
        </div>
        <div className="h-main-height col-start-2 col-span-4">
          {/* display the router from RouterProvider */}
          <Suspense fallback={<p>Loading..</p>}>
            <Outlet />
          </Suspense>
        </div>
        <div className="absolute bottom-0 right-0 h-audioplayer-height col-start-1 col-span-4 grid bg-main-black self-end w-4/5">
          <Audioplayer />
        </div>
      </div>
    </>
  );
}

export default SideNav;
