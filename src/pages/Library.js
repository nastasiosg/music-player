import React, { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';

// Components
import TopNav from '../components/TopNav';

function Library() {
  const [username, setUsername] = useState('');
  const token = localStorage.getItem('token');
  // Decode JWT-Token
  const decodeToken = (token) => {
    try {
      const decodeToken = jwt_decode(token);
      if (decodeToken) {
        setUsername(decodeToken.username);
      }
    } catch (error) {
      console.error("Error while encoding token", error);
    }
  }

  useEffect(() => {
    if (token) {
      decodeToken(token);
    }
  }, [token]);

  return (
    <div className="py-3">
      <TopNav />
      <div className="flex flex-col mt-7 px-6 ">
        <h1 className="font-bold text-main-mint text-xl">Library</h1>
        <h2 className="font-bold text-main-mint text-lg">{username}</h2>
      </div>
    </div>
  );
}

export default Library;
