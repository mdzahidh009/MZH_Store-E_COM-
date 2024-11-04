import React, { useState, useEffect } from 'react';
import { useProductStore } from '../store/productStore';
import ProductModal from './ProductModal';

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { getFilteredProducts, searchTerm, sortBy, selectedCategory } = useProductStore();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getFilteredProducts());
  }, [searchTerm, sortBy, selectedCategory]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold">${product.price}</span>
                <div className="flex items-center">
                  <span className="text-yellow-400">★</span>
                  <span className="ml-1">{product.rating}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}