import React from 'react';

// Components
import Leftbar from '../components/Leftbar';
import Audioplayer from '../layouts/Audioplayer';
import Maincontent from '../components/Maincontent';

function Homepage() {
  return (
    <div className="grid grid-rows-6 grid-cols-5 h-screen overflow-hidden">
      <div className="col-start-1 col-span-1 h-screen bg-main-black">
        <Leftbar />
      </div>
      <div className="h-main-height col-start-2 col-span-4">
        <Maincontent />
      </div>
      <div className="absolute bottom-0 right-0 h-audioplayer-height col-start-1 col-span-4 grid bg-main-black self-end w-4/5">
        <Audioplayer />
      </div>
    </div>
  );
}

export default Homepage;
