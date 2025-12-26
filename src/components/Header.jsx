import React from "react";
import api from "../api/User.api";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { removeUser } from "../utils/userSlice";
import { headerURL, usericonURL } from "../utils/Constents";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await api.post("/logout");
      alert("Signed out successfully");
      dispatch(removeUser(handleSignOut));
      navigate("/");
    } catch{
      console.error("Sign out failed");
      // nagivate to error page here make error page 
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 px-8 py-2
                bg-linear-to-b from-black to-transparent
                flex items-center justify-between">

  {/* Logo */}
  <img
    className="w-44"
    src={headerURL}
    alt="logo"
  />

  <div className="flex items-center gap-4">
    <img
      className="w-10 h-10 rounded-full cursor-pointer"
      src={usericonURL}
      alt="usericon"
    />
    <button
      className="text-white font-medium hover:underline"
      onClick={handleSignOut}
    >
      Sign Out
    </button>
  </div>
</div>

  );
};

export default Header;
