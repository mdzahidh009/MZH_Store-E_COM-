import React, { useState } from 'react';
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCartStore } from '../store/cartStore';
import CartDrawer from './CartDrawer';

export default function Navbar({ searchTerm, onSearch }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const getItemCount = useCartStore((state) => state.getItemCount);
  const itemCount = getItemCount();

  return (
    <>
      <nav className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <a href="/" className="text-xl font-bold">MZH Store</a>
              <div className="flex-1 max-w-2xl">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 text-gray-900 rounded-lg"
                  value={searchTerm}
                  onChange={(e) => onSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="p-2 hover:bg-gray-700 rounded-full relative"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCartIcon className="h-6 w-6" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </button>
              <button className="p-2 hover:bg-gray-700 rounded-full">
                <UserIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}