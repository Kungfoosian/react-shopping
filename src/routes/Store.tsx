import './Store.css'
import { useEffect, useState } from 'react';
import { Data } from '../data';
import Counter from '../component/Counter';

export default function Store(props: any) {
  const data: Data[] = props.data;

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
  }, [itemToFind, data]);



  function displayProducts(products: Data[]) {
    return products.map((product, index) => (
      <div key={index} id={product.id} className='product'>
        <div className='img-container'>
          <img alt='produce' src={require(`../assets/${product.image}`)}></img>
        </div>
        <p className='product-title'>{product.name}</p>
        <p>§{product.price}</p>

        {/* <Counter id={product.id} amount={1}/>         */}
        <Counter id={product.id} amount={1} handleEdit={props.handleEdit}/>


        <button onClick={props.handleSubmit}>Add To Cart</button>
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