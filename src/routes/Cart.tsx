import { cartItem } from '../App';
import './Cart.css';

export default function Cart(props: any) {
  const data: cartItem[] = props.data;

  function displayCart() {
    return <>
      {data.map(item => (
        <div className='cart-item-container'>
          <div key={item.id}>
            <div className='thumbnail-container'>
              <img alt='produce' src={require(`../assets/${item.thumbnail}`)}></img>
            </div>
            <p>{item.name}</p>
            <p>{item.qty}</p>
          </div>
        </div>
      ))}

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