import cloth1 from '../images/cloth1.jpg';
import cloth2 from '../images/cloth2.jpg';
import cloth3 from '../images/cloth3.jpg';
import cloth4 from '../images/cloth4.jpg';
import cloth5 from '../images/cloth5.jpg';
import shoe1 from '../images/shoe1.jpg';
import shoe2 from '../images/shoe2.jpg';
import shoe3 from '../images/shoe3.jpg';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image_url: string;
  display_order: number;
  created_at: string;
}

export interface Product {
  id: string;
  category_id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  sizes: string[];
  colors: string[];
  is_new_arrival: boolean;
  is_featured: boolean;
  stock_status: string;
  created_at: string;
  updated_at: string;
}

// Temporary dummy data while Supabase is disabled
export const dummyCategories: Category[] = [
  {
    id: '1',
    name: 'Women',
    slug: 'women',
    description: 'Luxury fashion for women',
    image_url: cloth1,
    display_order: 1,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Men',
    slug: 'men',
    description: 'Luxury fashion for men',
    image_url: cloth3,
    display_order: 2,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Kids',
    slug: 'kids',
    description: 'Luxury fashion for kids',
    image_url: shoe1,
    display_order: 3,
    created_at: new Date().toISOString()
  }
];

export const dummyProducts: Product[] = [
  {
    id: 'p1',
    category_id: '1',
    name: 'Elegant Evening Dress',
    slug: 'elegant-evening-dress',
    description: 'A stunning imported evening dress perfect for special occasions.',
    price: 9500,
    images: [cloth1, cloth2],
    sizes: ['S', 'M', 'L'],
    colors: ['Black', 'Red'],
    is_new_arrival: true,
    is_featured: true,
    stock_status: 'in_stock',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'p2',
    category_id: '2',
    name: 'Classic Men\'s Suit',
    slug: 'classic-mens-suit',
    description: 'Tailored men\'s suit with a modern slim fit.',
    price: 12500,
    images: [cloth3, cloth4],
    sizes: ['M', 'L', 'XL'],
    colors: ['Navy', 'Grey'],
    is_new_arrival: false,
    is_featured: true,
    stock_status: 'limited',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: 'p3',
    category_id: '3',
    name: 'Kids Designer Sneakers',
    slug: 'kids-designer-sneakers',
    description: 'Comfortable and stylish sneakers for kids.',
    price: 4800,
    images: [shoe1, shoe2, shoe3],
    sizes: ['30', '32', '34'],
    colors: ['White', 'Blue'],
    is_new_arrival: true,
    is_featured: true,
    stock_status: 'in_stock',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];
