import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

function SocialMedia() {
  return (
    <div className="flex items-center space-x-4">
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="bg-white text-gray-800 p-1 rounded-full transition transform hover:scale-110" />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="bg-white text-gray-800 p-1 rounded-full transition transform hover:scale-110" />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="bg-white text-gray-800 p-1 rounded-full transition transform hover:scale-110" />
      </a>
    </div>
  );
}

export default SocialMedia;
