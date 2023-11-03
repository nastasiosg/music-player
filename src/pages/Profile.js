import React from 'react';

// Components
import TopNav from '../components/TopNav';

function Profile({ username }) {
  const photoName = username.charAt(0);
  return (
    <div className="py-3">
      <TopNav />
      <div className="flex flex-col mt-7 px-6 ">
        {!username && (
          <>
            <h1 className="font-bold text-main-mint text-xl">
              Please login or register first.
            </h1>
          </>
        )}
        {username && (
          <>
            <h1 className="font-bold text-main-mint text-xl">Profile</h1>
            <div className="mt-3 flex gap-2 items-center">
              <div className="flex justify-center items-center h-12 w-12 rounded-full border border-main-mint bg-opacity-20 bg-main-beige text-main-mint font-bold uppercase ">
                {photoName}
              </div>
              <h2 className="text-main-mint">{username}</h2>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Profile;
