import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Converter from './pages/Converter';
import Home from './pages/Home';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='/' element={ <Home/> }></Route>
      <Route path='/about' element={ <About /> }></Route>
      <Route path='/converter' element={ <Converter /> }></Route>

    </Routes>
  );
}

export default Main;