import React from 'react';
import Header from './components/common/header/Header';
import Hero from './components/common/Hero/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";
import Contact from './components/Pages/Contact';
import Footer from './components/common/Fotter/Fotter';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
        <Footer/>
      </>
    </Router>
  );
}

export default App;
