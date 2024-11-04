import { createContext, useState, useEffect } from 'react';
import { mockProducts } from '../data/mockProducts';

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products] = useState(mockProducts);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(1000);
  const [sortBy, setSortBy] = useState('relevance');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [...new Set(products.map(p => p.category))];

  const filteredProducts = products
    .filter(product => 
      (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
      product.price <= priceRange &&
      (searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        default:
          return 0;
      }
    });

  return (
    <ProductContext.Provider
      value={{
        products: filteredProducts,
        categories,
        selectedCategories,
        setSelectedCategories,
        priceRange,
        setPriceRange,
        sortBy,
        setSortBy,
        searchQuery,
        setSearchQuery,
        filteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}