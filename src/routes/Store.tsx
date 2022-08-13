import './Store.css'
import { getData } from '../data';

export default function Store() {
  let data = getData();

  return (
    <main>
      <form className='search-bar'>
        <label htmlFor='product_search'>
          <input type='search' name='product_search' id='product_search' placeholder='Search for product...' />
        </label>
      </form>

      <div className='product-container'>
        {data.map(product => (
          <div key={product.id} className='product'>
            <img alt='produce'></img>
            <p>{product.name}</p>
            <p>§{product.price}</p>
          </div>  
        ))}
      </div>
    </main>
  )
}