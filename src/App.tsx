import './App.css';
import { Routes, Route } from 'react-router-dom';
import Store from './routes/Store';
import Cart from './routes/Cart';
import { Data, getData, findData } from './data';
import { useEffect, useState } from 'react';
import NavRegular from './component/NavRegular';
import NavHamburger from './component/NavHamburger';
import useWindowDimensions from './hooks/useWindowDimensions';

export type cartItem = {
  id: string,
  name: string,
  qty: number,
  thumbnail: string,
  price: number
}

function App() {
  let data: Data[] = getData();

  const [cart, editCart] = useState<cartItem[]>([]);

  function submitItemToCart(event: any) {
    let itemId: string = event.target.parentElement.parentElement.id;

    let itemAmount: number = parseInt(document.getElementById(`${itemId}-amount`)?.innerText!);
    if(itemAmount <= 0 ) return;

    let itemFound: cartItem | undefined = findItem(itemId);
    

    // Check if cart already has item
    //  If no, add new item
    //  If yes, add qty into item qty and update the cart
    if(itemFound === undefined) return addToCart(itemId, itemAmount);
    
    return editItemInCart(itemId, itemAmount);
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

  function editItemInCart(itemId: string, itemAmount: number, toBeAdded:boolean = true): void{
    let itemFound: cartItem = cart.find(item => item.id === itemId)!;
    
    if(toBeAdded) itemFound!.qty += itemAmount; 
    else itemFound!.qty = itemAmount;
    
    let itemIndex: number | undefined = cart?.findIndex(item => item.id === itemId);
    
    let cartCopy = cart;
    
    cartCopy?.splice(itemIndex!, 1, itemFound);
    
    if(itemAmount === 0) { cartCopy.splice(itemIndex, 1) }

    return editCart([...cartCopy!]);
  }

  function emptyCart() { editCart([]) }

  function submitOrder() { emptyCart() }

  const [useHamburgerNav, setUseHamburgerNav] = useState(false);

  const { width } = useWindowDimensions();
  
  useEffect(() => {
    if(width < 500) setUseHamburgerNav(true)
    else setUseHamburgerNav(false)
  }, [width])
  

  return (
    <div className={useHamburgerNav? 'App w-hamburger-nav' : 'App w-regular-nav'}>
      { useHamburgerNav ? 
          <NavHamburger cartLength={cart.length} /> 
          : <NavRegular cartLength={cart.length} /> 
      }

      <Routes>
        {
          ['/', 'store'].map(path => {
            return <Route key="store" path={path} element={<Store handleSubmit={submitItemToCart} data={data} />} />
          })
        }
         
        <Route path="/cart" element={<Cart data={cart} handleSubmit={submitOrder} handleEdit={editItemInCart} emptyCart={emptyCart} />} />
        <Route path="*" element={<h2>You did an oopsie</h2>} />
      </Routes>
    </div>
  );
}

export default App;