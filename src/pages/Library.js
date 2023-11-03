import React from 'react';

// Components
import TopNav from '../components/TopNav';

function Library({ username }) {
  return (
    <div className="py-3">
      <TopNav />
      <div className="flex flex-col mt-7 px-6 ">
        <h1 className="font-bold text-main-mint text-xl">Library</h1>
        {username && (
          <h2 className="font-bold text-main-mint text-lg">{username}</h2>
        )}
      </div>
    </div>
  );
}

export default Library;
