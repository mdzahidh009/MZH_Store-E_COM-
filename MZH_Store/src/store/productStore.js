import { create } from 'zustand';

const sampleProducts = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    rating: 4.5,
    category: 'electronics',
    image: 'https://images-cdn.ubuy.co.in/63ec2ab159725522bb0a8433-prtukyt-6s-wireless-bluetooth-headphones.jpg',
    description: 'High-quality wireless headphones with noise cancellation.',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    rating: 4.3,
    category: 'electronics',
    image: 'https://m.media-amazon.com/images/I/61icsCcbdKL.jpg',
    description: 'Feature-rich smartwatch with health tracking capabilities.',
  },
  {
    id: 3,
    name: 'Cotton T-Shirt',
    price: 24.99,
    rating: 4.0,
    category: 'clothing',
    image: 'https://4.imimg.com/data4/XJ/LM/MY-13230786/cotton-t-shirts.jpg',
    description: 'Comfortable cotton t-shirt available in multiple colors.',
  },
  {
    id: 4,
    name: 'Tablet',
    price: 299.99,
    rating: 4.5,
    category: 'electronics',
    image: 'https://m.media-amazon.com/images/I/715Dsu2jxWL.jpg',
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
    name: 'THE RETURN OF SHERLOCK HOLMES (SHERLOCK HOLMES)',
    price: 200.99,
    rating: 4.0,
    category: 'books',
    image: 'https://m.media-amazon.com/images/I/71cXnSZzUuL._AC_UF1000,1000_QL80_.jpg',
    description: 'Collection of top 5 bestselling novels of 2023.',
  },
  {
    id: 10,
    name: 'A thousand splendid suns',
    price: 150.99,
    rating: 3.5,
    category: 'books',
    image: 'https://myonlinebookshop.pk/cdn/shop/products/IMG-20220913-WA0005_195x195@2x.jpg?v=1663153929',
    description: 'Collection of top 5 bestselling novels of 2023.',
  },
  {
    id: 11,
    name: "SOWBAGHYA Ultima Stainless Steel Cookware Set, 5 Piece (Silver)",
    price: 89.99,
    rating: 4.7,
    category: 'home',
    image:
      'https://www.dealsplant.com/cdn/shop/products/sowbaghya-home-kitchen-appliances-sowbaghya-ultima-stainless-steel-cookware-set-5-piece-silver-16311890673739.jpg?v=1634805725',
    description:
      "High-carbon stainless steel chef's knife for professional use.",
  },
  {
    id: 12,
    name: "Bajaj Rex Mixer Grinder 750W|4 Mixer Jars|Mixie for Kitchen with Nutri-Pro Feature|Titan Motor-Heavy Duty Grinding",
    price: 79,
    rating: 3.9,
    category: 'home',
    image:
      'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Smallappliances/Mixer-grinders.jpg',
    description:
      "High-carbon stainless steel chef's knife for professional use.",
  },
  {
    id: 13,
    name: "Refrigerator - Home Appliances",
    price: 49,
    rating: 4.4,
    category: 'home',
    image:
      'https://www.rajanandco.in/pub/media/catalog/product/cache/bec761d54e398ba11dc5e3b7a5b5a37a/r/t/rt41db6a4b22hl.jpg',
    description:
      "High-carbon stainless steel chef's knife for professional use.",
  },
  {
    id: 14,
    name: "Electric Clothes Washing Machine, Laundry",
    price: 99,
    rating: 3.2,
    category: 'home',
    image:
      'https://png.pngtree.com/png-vector/20240909/ourmid/pngtree-washing-mashine-with-splash-of-water-png-image_13797744.png',
    description:
      "High-carbon stainless steel chef's knife for professional use.",
  },
  {
    id: 15,
    name: 'LAVANYA BOUTIQUE Womens Flared Embroidered Cotton Gown | Long Gown ',
    price: 49,
    rating: 4.4,
    category: 'clothing',
    image: 'https://m.media-amazon.com/images/I/61-MlTeQ1lL._AC_UY1100_.jpg',
    description: 'Comfortable cotton t-shirt available in multiple colors.',
  },
  {
    id: 19,
    name: 'Mens Designer Clothes | Luxury Clothing | DIOR GB | DIOR',
    price: 99,
    rating: 3.9,
    category: 'clothing',
    image: 'https://www.dior.com/couture/var/dior/storage/images/pushs-editos/folder-spring-25-men/folder-digital/513d594a3005c580/44559691-1-eng-GB/513d594a3005c580_1440_1200.jpg',
    description: 'Comfortable cotton t-shirt available in multiple colors.',
  },
  {
    id: 16,
    name: 'Women’s Casual Knee Length Dresses for Summer | Short A-Line Tier Dress/Girls Wea',
    price: 99,
    rating: 3.9,
    category: 'clothing',
    image: 'https://m.media-amazon.com/images/I/41pUCnny4hL._AC_UY1100_.jpg',
    description: 'Comfortable cotton t-shirt available in multiple colors.',
  },
  {
    id: 17,
    name: 'Summer of the Dead',
    price: 19,
    rating: 3.5,
    category: 'books',
    image: 'https://mpd-biblio-covers.imgix.net/9781250044754.jpg',
    description: 'Collection of top 5 bestselling novels of 2023.',
  },
  {
    id: 18,
    name: 'A Killing in the Hills:',
    price: 159,
    rating: 4.8,
    category: 'books',
    image: 'https://m.media-amazon.com/images/I/91EaiLVWsvL._AC_UF1000,1000_QL80_.jpg',
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
