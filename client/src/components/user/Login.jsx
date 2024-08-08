import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-lg">
        <div className="w-1/2 bg-pink-100 text-blue-800 flex flex-col justify-center items-center p-8">
          <h1 className="text-3xl font-bold mb-4 text-center">Masuk Ke E-Posyandu Bintan</h1>
          <p className="text-center mb-6">Tolong inputkan data anda!</p>
          <form className="w-full">
            <input
              type="text"
              placeholder="Nama Pengguna"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <input
              type="password"
              placeholder="Kata Sandi"
              className="w-full p-3 mb-4 border border-gray-300 rounded"
            />
            <div className="text-right mb-4">
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Your Password?</a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded"
            >
              Masuk
            </button>
          </form>
        </div>
        <div className="w-1/2 bg-blue-800 text-white flex flex-col justify-center items-center p-8">
          <h1 className="text-3xl font-bold mb-4">Hallo, Parent!</h1>
          <p className="text-center mb-6">Masukan data diri kamu dan bergabung bersama E-Posyandu Bintan.</p>
          <Link to="/register" className="bg-white text-blue-600 hover:bg-gray-100 py-2 px-4 rounded">Daftar</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
