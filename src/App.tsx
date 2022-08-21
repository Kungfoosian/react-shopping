import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Store from './routes/Store';
import Cart from './routes/Cart';
import { Data, getData } from './data';
import { useEffect } from 'react';


const logoBrand = require('./assets/logo.png');
const logoCart = require('./assets/shopping-cart.png');
const logoStore = require('./assets/store.png');

function App() {
  let data: Data[] = getData();

  // useEffect(() => {
  //   data.forEach(item => console.log(item.name))
  // })
  
  function addToCart() {
    console.log('hello')
  }

  return (
    <div className="App">
      <nav>
        <NavLink className='navlink' to='/store'>
          <img className='logo' src={logoBrand} alt='Brand' />
        </NavLink>

        <NavLink className='navlink' to='/store'>
          <img className='icon' src={logoStore} alt='Store' />
        </NavLink>
        <NavLink className='navlink' to='/cart'>
          <img className='icon' src={logoCart} alt='Cart' />
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={
          <Store addToCart={addToCart} data={data} />
        } />
        <Route path="/store" element={<Store addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h2>You did an oopsie</h2>} />
      </Routes>
    </div>
  );
}

export default App;