import React, { Component } from "react";
import { Routes, Route, Link, Redirect } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
  return (
    <div className='app'>
      <div>Welcome to Spotifly</div>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
