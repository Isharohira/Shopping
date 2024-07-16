import React from 'react';
import ProductCard from '../components/ProductCard';
import all_products from '../assets/all_product';
function Men() {
  const menItems = all_products.filter((product) => {
    return product.category === 'men';
  });
  console.log(menItems);
  return (
    <div>
      <h1 className="text-center">MEN CLOTHING</h1>
      <div className="grid grid-cols-3 gap-6">
        {menItems.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Men;