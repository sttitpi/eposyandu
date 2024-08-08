import React from 'react';
import { FaHome, FaCalendarAlt, FaCamera } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gradient-to-r from-blue-600 to-blue-400 p-6 shadow-lg">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center">
        <div className="bg-white h-12 w-12 rounded-full flex items-center justify-center shadow-lg mr-3">
          {/* Placeholder for Logo */}
          <span className="text-blue-600 font-bold">LOGO</span>
        </div>
        <h1 className="text-2xl font-bold text-white">ePosyandu Bintan</h1>
      </div>
      <nav className="flex items-center space-x-6">
        <a href="#home" className="text-white flex items-center space-x-2 hover:text-gray-200 transition duration-300">
          <FaHome className="text-lg" />
          <span>Beranda</span>
        </a>
        <a href="#jadwal" className="text-white flex items-center space-x-2 hover:text-gray-200 transition duration-300">
          <FaCalendarAlt className="text-lg" />
          <span>Jadwal Kegiatan</span>
        </a>
        <a href="#dokumentasi" className="text-white flex items-center space-x-2 hover:text-gray-200 transition duration-300">
          <FaCamera className="text-lg" />
          <span>Dokumentasi</span>
        </a>
        <Link to="/register" className="bg-white text-blue-600 px-6 py-2 rounded-full shadow-md hover:bg-gray-100 transition duration-300 transform hover:scale-105 hover:-translate-y-1">
          DAFTAR
        </Link>
      </nav>
    </div>
  </header>
);

export default Header;
