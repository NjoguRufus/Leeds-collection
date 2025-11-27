import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { Product } from './supabase';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize?: string;
}

interface CartContextValue {
  items: CartItem[];
  addToCart: (product: Product, options?: { size?: string }) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalQuantity: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart: CartContextValue['addToCart'] = (product, options) => {
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.selectedSize === options?.size
      );
      if (existing) {
        return prev.map((item) =>
          item === existing ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: `${product.id}-${options?.size ?? 'onesize'}-${Date.now()}`,
          product,
          quantity: 1,
          selectedSize: options?.size
        }
      ];
    });
  };

  const removeFromCart: CartContextValue['removeFromCart'] = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart: CartContextValue['clearCart'] = () => {
    setItems([]);
  };

  const { totalQuantity, totalPrice } = useMemo(
    () =>
      items.reduce(
        (acc, item) => {
          acc.totalQuantity += item.quantity;
          acc.totalPrice += item.quantity * item.product.price;
          return acc;
        },
        { totalQuantity: 0, totalPrice: 0 }
      ),
    [items]
  );

  const value: CartContextValue = {
    items,
    addToCart,
    removeFromCart,
    clearCart,
    totalQuantity,
    totalPrice
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
}


