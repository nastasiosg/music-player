import React, { lazy } from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import './App.css';

//Layout
import SideNav from './layouts/SideNav';

// Pages
// import Homepage from './pages/Homepage.js';
const Explore = lazy(() => import('./pages/Explore.js'));
const Library = lazy(() => import('./pages/Library.js'));
const Login = lazy(() => import('./pages/Login.js'));
const SignUp = lazy(() => import('./pages/Sign-Up.js'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SideNav />}>
      <Route index element={<Explore />} />
      <Route path="library" element={<Library />} />
      <Route path="login" element={<Login />} />
      <Route path="sign-up" element={<SignUp />} />
    </Route>
  )
);

function App() {
  return (
    <div className="App overflow-hidden">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
