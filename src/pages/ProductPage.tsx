import { useEffect, useState } from 'react';
import { dummyProducts, type Product } from '../lib/supabase';
import { ShoppingBag, Heart, Share2 } from 'lucide-react';
import { useCart } from '../lib/cart';

export default function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState<string>('');
  const { addToCart } = useCart();

  useEffect(() => {
    loadProduct();
  }, []);

  async function loadProduct() {
    const slug = window.location.pathname.split('/').pop();
    const data = dummyProducts.find((p) => p.slug === slug) || null;

    if (data) {
      setProduct(data);
      setMainImage(data.images[0] || '');
      if (data.sizes.length > 0) {
        setSelectedSize(data.sizes[0]);
      }
    }
    setLoading(false);
  }

  function handleWhatsAppOrder() {
    if (!product) return;
    const message = `Hi, I'm interested in ordering:\n\nProduct: ${product.name}\nPrice: KSH ${product.price.toLocaleString()}\nSize: ${selectedSize}\n\nPlease confirm availability.`;
    window.open(`https://wa.me/254710208435?text=${encodeURIComponent(message)}`, '_blank');
  }

  function handleAddToCart() {
    if (!product) return;
    addToCart(product, { size: selectedSize || undefined });
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-warm-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-12 h-12 border-4 border-gold border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-charcoal">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-warm-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-playfair text-3xl text-charcoal mb-4">Product Not Found</h2>
          <a href="/shop" className="text-gold hover:underline">
            Return to Shop
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div className="space-y-4">
            <div className="relative aspect-[3/4] bg-soft-grey/60 overflow-hidden shadow-lg shadow-charcoal/10">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.is_new_arrival && (
                <div className="absolute top-6 left-6 bg-gold text-royal-navy px-6 py-2 text-sm tracking-widest shadow-sm shadow-gold/40">
                  NEW ARRIVAL
                </div>
              )}
            </div>

            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(image)}
                    className={`aspect-square bg-soft-grey/60 overflow-hidden border-2 transition-all duration-300 ${
                      mainImage === image ? 'border-gold' : 'border-transparent hover:border-soft-grey'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl text-charcoal mb-4 leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <p className="text-3xl text-gold font-medium">
                  KSH {product.price.toLocaleString()}
                </p>
                <span className={`px-4 py-1 text-sm ${
                  product.stock_status === 'in_stock'
                    ? 'bg-green-100 text-green-800'
                    : product.stock_status === 'limited'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {product.stock_status === 'in_stock'
                    ? 'In Stock'
                    : product.stock_status === 'limited'
                    ? 'Limited Stock'
                    : 'Out of Stock'}
                </span>
              </div>
            </div>

            <div className="border-t border-b border-soft-grey py-6 space-y-6">
              <div>
                <h3 className="text-sm font-medium text-charcoal mb-3 tracking-wider">DESCRIPTION</h3>
                <p className="text-charcoal/80 leading-relaxed">{product.description}</p>
              </div>

              {product.sizes.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-charcoal mb-3 tracking-wider">SELECT SIZE</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 border transition-all duration-300 ${
                          selectedSize === size
                            ? 'bg-royal-navy text-warm-white border-royal-navy'
                            : 'bg-soft-grey/60 text-charcoal border-soft-grey hover:border-royal-navy'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {product.colors.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-charcoal mb-3 tracking-wider">AVAILABLE COLORS</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <span
                        key={color}
                        className="px-4 py-2 bg-soft-grey/60 text-charcoal text-sm"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock_status === 'out_of_stock'}
                  className="w-full bg-royal-navy text-warm-white py-4 text-sm font-medium rounded-md shadow-md shadow-royal-navy/40 hover:bg-royal-navy/90 hover:shadow-lg hover:shadow-royal-navy/60 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <ShoppingBag size={18} />
                  <span>Add to Cart</span>
                </button>
                <button
                  onClick={handleWhatsAppOrder}
                  disabled={product.stock_status === 'out_of_stock'}
                  className="w-full bg-gold text-royal-navy py-4 text-sm font-medium rounded-md shadow-md shadow-gold/40 hover:bg-gold/90 hover:text-royal-navy hover:shadow-lg hover:shadow-gold/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  <ShoppingBag size={18} />
                  <span>Order via WhatsApp</span>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button className="border border-soft-grey/60 text-charcoal py-3 hover:bg-soft-grey/60 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Heart size={18} />
                  <span>Add to Wishlist</span>
                </button>
                <button className="border border-soft-grey/60 text-charcoal py-3 hover:bg-soft-grey/60 transition-all duration-300 flex items-center justify-center space-x-2">
                  <Share2 size={18} />
                  <span>Share</span>
                </button>
              </div>
            </div>

            <div className="bg-soft-grey/60 p-6 space-y-4 text-sm text-charcoal">
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gold mt-2"></div>
                <p>Imported luxury fashion with premium quality materials</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gold mt-2"></div>
                <p>Expert styling advice available from our fashion consultants</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-1.5 h-1.5 bg-gold mt-2"></div>
                <p>Visit our boutique in Embu or Kerugoya for in-person experience</p>
              </div>
            </div>

            <div className="border-t border-soft-grey pt-6">
              <h3 className="text-sm font-medium text-charcoal mb-4 tracking-wider">CONTACT US</h3>
              <div className="space-y-2 text-sm text-charcoal/80">
                <p>Phone: +254 710 208435 / 0701 419 720</p>
                <p>Email: info@leeds.co.ke</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
