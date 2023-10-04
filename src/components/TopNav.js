import React from 'react';
// Components
import ProfileIcon from './TopNav/ProfileIcon';
// Icons
import searchIconGrey from '../assets/icons/search-grey.svg';
import notificationIcon from '../assets/icons/notification.svg';
// import profileIcon from '../assets/icons/profile.png';
// Components
import DarkModeButton from './DarkModeButton';
function TopNav() {
  return (
    <div className="flex px-6 w-full py-1 justify-between">
      <div className="">
        {/* Icon on click Open input */}
        <label htmlFor="site-search" className="relative">
          <img
            src={searchIconGrey}
            alt="Search Icon"
            className="w-4 absolute mt-[7px] ml-1"
          />
          <input
            type="search"
            placeholder="What do you want to listen to?"
            className="rounded-md pl-6 py-1 w-64 bg-main-beige border text-sm text-main-black"
          ></input>
        </label>
      </div>
      <div className="">
        <ul className="flex gap-4 items-center">
          <DarkModeButton />
          <li className="cursor-pointer">
            <img
              src={notificationIcon}
              alt="Notification Icon"
              className="w-5"
            />
          </li>
          <li className="cursor-pointer">
            <ProfileIcon />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopNav;
