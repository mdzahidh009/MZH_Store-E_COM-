import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import { useProductStore } from './store/productStore';

export default function App() {
  const { searchTerm, setSearchTerm, sortBy, setSortBy, selectedCategory, setCategory } = useProductStore();

  return (
    <Router>
      <div className="min-h-screen bg-cyan-100">
        <Navbar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <main className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters */}
            <div className="w-full md:w-64 space-y-4 ">
              <div className="bg-white p-4 rounded-lg shadow bg-green-400">
                <h2 className="font-semibold mb-4 ">Categories</h2>
                <select
                  className="w-full p-2 border rounded bg-yellow-100"
                  value={selectedCategory}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">All Categories</option>
                  <option value="electronics">Electronics</option>
                  <option value="clothing">Clothing</option>
                  <option value="books">Books</option>
                  <option value="home">Home & Kitchen</option>
                </select>
              </div>
              <div className="bg-green-400 p-4 rounded-lg shadow">
                <h2 className="font-semibold mb-4">Sort By</h2>
                <select
                  className="w-full p-2 border rounded bg-yellow-100"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Rating</option>
                </select>
              </div>
            </div>
            
            {/* Product List */}
            <div className="flex-1">
              <ProductList />
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}