import React from 'react';
import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink className='navlink' to='/store'>Logo</NavLink>
        <NavLink className='navlink' to='/store'>Store</NavLink>
        <NavLink className='navlink' to='/cart'>Cart</NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
