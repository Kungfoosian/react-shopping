import { cartItem } from '../App';
import './Cart.css';
import Counter from '../component/Counter';
import { useEffect, useState } from 'react';

export default function Cart(props: any) {
  const data: cartItem[] = props.data;
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    setSubTotal(getSubTotal());
  }, [props.data])

  function getSubTotal() {
    let result = 0;

    data.forEach(item => {
      console.log(`${item.name}: ${item.qty}`)
      result += item.qty * item.price;

      setSubTotal(result);
    })
    
    return result;
  }

  function displayCart() {
    return <>
      {data.map(item => (
        <div key={item.id} className='cart-item-container'>
          <div className='thumbnail-container'>
            <img alt='produce' src={require(`../assets/${item.thumbnail}`)}></img>
          </div>
          <p>{item.name}</p>
          <Counter id={item.id} amount={item.qty} handleEdit={props.handleEdit} />
        </div>
      ))}

      <p>Grand total: §{subTotal}</p>
      <button onClick={props.handleSubmit}>Place Order</button>
    </> 
  }

  return (
    <main>
      { 
        data.length > 0? 
          displayCart():
          <h2>No item in cart. Go buy some!</h2>
      }
    </main>
  )
}