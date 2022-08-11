import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Store from './routes/Store';
import Cart from './routes/Cart';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink className='navlink' to='/store'>Logo</NavLink>
        <NavLink className='navlink' to='/store'>Store</NavLink>
        <NavLink className='navlink' to='/cart'>Cart</NavLink>
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