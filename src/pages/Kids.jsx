import React from 'react';
import ProductCard from '../components/ProductCard';
import all_products from '../assets/all_product';
function Kids() {
  const kidsItems = all_products.filter((product) => {
    return product.category === 'kid';
  });
  console.log(kidsItems);
  return (
    <div>
      <h1 className="text-center">KIDS CLOTHING</h1>
      <div className="grid grid-cols-3 gap-6">
        {kidsItems.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Kids;