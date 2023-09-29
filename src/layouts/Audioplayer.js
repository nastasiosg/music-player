import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from '../assets/mp3/travisch.mp3';
// img
import birds from '../assets/img/birds.jpeg';
function Audioplayer() {
  return (
    <div className="">
      <div className="flex w-full text-main-mint">
        <div className="w-full ">
          <ul className="w-full h-[87px] flex items-center">
            <li className="w-2/3 z-10">
              <AudioPlayer
                autoPlay={false}
                src={song}
                onPlay={(e) => console.log('Play Clicked')}
              />
            </li>
            <li className="flex justify-end items-center w-1/3 h-full">
              <div className="overflow-visible relative whitespace-nowrap w-1/2 px-2 text-center">
                <div className="">
                  <p className="text-xs inline-block left-to-right">
                    Travis Scott ft. Kendrick Lamar
                  </p>
                </div>
                <div className="">
                  <p className="text-xs inline-block">Goosebumps</p>
                </div>
              </div>
              <div className="z-50 h-full">
                <img src={birds} alt="Birds in the trap" className="h-full" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Audioplayer;
