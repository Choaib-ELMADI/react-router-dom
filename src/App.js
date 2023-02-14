import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import './App.css';
import { Home, About } from './pages/index';



const App = () => {
  return (
    <main className='app'>
      <header>
        <nav>
          <h1>React-RD</h1>
          <NavLink 
            to='/'
            className='nav-link' 
          >Home</NavLink>
          <NavLink 
            to='about' 
            className='nav-link'
          >About</NavLink>
        </nav>
      </header>
      <Routes>
        <Route index element={ <Home /> } />
        <Route path='about' element={ <About /> } />
      </Routes>
    </main>
  );
};

export default App;