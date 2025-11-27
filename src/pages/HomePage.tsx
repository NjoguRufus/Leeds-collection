import { useEffect, useState } from 'react';
import { dummyProducts, dummyCategories, type Product, type Category } from '../lib/supabase';
import { Sparkles, Shield, Truck, Award } from 'lucide-react';

export default function HomePage() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    // Using local dummy data instead of Supabase for now
    const featured = dummyProducts.filter((p) => p.is_featured).slice(0, 6);
    const orderedCategories = [...dummyCategories].sort((a, b) => a.display_order - b.display_order);

    setFeaturedProducts(featured);
    setCategories(orderedCategories);
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-warm-white">
      <section className="relative min-h-screen flex items-center justify-center bg-royal-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-royal-navy via-charcoal to-charcoal opacity-90"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        <div className="relative z-10 text-center px-4 space-y-8 animate-fade-in">
          <div className="inline-block">
            <p className="text-gold tracking-[0.3em] text-sm mb-4 font-light">LUXURY FASHION COLLECTION</p>
            <h1 className="font-playfair text-6xl md:text-8xl text-white mb-6 leading-tight">
              Where Fashion<br />
              <span className="text-gold">Is Our Passion</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Discover imported luxury fashion for Women, Men & Kids. Experience elegance redefined.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/shop?category=women"
              className="group bg-gold text-royal-navy px-10 py-4 text-lg font-medium shadow-md shadow-gold/40 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 transform hover:scale-105"
            >
              Shop Women
            </a>
            <a
              href="/shop?category=men"
              className="group border-2 border-gold text-gold px-10 py-4 text-lg font-medium hover:bg-gold hover:text-royal-navy hover:shadow-md hover:shadow-gold/40 transition-all duration-300 transform hover:scale-105"
            >
              Shop Men
            </a>
            <a
              href="/shop?category=kids"
              className="group border-2 border-aqua text-aqua px-10 py-4 text-lg font-medium hover:bg-aqua hover:text-royal-navy hover:shadow-md hover:shadow-aqua/40 transition-all duration-300 transform hover:scale-105"
            >
              Shop Kids
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4 font-light">EXPLORE OUR COLLECTION</p>
            <h2 className="font-playfair text-5xl md:text-6xl text-black mb-4">Featured Categories</h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="h-64 bg-gray-200 animate-pulse"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`/shop?category=${category.slug}`}
                  className="group relative h-80 overflow-hidden bg-royal-navy"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-royal-navy via-charcoal/80 to-transparent z-10"></div>
                  <img
                    src={category.image_url || 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg'}
                    alt={category.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-end pb-8">
                    <h3 className="font-playfair text-3xl text-warm-white mb-2">{category.name}</h3>
                    <div className="w-12 h-0.5 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-24 px-4 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-gold tracking-[0.3em] text-sm mb-4 font-light">NEW ARRIVALS</p>
            <h2 className="font-playfair text-5xl md:text-6xl text-black mb-4">Latest Collection</h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="space-y-4">
                  <div className="h-96 bg-gray-200 animate-pulse"></div>
                  <div className="h-6 bg-gray-200 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 animate-pulse w-24"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <a
                  key={product.id}
                  href={`/product/${product.slug}`}
                  className="group"
                >
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
                  </div>
                  <h3 className="text-xl font-medium text-charcoal mb-2 group-hover:text-gold transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-lg text-gold font-medium">KSH {product.price.toLocaleString()}</p>
                </a>
              ))}
            </div>
          )}

          <div className="text-center mt-12">
            <a
              href="/shop"
              className="inline-block bg-gold text-royal-navy px-12 py-4 text-lg font-medium shadow-md shadow-gold/40 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 transform hover:scale-105"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-royal-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl md:text-6xl text-warm-white mb-4">Why Shop With Us</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              {
                icon: Sparkles,
                title: 'Premium Quality',
                description: 'Imported luxury fashion from the world\'s finest designers'
              },
              {
                icon: Shield,
                title: 'Authentic Products',
                description: 'Guaranteed genuine designer pieces, never counterfeit'
              },
              {
                icon: Truck,
                title: 'Fast Delivery',
                description: 'Quick and reliable delivery to your doorstep'
              },
              {
                icon: Award,
                title: 'Expert Service',
                description: 'Personalized styling advice from our fashion experts'
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 bg-gold/10 group-hover:bg-gold transition-colors duration-300 shadow-sm shadow-gold/20 group-hover:shadow-md group-hover:shadow-gold/40">
                  <feature.icon className="w-10 h-10 text-gold group-hover:text-royal-navy transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-playfair text-warm-white mb-3">{feature.title}</h3>
                <p className="text-soft-grey leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-gold to-aqua/40">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl text-royal-navy mb-6">
            Visit Our Boutique
          </h2>
          <p className="text-charcoal text-lg mb-8 leading-relaxed">
            Experience our curated collection in person. Our fashion experts are ready to assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-charcoal">
            <div>
              <p className="font-medium mb-1">Embu Branch</p>
              <p className="text-black/80">FF72+9P3, B6 Embu</p>
            </div>
            <div>
              <p className="font-medium mb-1">Kerugoya Branch</p>
              <p className="text-black/80">Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
