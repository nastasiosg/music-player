import React, { useRef } from 'react';

// Components
import TopNav from '../components/TopNav';

function SignUp() {
  const username = useRef(null);
  const password = useRef(null);
  // TODO error msgs for registration
  const SignUpButton = async () => {
    const userData = {
      username: username.current.value,
      password: password.current.value,
    };

    try {
      const response = await fetch('http://localhost:8080/auth/signup', {
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
        console.log('sign-up erfolgreich', data);
        // TO DO navigate user to another page
      } else {
        const errorData = await response.json();
        console.error('Fehler bei der sign-up', errorData);
      }
    } catch (error) {
      console.error('fehler bei der sign-up', error);
    }
  }

  return (
    <div className="pt-3 h-full">
      <TopNav />
      <div className="flex flex-col mt-10 mx-auto items-center justify-center py-7 border-2 border-main-mint rounded-md w-[400px] h-[250px]">
        <h1 className="font-bold text-main-mint text-xl">Sign-Up</h1>
        <p className="mb-4 mt-2 text-sm text-main-mint">
          Register with your username and password
        </p>
        <div className="">
          <label className="flex flex-col gap-1">
            <input
              ref={username}
              type="username"
              name="username"
              placeholder="Username"
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
              onClick={SignUpButton}
              className="bg-main-mint rounded-md text-main-black font-bold"
            >
              Sign-Up
            </button>
          </label>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
