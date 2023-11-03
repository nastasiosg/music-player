import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useNavigate } from 'react-router-dom';
// Components
import LogoutButton from './LogoutButton';
// Icons
import profileIcon from '../../assets/icons/profile.png';
// ReactModal config
ReactModal.setAppElement('#root');

function ProfileIcon() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    closeModal();
    navigate('/login');
  };

  return (
    <div>
      <ul>
        <li className="cursor-pointer" onClick={openModal}>
          <img src={profileIcon} alt="Profile Icon" className="w-5" />
        </li>
      </ul>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Popup Modal"
        className="absolute text-center top-12 right-6 w-36 opacity-100 bg-main-beige rounded-lg shadow-lg p-4 flex flex-col justify-center"
        overlayClassName="fixed inset-0"
      >
        <ul className="text-sm leading-8 mx-auto text-main-black">
          <li className="cursor-pointer">
            <a href="/profile">Profile</a>
          </li>
          <li className="cursor-pointer">
            <a href="/add-music">Add Music</a>
          </li>
          <li className="cursor-pointer">
            <LogoutButton onLogout={handleLogout} />
          </li>
        </ul>
      </ReactModal>
    </div>
  );
}

export default ProfileIcon;
