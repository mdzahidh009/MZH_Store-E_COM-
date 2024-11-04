import React from 'react';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '../store/cartStore';

export default function ProductModal({ product, onClose }) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product);
    onClose();
  };

  return (
    <Dialog open={true} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
      
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="bg-white rounded-lg max-w-2xl w-full">
          <div className="relative">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-500"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            
            <div className="p-6">
              <div className="flex gap-6">
                <div className="w-1/2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div className="w-1/2">
                  <h2 className="text-2xl font-bold mb-4">{product.name}</h2>
                  <p className="text-3xl font-bold mb-4">${product.price}</p>
                  <div className="flex items-center mb-4">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1">{product.rating}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}