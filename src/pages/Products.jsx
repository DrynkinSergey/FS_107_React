import axios from 'axios';
import { useEffect, useState } from 'react';
import Product from '../components/Product';

export const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://dummyjson.com/products').then(res => setProducts(res.data.products));
  }, []);
  return (
    <div>
      <h2>Products</h2>
      <ul className='grid grid-cols-3 gap-4'>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};
