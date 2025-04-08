export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  availability: boolean;
  category: 'men' | 'women' | 'watches' | 'shoes';
}

export interface CartItem {
  product: Product;
  quantity: number;
}