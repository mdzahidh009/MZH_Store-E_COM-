import { StarIcon } from '@heroicons/react/20/solid';
import { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductModal from './ProductModal';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <div
        className="card transition-all duration-200 hover:-translate-y-1 hover:shadow-xl cursor-pointer bg-gradient-to-b from-white to-gray-50"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative aspect-square overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
          {product.discount > 0 && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-medium">
              -{product.discount}%
            </div>
          )}
        </div>

        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 truncate">
            {product.name}
          </h3>
          
          <div className="mt-1 flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`h-5 w-5 ${
                  i < product.rating
                    ? 'text-yellow-400'
                    : 'text-gray-200'
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              ({product.reviews})
            </span>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <div>
              <span className="text-lg font-bold text-gray-900">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice > product.price && (
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
            
            <button 
              className="btn btn-primary bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transform active:scale-95 transition-all"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}