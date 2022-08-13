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
    console.log(data);
    if(itemToFind === '') return;

    // setFilteredData(data.filter(item => item.name == itemToFind));

    // let filter = data.find(item => item.name.includes(itemToFind))
    let filter: Data[] = data.filter(item => item.name.includes(itemToFind))
    // console.log(filter);
    setFilteredData(filter);
  }, [itemToFind]);

  return (
    <main>
      <form className='search-bar'>
        <label htmlFor='product_search'>
          <input onChange={e => findItem(e.target.value)} type='search' name='product_search' id='product_search' placeholder='Search for product...' />
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