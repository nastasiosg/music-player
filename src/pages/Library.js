import React from 'react';

// Components
import TopNav from '../components/TopNav';

function Library() {
  return (
    <div className="py-3">
      <TopNav />
      <div className="flex flex-col mt-7 px-6 ">
        <h1 className="font-bold text-main-mint text-xl">Library</h1>
      </div>
    </div>
  );
}

export default Library;
