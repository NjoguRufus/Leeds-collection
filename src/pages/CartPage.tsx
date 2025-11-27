import { ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../lib/cart';

export default function CartPage() {
  const { items, totalPrice, removeFromCart, clearCart } = useCart();

  function handleCheckout() {
    if (items.length === 0) return;

    const lines = items.map(
      (item, index) =>
        `${index + 1}. ${item.product.name}${item.selectedSize ? ` (Size: ${item.selectedSize})` : ''} - ` +
        `Qty: ${item.quantity} - KSH ${(item.product.price * item.quantity).toLocaleString()}`
    );

    const message = [
      'Hi, I would like to place an order:',
      '',
      ...lines,
      '',
      `Total: KSH ${totalPrice.toLocaleString()}`,
      '',
      'Please confirm availability and payment details.'
    ].join('\n');

    const url = `https://wa.me/254710208435?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  return (
    <div className="min-h-screen bg-warm-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-royal-navy">
              <ShoppingBag size={20} />
            </div>
            <div>
              <h1 className="font-playfair text-3xl md:text-4xl text-charcoal">Your Cart</h1>
              <p className="text-charcoal/70 text-sm mt-1">
                Review your selection and checkout via WhatsApp.
              </p>
            </div>
          </div>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="flex items-center space-x-2 text-sm text-charcoal/70 hover:text-brand-red transition-colors"
            >
              <Trash2 size={16} />
              <span>Clear Cart</span>
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="bg-soft-grey/60 p-8 text-center">
            <p className="text-charcoal mb-4">Your cart is currently empty.</p>
            <a
              href="/shop"
              className="inline-flex items-center space-x-2 bg-royal-navy text-warm-white px-8 py-3 text-sm font-medium rounded-full shadow-md shadow-royal-navy/40 hover:bg-royal-navy/90 hover:shadow-lg hover:shadow-royal-navy/60 transition-all"
            >
              <span>Browse Collection</span>
              <ArrowRight size={16} />
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-8 items-start">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-soft-grey/60 p-4 sm:p-5 shadow-sm shadow-charcoal/10"
                >
                  <div className="w-24 h-28 bg-warm-white overflow-hidden">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-charcoal mb-1">
                      {item.product.name}
                    </h3>
                    <p className="text-sm text-charcoal/70">
                      KSH {item.product.price.toLocaleString()}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-charcoal/70">
                      {item.selectedSize && (
                        <span className="px-3 py-1 rounded-full border border-soft-grey">
                          Size: {item.selectedSize}
                        </span>
                      )}
                      <span className="px-3 py-1 rounded-full border border-soft-grey">
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-charcoal/60 hover:text-brand-red transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>

            <div className="bg-soft-grey/60 p-6 shadow-sm shadow-charcoal/10 space-y-4">
              <h2 className="font-playfair text-xl text-charcoal mb-2">Order Summary</h2>
              <div className="flex items-center justify-between text-sm text-charcoal/80">
                <span>Subtotal</span>
                <span>KSH {totalPrice.toLocaleString()}</span>
              </div>
              <p className="text-xs text-charcoal/60">
                Prices are indicative. Final confirmation will be shared on WhatsApp.
              </p>
              <button
                onClick={handleCheckout}
                className="w-full mt-4 bg-gold text-royal-navy py-3 text-sm font-medium rounded-full shadow-md shadow-gold/40 hover:bg-gold/90 hover:shadow-lg hover:shadow-gold/50 transition-all flex items-center justify-center space-x-2"
              >
                <ShoppingBag size={18} />
                <span>Checkout via WhatsApp</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


