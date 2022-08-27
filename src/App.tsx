import './App.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import Store from './routes/Store';
import Cart from './routes/Cart';
import { Data, getData, findData } from './data';
import { useState } from 'react';

export type cartItem = {
  id: string,
  name: string,
  qty: number,
  thumbnail: string,
  price: number
}

const logoBrand = require('./assets/logo.png');
const logoCart = require('./assets/shopping-cart.png');
const logoStore = require('./assets/store.png');

function App() {
  let data: Data[] = getData();

  const [cart, editCart] = useState<cartItem[]>([]);

  function handleAdd(event: any) {
    let itemId: string = event.target.parentElement.id;

    let itemFound: cartItem | undefined = findItem(itemId);
    
    let itemAmount: number = parseInt(document.getElementById(`${itemId}-amount`)?.innerText!);

    // Check if cart already has item
    //  If yes, add qty into item qty and update the cart
    //  If no, add new item
    if(itemFound === undefined) return addToCart(itemId, itemAmount);
    
    return editItemInCart(itemFound, itemId, itemAmount);
  }

  function findItem(itemId: string): cartItem | undefined { return cart?.find(item => item.id === itemId) }

  function addToCart(itemId: string, itemAmount: number): void{
    let item: Data = findData(itemId)!;
    
    let newCartItem: cartItem = {
      id: itemId,
      name: item.name,
      qty: itemAmount,
      thumbnail: item.image,
      price: item.price
    };

    return editCart([...cart!, newCartItem]);
  }

  function editItemInCart(item: cartItem, itemId: string, itemAmount: number): void{
    item.qty += itemAmount;
      
    let itemIndex: number | undefined = cart?.findIndex(item => item.id === itemId);

    let cartCopy = cart;

    cartCopy?.splice(itemIndex!, 1, item);

    return editCart([...cartCopy!]);
  }

  function submitOrder() { editCart([]) }

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
            return <Route key="store" path={path} element={<Store handleAdd={handleAdd} data={data} />} />
          })
        }
         
        <Route path="/cart" element={<Cart data={cart} handleSubmit={submitOrder} />} />
        <Route path="*" element={<h2>You did an oopsie</h2>} />
      </Routes>
    </div>
  );
}

export default App;