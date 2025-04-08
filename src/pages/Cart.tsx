import React from 'react';
import { motion } from 'framer-motion';
import { Trash2, MessageCircle } from 'lucide-react';
import { useStore } from '../store/useStore';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity } = useStore();

  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleWhatsAppCheckout = () => {
    const itemsList = cart
      .map(item => `• ${item.quantity}x ${item.product.name} - $${(item.product.price * item.quantity).toFixed(2)}`)
      .join('\n');

    const message = `Hi, I would like to purchase:\n\n${itemsList}\n\nTotal: $${total.toFixed(2)}`;
    const whatsappUrl = `https://wa.me/254706126162?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cart.length === 0) {
    return (
      <div className="pt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 dark:text-gray-300">Start shopping to add items to your cart!</p>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto px-4"
      >
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

        <div className="space-y-4">
          {cart.map((item) => (
            <motion.div
              key={item.product.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center gap-4 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-24 h-24 object-cover rounded-lg"
              />
              
              <div className="flex-1">
                <h3 className="font-semibold">{item.product.name}</h3>
                <p className="text-purple-600 font-bold">${item.product.price}</p>
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value))}
                  className="bg-gray-100 dark:bg-gray-700 rounded-lg px-2 py-1"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => removeFromCart(item.product.id)}
                  className="text-red-500 hover:text-red-600 p-2"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-2xl font-bold text-purple-600">
              ${total.toFixed(2)}
            </span>
          </div>

          <button
            onClick={handleWhatsAppCheckout}
            className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <MessageCircle size={20} />
            Checkout via WhatsApp
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Cart;