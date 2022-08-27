import { cartItem } from '../App';
import './Cart.css';
import Counter from '../component/Counter';

export default function Cart(props: any) {
  const data: cartItem[] = props.data;

  function getSubtotal() {
    let result = 0;
    data.forEach(item => {
      result += item.qty * item.price;
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
          <Counter id={item.id} amount={item.qty} />
        </div>
      ))}

      <p>Grand total: §{getSubtotal()}</p>
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