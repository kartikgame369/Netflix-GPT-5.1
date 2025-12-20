import React from "react";
import api from "../api/User.api";
import { Navigate, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await api.post("/logout");
      alert("Signed out successfully");
      navigate("/");
    } catch{
      console.error("Sign out failed");
      // nagivate to error page here make error page 
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full px-8 py-2 bg-linear-to-b from-black to-transparent flex items-center justify-between">
      
      {/* Logo */}
      <img
        className="w-44"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {/* User section (RIGHT SIDE) */}
      <div className="flex items-center gap-4">
        <img
          className="w-10 h-10 rounded-full cursor-pointer"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRKNdKRIgbcMkyGq1cQeq40IA-IQS-FDWnTQ&s"
          alt="usericon"
        />
        <button className="text-white font-medium hover:underline" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Header;
