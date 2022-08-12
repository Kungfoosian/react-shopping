import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Store from './routes/Store';
import Cart from './routes/Cart';

const logoBrand = require('./assets/logo.png');
const logoCart = require('./assets/shopping-cart.png');
const logoStore = require('./assets/store.png');

function App() {
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
        <Route path="/" element={<Store />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h2>You did an oopsie</h2>} />
      </Routes>
    </div>
  );
}

export default App;