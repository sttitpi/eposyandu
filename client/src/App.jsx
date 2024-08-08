import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/user/Header';
import Hero from './components/user/Hero';
import Stats from './components/user/Stats';
import Schedule from './components/user/Schedule';
import Documentation from './components/user/Documentation';
import Footer from './components/user/Footer';
import Register from './components/user/Register';
import Login from './components/user/Login';
import RegistrationFlow from './components/user/RegistrationFlow';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={
        <>
          <Header />
          <Hero />
          <Stats />
          <Schedule />
          <Documentation />
          <Footer />
        </>
      } />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<RegistrationFlow />} />
    </Routes>
  </Router>
);

export default App;
