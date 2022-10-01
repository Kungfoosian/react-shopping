import { cartItem } from '../App';
import './Cart.css';
import Counter from '../component/CounterAdjustable';
import { useEffect, useState } from 'react';

export default function Cart(props: any) {
  const data: cartItem[] = props.data;
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    setSubTotal(getTotalOf(...data));
  }, [props.data])

  function getTotalOf(...data:any[]) {
    let result = 0;
    
    for(const item of data) {
      result += item.qty * item.price;
    }

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

          <div className="cost-container">
            <p className='product-price-container'>
              <span className='currency'>§</span>

              <span className='product-price'>{getTotalOf(item)}</span>
            </p>
            
            <button onClick={() => props.handleEdit(item.id, 0) }>Delete</button>
          </div>
        </div>
      ))}

      <p>Grand total: §{subTotal}</p>
      <button onClick={props.handleSubmit}>Place Order</button>
    </> 
  }

  return (
    <main className='cart-main'>
      { 
        data.length > 0? 
          displayCart():
          <h2>No item in cart. Go buy some!</h2>
      }
    </main>
  )
}