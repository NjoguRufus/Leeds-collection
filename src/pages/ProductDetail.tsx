import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MessageCircle, ShoppingCart, Star } from 'lucide-react';
import { products } from '../data/products';
import { useStore } from '../store/useStore';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useStore();
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="pt-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button
          onClick={() => navigate('/shop')}
          className="text-purple-600 hover:text-purple-700"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  const handleWhatsAppInquiry = () => {
    const message = `Hi, I'm interested in ${product.name} (${product.price} USD). Could you provide more information?`;
    const whatsappUrl = `https://wa.me/254706126162?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-square rounded-xl overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold">{product.name}</h1>
            
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  className={index < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
                />
              ))}
              <span className="text-sm text-gray-600 dark:text-gray-300">
                ({product.rating})
              </span>
            </div>

            <p className="text-3xl font-bold text-purple-600">
              ${product.price}
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              {product.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold">Category:</span>
                <span className="capitalize">{product.category}</span>
              </div>
              
              <div className="flex items-center gap-4">
                <span className="font-semibold">Availability:</span>
                <span className={product.availability ? 'text-green-500' : 'text-red-500'}>
                  {product.availability ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            <div className="flex gap-4 pt-6">
              <button
                onClick={() => addToCart({ product, quantity: 1 })}
                className="flex-1 bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
              <button
                onClick={handleWhatsAppInquiry}
                className="px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Inquire
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;