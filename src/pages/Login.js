import React, { useRef } from 'react';

// Components
import TopNav from '../components/TopNav';

function Login() {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  // TODO error messages for wrong pw etc.
  const loginHandler = async () => {
    const userData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        localStorage.setItem('token', token);
        console.log('login erfolgreich', data);
        // Reload site to update user information
        window.location.reload();
        // TO DO navigate user to another page
      } else {
        const errorData = await response.json();
        console.error('Fehler beim login', errorData);
      }
    } catch (error) {
      console.error('fehler beim login', error);
    }
  };

  return (
    <div className="pt-3 h-full">
      <TopNav />
      <div className="flex flex-col mt-10 mx-auto items-center justify-center py-7 border-2 border-main-mint rounded-md w-[400px] h-[250px]">
        <h1 className="font-bold text-main-mint text-xl">Login</h1>
        <p className="mb-4 mt-2 text-sm text-main-mint">
          Log in with your username and password
        </p>
        <div className="">
          <label className="flex flex-col gap-1">
            <input
              ref={usernameRef}
              type="text"
              name="username"
              placeholder="Username"
              className="rounded-md pl-2 py-1 w-64 bg-main-beige border text-sm text-main-black"
            ></input>
            <input
              ref={passwordRef}
              type="password"
              name="password"
              placeholder="Password"
              className="rounded-md pl-2 py-1 w-64 bg-main-beige border text-sm text-main-black"
            ></input>
            <button
              onClick={loginHandler}
              className="bg-main-mint rounded-md text-main-black font-bold"
            >
              Login
            </button>
          </label>
        </div>
      </div>
    </div>
  );
}

export default Login;
