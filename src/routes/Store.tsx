import { getData } from '../data';

export default function Store() {
  let data = getData();

  return (
    <main>
      <form>
        <label htmlFor='product_search'>
          <input type='search' name='product_search' id='product_search' placeholder='Search for product...' />
        </label>
      </form>

      <div>
        {data.map(product => (
          <div>
            <p>{product.name}</p>
            <p>§{product.price}</p>
          </div>  
        ))}
      </div>
    </main>
  )
}