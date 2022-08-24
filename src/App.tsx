import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Store from './routes/Store';
import Cart from './routes/Cart';
import { Data, getData, findData } from './data';
import { useEffect, useState } from 'react';

type cartItem = {
  id: string,
  name: string,
  qty: number,
  thumbnail: string
}

const logoBrand = require('./assets/logo.png');
const logoCart = require('./assets/shopping-cart.png');
const logoStore = require('./assets/store.png');

function App() {
  let data: Data[] = getData();

  let [cart, editCart] = useState<cartItem[]>([]);

  useEffect(() => {
    console.log(cart);
  })

  function addToCart(event: any) {
    let itemId: string = event.target.parentElement.id;

    let itemFound: cartItem | undefined = findItem(itemId);
    
    let itemAmount: number = parseInt(document.getElementById(`${itemId}-amount`)?.innerText!);

    // Check if cart already has item
    //  If yes, add qty into item qty and update the cart
    //  If no, add new item
    if(itemFound !== undefined) {
      itemFound.qty += itemAmount;
      
      let itemIndex: number | undefined = cart?.findIndex(item => item.id === itemId);

      let cartCopy = cart;

      cartCopy?.splice(itemIndex!, 1, itemFound);

      return editCart([...cartCopy!]);
    }

    
    
    let item: Data = findData(itemId)!;
    
    // console.log(`${itemName} : ${itemAmount}`);
    let newCartItem: cartItem = {
      id: itemId,
      name: item.name,
      qty: itemAmount,
      thumbnail: item.image
    };

    return editCart([...cart!, newCartItem]);

  }

  function findItem(itemId: string): cartItem | undefined { return cart?.find(item => item.id === itemId) }

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
        {
          ['/', 'store'].map(path => {
            return <Route key="store" path={path} element={<Store addToCart={addToCart} data={data} />} />
          })
        }
         
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h2>You did an oopsie</h2>} />
      </Routes>
    </div>
  );
}

export default App;