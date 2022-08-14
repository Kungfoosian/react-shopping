import './Store.css'
import { Data, getData } from '../data';
import { useEffect, useState } from 'react';

export default function Store() {
  let data: Data[] = getData();
  const [ filteredData, setFilteredData ] = useState(data);

  const [ itemToFind, setItemToFind ] = useState('');

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
  }, [itemToFind]);

  function displayProducts(products: Data[]) {
    return products.map(product => (
      <div key={product.id} className='product'>
        <img alt='produce'></img>
        <p>{product.name}</p>
        <p>§{product.price}</p>
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
        {filteredData? displayProducts(filteredData) : displayProducts(data)}
      </div>
    </main>
  )
}