import React, { useRef } from 'react';
import TopNav from '../components/TopNav';

// Components

function Login() {
  const email = useRef(null);
  const password = useRef(null);
  const LoginButton = () => {
    // TO DO
    console.log(email.current.value + ' ' + password.current.value);
  };

  return (
    <div className="pt-3 h-full">
      <TopNav />
      <div className="flex flex-col mt-10 mx-auto items-center justify-center py-7 border-2 border-main-mint rounded-md w-[400px] h-[250px]">
        <h1 className="font-bold text-main-mint text-xl">Login</h1>
        <p className="mb-4 mt-2 text-sm text-main-mint">
          Log in with your email address and password
        </p>
        <div className="">
          <label className="flex flex-col gap-1">
            <input
              ref={email}
              type="email"
              name="email"
              placeholder="Email"
              className="rounded-md pl-2 py-1 w-64 bg-main-beige border text-sm text-main-black"
            ></input>
            <input
              ref={password}
              type="password"
              name="password"
              placeholder="Password"
              className="rounded-md pl-2 py-1 w-64 bg-main-beige border text-sm text-main-black"
            ></input>
            <button
              onClick={LoginButton}
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
