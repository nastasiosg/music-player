import React from "react";

function LogoutButton({ onLogout }) {
  const handleLogout = () => {

    onLogout();
  };

  return (
    <button onClick={handleLogout} className="text-red-500 hover:text-red-600">
      Logout
    </button>
  )
}

export default LogoutButton;