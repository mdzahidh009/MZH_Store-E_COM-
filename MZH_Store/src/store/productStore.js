import { create } from 'zustand';

const sampleProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    rating: 4.5,
    category: 'electronics',
    image: 'https://picsum.photos/seed/headphones/400/400',
    description: 'High-quality wireless headphones with noise cancellation.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    rating: 4.3,
    category: 'electronics',
    image: 'https://picsum.photos/seed/smartwatch/400/400',
    description: 'Feature-rich smartwatch with health tracking capabilities.',
  },
  {
    id: 3,
    name: 'Cotton T-Shirt',
    price: 24.99,
    rating: 4.0,
    category: 'clothing',
    image: 'https://picsum.photos/seed/tshirt/400/400',
    description: 'Comfortable cotton t-shirt available in multiple colors.',
  },
  {
    id: 4,
    name: 'Wireless Noise-Cancelling Headphones',
    price: 299.99,
    rating: 4.5,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    description: 'Premium wireless headphones with active noise cancellation.',
  },
  {
    id: 5,
    name: 'Smart 4K TV - 55 inch',
    price: 699.99,
    rating: 4.8,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1',
    description: 'Ultra HD Smart TV with HDR and built-in streaming apps.',
  },
  {
    id: 6,
    name: "Men's Classic Fit Dress Shirt",
    price: 49.99,
    rating: 4.3,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4',
    description: 'Classic fit dress shirt in wrinkle-free cotton.',
  },
  {
    id: 7,
    name: "Professional Chef's Knife",
    price: 89.99,
    rating: 4.7,
    category: 'home',
    image:
      'https://www.seriouseats.com/thmb/rXgXM7K48cValbqa4HHaFK7ayho=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SeriousEats_ZwillingPro8InchChefsKnife_022_DB_1-3x2-ad5c25cad46949e4b5c2fa0d2b6b4cac.jpeg',
    description:
      "High-carbon stainless steel chef's knife for professional use.",
  },
  {
    id: 8,
    name: 'Harry Potter',
    price: 79.99,
    rating: 4.6,
    category: 'books',
    image: 'https://media.wired.com/photos/6438790fb1ba8cf4f9ab0624/master/w_1920,c_limit/Harry-Potter-HBO-Series-Alamy-2M6AMK0.jpg',
    description: 'Collection of top 5 bestselling novels of 2023.',
  },
  {
    id: 9,
    name: 'Bestselling Novel Collection',
    price: 200.99,
    rating: 4.0,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    description: 'Collection of top 5 bestselling novels of 2023.',
  },
  {
    id: 10,
    name: 'Bestselling Novel Collection',
    price: 150.99,
    rating: 3.5,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    description: 'Collection of top 5 bestselling novels of 2023.',
  },
  {
    id: 11,
    name: "Professional Chef's Knife",
    price: 89.99,
    rating: 4.7,
    category: 'home',
    image:
      'https://www.seriouseats.com/thmb/rXgXM7K48cValbqa4HHaFK7ayho=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SeriousEats_ZwillingPro8InchChefsKnife_022_DB_1-3x2-ad5c25cad46949e4b5c2fa0d2b6b4cac.jpeg',
    description:
      "High-carbon stainless steel chef's knife for professional use.",
  },
  {
    id: 12,
    name: "Professional Chef's Knife",
    price: 79,
    rating: 3.9,
    category: 'home',
    image:
      'https://www.seriouseats.com/thmb/rXgXM7K48cValbqa4HHaFK7ayho=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SeriousEats_ZwillingPro8InchChefsKnife_022_DB_1-3x2-ad5c25cad46949e4b5c2fa0d2b6b4cac.jpeg',
    description:
      "High-carbon stainless steel chef's knife for professional use.",
  },
  {
    id: 13,
    name: "Professional Chef's Knife",
    price: 49,
    rating: 4.4,
    category: 'home',
    image:
      'https://www.seriouseats.com/thmb/rXgXM7K48cValbqa4HHaFK7ayho=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SeriousEats_ZwillingPro8InchChefsKnife_022_DB_1-3x2-ad5c25cad46949e4b5c2fa0d2b6b4cac.jpeg',
    description:
      "High-carbon stainless steel chef's knife for professional use.",
  },
  {
    id: 14,
    name: "Professional Chef's Knife",
    price: 99,
    rating: 3.2,
    category: 'home',
    image:
      'https://www.seriouseats.com/thmb/rXgXM7K48cValbqa4HHaFK7ayho=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SeriousEats_ZwillingPro8InchChefsKnife_022_DB_1-3x2-ad5c25cad46949e4b5c2fa0d2b6b4cac.jpeg',
    description:
      "High-carbon stainless steel chef's knife for professional use.",
  },
  {
    id: 15,
    name: 'Cotton T-Shirt',
    price: 49,
    rating: 4.4,
    category: 'clothing',
    image: 'https://picsum.photos/seed/tshirt/400/400',
    description: 'Comfortable cotton t-shirt available in multiple colors.',
  },
  {
    id: 16,
    name: 'Cotton T-Shirt',
    price: 99,
    rating: 3.9,
    category: 'clothing',
    image: 'https://picsum.photos/seed/tshirt/400/400',
    description: 'Comfortable cotton t-shirt available in multiple colors.',
  },
  {
    id: 16,
    name: 'Cotton T-Shirt',
    price: 99,
    rating: 3.9,
    category: 'clothing',
    image: 'https://picsum.photos/seed/tshirt/400/400',
    description: 'Comfortable cotton t-shirt available in multiple colors.',
  },
  {
    id: 17,
    name: 'Bestselling Novel Collection',
    price: 19,
    rating: 3.5,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    description: 'Collection of top 5 bestselling novels of 2023.',
  },
  {
    id: 18,
    name: 'Bestselling Novel Collection',
    price: 159,
    rating: 4.8,
    category: 'books',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    description: 'Collection of top 5 bestselling novels of 2023.',
  },
];

export const useProductStore = create((set, get) => ({
  products: sampleProducts,
  searchTerm: '',
  sortBy: 'featured',
  selectedCategory: '',

  setSearchTerm: (term) => set({ searchTerm: term }),
  setSortBy: (sort) => set({ sortBy: sort }),
  setCategory: (category) => set({ selectedCategory: category }),

  filteredProducts: sampleProducts,

  getFilteredProducts: () => {
    const { products, searchTerm, sortBy, selectedCategory } = get();

    let filtered = [...products];

    // Apply category filter
    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'featured' - keep original order
        break;
    }

    return filtered;
  },
}));
