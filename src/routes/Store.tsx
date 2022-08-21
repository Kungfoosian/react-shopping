import './Store.css'
import { useEffect, useRef, useState } from 'react';
import { Data } from '../data';
import Counter from '../component/Counter';

export default function Store(props: any) {
  // const [ data, setData ] = useState<Data[]>([]);
  const data: Data[] = props.data;

  const [ filteredData, setFilteredData ] = useState(data);

  const [ itemToFind, setItemToFind ] = useState('');

  const counterRef = useRef(null);

  function findItem(name: string) {
    setItemToFind(name);
  }

  useEffect(() => {
    if(itemToFind === '') {
      setFilteredData(data);
      return;
    };

    let filter: Data[] = data.filter(item => item.name.includes(itemToFind))

    setFilteredData(filter);
  }, [itemToFind, data]);

  function addToCart(event: any) {
    let itemId: string = event.target.parentElement.id;

    // console.log(counterRef.current.value)
    if(counterRef?.current !== null) console.log(counterRef.current);
  }

  function displayProducts(products: Data[]) {
    return products.map(product => (
      <div key={product.id} id={product.id} className='product'>
        <div className='img-container'>
          <img alt='produce' src={require(`../assets/${product.image}`)}></img>
        </div>
        <p className='product-title'>{product.name}</p>
        <p>§{product.price}</p>

        <Counter id={product.id} ref={counterRef} />        

        <button onClick={addToCart}>Add To Cart</button>
      </div>  
    ))
  }

  return (
    <main>
      <form className='search-bar'>
        <label htmlFor='product_search'>
          <input onChange={e => findItem(e.target.value)} type='search' name='product_search' id='product_search' placeholder='Search for product...' />
        </label>
      </form>

      <div className='product-container'>
        {filteredData.length > 0 ? displayProducts(filteredData) : displayProducts(data)}
      </div>
    </main>
  )
}