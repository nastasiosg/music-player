import React, { lazy, useState, useEffect } from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import './App.css';

//Layout
import SideNav from './layouts/SideNav';

// Pages
const Explore = lazy(() => import('./pages/Explore.js'));
const Library = lazy(() => import('./pages/Library.js'));
const Login = lazy(() => import('./pages/Login.js'));
const SignUp = lazy(() => import('./pages/Sign-Up.js'));
const Profile = lazy(() => import('./pages/Profile.js'));
const AddMusic = lazy(() => import('./pages/AddMusic'));
const AlbumDetails = lazy(() => import('./pages/AlbumDetails'));

function App() {
  const [username, setUsername] = useState('');
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const authenticateUser = async (token) => {
      try {
        if (token) {
          const decodedToken = jwt_decode(token);
          if (decodedToken) {
            const fetchedUsername = await decodedToken.username;
            setUsername(fetchedUsername);
          }
        }
      } catch (error) {
        console.error('Error while encoding token', error);
      } finally {
        setAuthLoading(false);
      }
    };

    authenticateUser(token);
  }, []);

  if (authLoading) {
    return <div>Loading...</div>;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<SideNav />}>
        <Route index element={<Explore username={username} />} />
        <Route path="library" element={<Library username={username} />} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="profile" element={<Profile username={username} />} />
        <Route path="add-music" element={<AddMusic username={username} />} />
        <Route path="/albums/:albumName" element={<AlbumDetails />} />
      </Route>
    )
  );

  return (
    <div className="App overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
