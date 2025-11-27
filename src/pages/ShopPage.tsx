import { useEffect, useState } from 'react';
import { dummyProducts, dummyCategories, type Product, type Category } from '../lib/supabase';
import { Filter, ShoppingBag } from 'lucide-react';
import { useCart } from '../lib/cart';

export default function ShopPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    loadProducts();
  }, [selectedCategory]);

  async function loadCategories() {
    // Using local dummy categories instead of Supabase
    const orderedCategories = [...dummyCategories].sort((a, b) => a.display_order - b.display_order);
    setCategories(orderedCategories);
  }

  async function loadProducts() {
    setLoading(true);

    let data = [...dummyProducts].sort((a, b) =>
      a.created_at < b.created_at ? 1 : -1
    );

    if (selectedCategory !== 'all') {
      const category = categories.find((c) => c.slug === selectedCategory);
      if (category) {
        data = data.filter((p) => p.category_id === category.id);
      } else {
        data = [];
      }
    }

    setProducts(data);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-warm-white">
      <section className="relative h-40 flex items-center justify-center bg-royal-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-navy to-charcoal"></div>
        <div className="relative z-10 text-center">
        
          <p className="text-gold tracking-[0.3em] text-sm">OUR COLLECTION</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-12 pb-6 border-b border-soft-grey">
          <div className="flex items-center space-x-2 text-charcoal">
            <Filter size={20} />
            <span className="font-medium">Filter by Category</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === 'all'
                ? 'bg-gold text-royal-navy shadow-md shadow-gold/40'
                : 'bg-soft-grey/60 text-charcoal hover:bg-gold hover:text-royal-navy hover:shadow-md hover:shadow-gold/40'
            }`}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.slug)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.slug
                  ? 'bg-gold text-royal-navy shadow-md shadow-gold/40'
                  : 'bg-soft-grey/60 text-charcoal hover:bg-gold hover:text-royal-navy hover:shadow-md hover:shadow-gold/40'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="h-96 bg-gray-200 animate-pulse"></div>
                <div className="h-6 bg-gray-200 animate-pulse"></div>
                <div className="h-4 bg-gray-200 animate-pulse w-24"></div>
              </div>
            ))}
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found in this category.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <a href={`/product/${product.slug}`} className="block">
                  <div className="relative overflow-hidden bg-soft-grey/60 mb-4 aspect-[3/4] shadow-md shadow-charcoal/10">
                    <img
                      src={product.images[0] || 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg'}
                      alt={product.name}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    {product.is_new_arrival && (
                      <div className="absolute top-4 left-4 bg-gold text-royal-navy px-4 py-1 text-xs tracking-widest shadow-sm shadow-gold/40">
                        NEW
                      </div>
                    )}
                    {product.stock_status === 'limited' && (
                      <div className="absolute top-4 right-4 bg-brand-red text-warm-white px-4 py-1 text-xs tracking-widest shadow-sm shadow-brand-red/40">
                        LIMITED
                      </div>
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gold font-medium">
                    KSH {product.price.toLocaleString()}
                  </p>
                </a>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href={`/product/${product.slug}`}
                    className="text-center bg-gold text-royal-navy py-2 text-sm font-medium shadow-md shadow-gold/40 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/50 transition-all duration-300"
                  >
                    View Details
                  </a>
                  <button
                    type="button"
                    onClick={() => addToCart(product)}
                    className="flex items-center justify-center gap-2 text-center bg-royal-navy text-warm-white py-2 text-sm font-medium rounded-md shadow-md shadow-royal-navy/40 hover:bg-royal-navy/90 hover:shadow-lg hover:shadow-royal-navy/60 transition-all duration-300"
                  >
                    <ShoppingBag size={16} />
                    <span>Add to Cart</span>
                  </button>
                  <a
                    href={`https://wa.me/254710208435?text=I'm interested in ${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center border border-royal-navy text-royal-navy py-2 text-sm hover:bg-royal-navy hover:text-warm-white transition-all duration-300"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
