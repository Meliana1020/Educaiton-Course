import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../Elements/Button/Index";

const CompNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedIn = JSON.parse(localStorage.getItem('currentUser')) !== null;

  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <div className="Navigation w-full bg-white border-b border-[#3a3541]/10 flex justify-between items-center">
      <Logo navigate={navigate} />
      {!isAuthPage && (isLoggedIn ? <UserNav /> : <GuestNav navigate={navigate} />)}
    </div>
  );
};

const Logo = ({navigate}) => {
  const handleLogoClick = () =>{
    navigate("/");
  };

  return (
    <div className="px-10 py-4 flex items-center cursor-pointer"
    onClick={handleLogoClick}>
      <img src="/logo.png" alt="Logo" />
    </div>
  );
};

const UserNav = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleAvatarClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    window.location.reload();
  };

  return (
    <div className="relative flex items-center justify-end flex-1 mr-10">
      <a href="#" className="text-gray-500 hover:text-gray-900 text-sm md:text-base md:block mr-4">
        Kategori
      </a>
      <div className="relative">
        <img
          src="/avatar.png"
          alt="Profile"
          className="w-10 h-10 rounded md:block mr-4 cursor-pointer"
          onClick={handleAvatarClick}
        />
        <div
          id="dropdown"
          className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 ${
            showDropdown ? 'block' : 'hidden'
          }`}
        >
          <a href="/profil" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Profil
          </a>
          <a href="/admin" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
            Admin
          </a>
          <button
            onClick={handleLogout}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

const GuestNav = ({ navigate }) => {
  return (
    <div className="flex items-center justify-end flex-1 mr-10 mb-2 gap-5">
       <Button
          variant="bg-green-500"
          textColor="text-white"
          size="w-full"
          onClick={() => navigate('/login')}
        >
          Login
        </Button>

        <Button
          variant="bg-green-50"
          textColor="text-green-500"
          size="w-full"
          onClick={() => navigate('/register')}
          className="border-green-500"
        >
          Register
        </Button>
    </div>
  );
};

export default CompNavbar;
