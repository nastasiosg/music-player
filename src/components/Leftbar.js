import React from 'react';
import searchIcon from '../assets/icons/search.svg';
import loginIcon from '../assets/icons/login.png';
import signInIcon from '../assets/icons/signin.png';
import libraryIcon from '../assets/icons/library.png';

function Leftbar() {
  return (
    <div className="p-2 h-full">
      <div className="flex flex-col justify-center w-full items-center text-main-mint">
        <ul className="p-2 mb-7">
          <li className="font-bold font-mono text-main-mint text-center">
            Outer Music
          </li>
        </ul>
        <ul className="mb-7 pb-2 w-full flex flex-col items-center">
          <ul className="mb-1 w-full flex justify-around items-center">
            <li className="uppercase text-xs tracking-wide font-bold text-main-beige">
              Menu
            </li>
            <li className="cursor-pointer font-bold text-main-beige">-</li>
          </ul>
          <ul className="mb-1 flex gap-2 items-center justify-center w-full">
            <li className="">
              <img src={loginIcon} alt="Login Icon" className="w-4" />
            </li>
            <li className="">Login</li>
          </ul>
          <ul className="mb-1 flex gap-2 items-center justify-center w-full">
            <li className="">
              <img src={signInIcon} alt="Sign-Up Icon" className="w-4" />
            </li>
            <li className="">Sign-Up</li>
          </ul>
          <ul className="mb-1 flex gap-2 items-center justify-center w-full">
            <li>
              <img src={searchIcon} alt="Seach Icon" className="w-4" />
            </li>
            <li className="font-bold">Explore</li>
          </ul>
          {/* <li className="mb-1">Search</li> */}
          <ul className="mb-1 flex gap-2 items-center justify-center w-full">
            <img src={libraryIcon} alt="Sign-Up Icon" className="w-4" />
            <li className="">Library</li>
          </ul>
        </ul>
        <ul className="mb-1 w-full flex justify-evenly items-center">
          <li className="uppercase text-xs tracking-wide font-bold text-main-beige">
            Playlists
          </li>
          <li className="cursor-pointer font-bold text-main-beige">+</li>
        </ul>
        <ul className="w-full flex flex-col justify-center items-center">
          <li className="mb-1">Playlist 1</li>
          <li className="mb-1">Playlist abc</li>
        </ul>
      </div>
    </div>
  );
}

export default Leftbar;
