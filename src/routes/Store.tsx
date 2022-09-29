import './Store.css'
import { useEffect, useState } from 'react';
import { Data } from '../data';
import Counter from '../component/CounterAdjustable';

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

        <div className="product-info">
          <p className='product-price-container'>
            <span className='currency'>§</span>

            <span className='product-price'>{product.price}</span>
          </p>

          <h3 className='product-title'>{product.name}</h3>

          <Counter id={product.id} amount={1} handleEdit={props.handleEdit}/>

          <div className='submit-btn' onClick={props.handleSubmit}>Add To Cart</div>
        </div>
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