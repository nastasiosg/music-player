import React from 'react';
// Icons
import searchIconGrey from '../assets/icons/search-grey.svg';
import notificationIcon from '../assets/icons/notification.svg';
import profileIcon from '../assets/icons/profile.png';
// Img
import birdsCover from '../assets/img/birds.jpeg';
import sorry4 from '../assets/img/sorry4.webp';
import mOm from '../assets/img/Kid-Cudi-3.webp';
import damn from '../assets/img/damn.jpeg';
// Components
import DarkModeButton from './DarkModeButton';
import DailyMixItems from './DailyMixItems';
import FeaturedItems from './FeaturedItems';

function Maincontent() {
  return (
    <div className="py-3 text-main-beige overflow-x-auto h-main-height scrollbar-hide">
      <div className="flex px-6 w-full py-1 justify-between mb-7">
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
              className=" rounded-md pl-6 py-1 w-64 bg-main-beige border text-sm text-main-black"
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
              <img src={profileIcon} alt="Profile Icon" className="w-5" />
            </li>
          </ul>
        </div>
      </div>
      <div className="pl-6 mb-2">
        <h1 className="font-bold text-main-mint text-lg tracking-wide">
          Featured Albums
        </h1>
        <div className="flex py-2 gap-x-3 w-full overflow-x-scroll scrollbar-hide whitespace-nowrap">
          <FeaturedItems
            imgSrc={birdsCover}
            imgAlt={'Birds in the Trap Cover'}
            album={'Birds in the trap'}
            artist={'Travis Scott'}
          />
          <FeaturedItems
            imgSrc={sorry4}
            imgAlt={'Sorry 4 What'}
            album={'Sorry 4 What'}
            artist={'Tory Lanez'}
          />
          <FeaturedItems
            imgSrc={mOm}
            imgAlt={'Man on the moon 3'}
            album={'Man On the Moon 3'}
            artist={'Kid Cudi'}
          />
          <FeaturedItems
            imgSrc={damn}
            imgAlt={'DAMN.'}
            album={'DAMN.'}
            artist={'Kendrick Lamar'}
          />
        </div>
      </div>
      <div className="pl-6 sm:pr-6 flex justify-between flex-wrap gap-x-2 mb-2">
        <div className="flex flex-col md:w-auto sm:w-full mb-2">
          <h1 className="font-bold text-lg text-main-mint tracking-wide mb-2">
            Daily Mix
          </h1>
          <ul className="flex justify-between items-center gap-x-6 bg-main-beige text-main-black px-3 py-1 mb-2 rounded">
            <DailyMixItems
              imgSrc={birdsCover}
              imgAlt="Birds in the trap"
              title="Goosebumps"
              artist="Travis Scott ft. Kendrick Lamar"
              album="Birds In The Trap"
              length="04:10"
            />
          </ul>
          <ul className="flex justify-between items-center gap-x-6 bg-main-beige text-main-black px-3 py-1 mb-2 rounded">
            <DailyMixItems
              imgSrc={sorry4}
              imgAlt="Sorry 4 What"
              title="Sorry 4 What? // LV Belt"
              artist="Tory Lanez"
              album="Sorry 4 What"
              length="02:34"
            />
          </ul>
          <ul className="flex justify-between items-center gap-x-6 bg-main-beige text-main-black px-3 py-1 mb-2 rounded">
            <DailyMixItems
              imgSrc={mOm}
              imgAlt="Main on the moon 3"
              title="The Void"
              artist="Kid Cudi"
              album="Man on the moon III"
              length="05:25"
            />
          </ul>
          <ul className="flex justify-between items-center gap-x-6 bg-main-beige text-main-black px-3 py-1 mb-2 rounded">
            <DailyMixItems
              imgSrc={damn}
              imgAlt="Damn"
              title="FEEL."
              artist="Kendrick Lamar"
              album="DAMN."
              length="03:34"
            />
          </ul>
        </div>
        <div className="flex flex-col overflow-auto scrollbar-hide">
          <h1 className="font-bold text-lg text-main-mint mb-2 tracking-wide">
            Playlists
          </h1>
          <div className="flex md:flex-col gap-2">
            <div className="flex gap-2 sm:flex-wrap">
              <section className="w-40 p-3 flex flex-col rounded bg-main-beige text-main-black">
                <div className="mb-4">
                  <p className="font-bold">0</p>
                </div>
                <div className="">
                  <ul className="flex justify-between">
                    <li className="font-bold">Hip-Hop</li>
                    <li className="font-bold">-></li>
                  </ul>
                </div>
              </section>
              <section className="w-40 p-3 flex flex-col rounded bg-main-beige text-main-black">
                <div className="mb-4">
                  <p className="font-bold">0</p>
                </div>
                <div className="">
                  <ul className="flex justify-between">
                    <li className="font-bold">House</li>
                    <li className="font-bold">-></li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="flex gap-2 sm:flex-wrap">
              <section className="w-40 p-3 flex flex-col rounded bg-main-beige text-main-black">
                <div className="mb-4">
                  <p className="font-bold">0</p>
                </div>
                <div className="">
                  <ul className="flex justify-between">
                    <li className="font-bold">R&B</li>
                    <li className="font-bold">-></li>
                  </ul>
                </div>
              </section>
              <section className="w-40 p-3 flex flex-col rounded bg-main-beige text-main-black">
                <div className="mb-4">
                  <p className="font-bold">0</p>
                </div>
                <div className="">
                  <ul className="flex justify-between">
                    <li className="font-bold">Classic</li>
                    <li className="font-bold">-></li>
                  </ul>
                </div>
              </section>
            </div>
            <div className="flex gap-2 sm:flex-wrap">
              <section className="w-40 p-3 flex flex-col rounded bg-main-beige text-main-black">
                <div className="mb-4">
                  <p className="font-bold">0</p>
                </div>
                <div className="">
                  <ul className="flex justify-between">
                    <li className="font-bold">Individual</li>
                    <li className="font-bold">-></li>
                  </ul>
                </div>
              </section>
              <section className="w-40 p-3 flex flex-col rounded bg-main-beige text-main-black">
                <div className="mb-4">
                  <p className="font-bold">0</p>
                </div>
                <div className="">
                  <ul className="flex justify-between">
                    <li className="font-bold">Classic</li>
                    <li className="font-bold">-></li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Maincontent;
