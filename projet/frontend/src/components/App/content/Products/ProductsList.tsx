import { useState, useEffect } from 'react';
import fetchData from '../../../../api/fetchData';
import { Product, ProductsData } from '../../../../@types/products';
import groupByKey from '../../../../utils/groupBy';
import ProductItem from './ProductItem';


function ProductsList() {
  const [sortedProducts, setSortedProducts] = useState<Record<string, Product[]>>({});

  useEffect(() => {
    fetchData<ProductsData>('/products')
      .then((data) => {
        const productsByCategory = groupByKey(data.products, 'category');
        setSortedProducts(productsByCategory);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="product-list">
      <div className="product-list">
            <pre>{JSON.stringify(sortedProducts, null, 4)}</pre>
        </div>
    </div>
  );
}

export default ProductsList;
