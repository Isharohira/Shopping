import React from 'react'
import ProductCard from '../components/ProductCard';
import all_products from '../assets/all_product';

function Women() {
    const womenItems = all_products.filter((product) => {
        return product.category === 'women';
      });
      console.log(womenItems);
      return (
        <div>
          <h1 className="text-center">WOMEN CLOTHING</h1>
          <div className="grid grid-cols-3 gap-6">
            {womenItems.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </div>
      );
    }

export default Women