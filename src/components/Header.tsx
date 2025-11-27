import { ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../images/logo.png';
import { useCart } from '../lib/cart';
import { navigate } from '../lib/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { totalQuantity } = useCart();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-royal-navy/80 backdrop-blur-lg border-b border-warm-white/60 shadow-md shadow-charcoal/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 -ml-2 sm:-ml-4">
            <img src={logo} alt="Leeds Collection logo" className="w-20 h-20 object-contain" />
            <div>
              <h1 className="text-2xl font-playfair text-white">Leeds Collection</h1>
              <p className="text-gold text-xs tracking-widest">EMBU</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-4 text-sm">
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-3 py-1 rounded-md border border-gold/40 text-warm-white hover:bg-gold hover:text-royal-navy transition-colors duration-300"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => navigate('/shop')}
              className="px-3 py-1 rounded-md border border-gold/40 text-warm-white hover:bg-gold hover:text-royal-navy transition-colors duration-300"
            >
              Shop
            </button>
            <button
              type="button"
              onClick={() => navigate('/about')}
              className="px-3 py-1 rounded-md border border-gold/40 text-warm-white hover:bg-gold hover:text-royal-navy transition-colors duration-300"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => navigate('/contact')}
              className="px-3 py-1 rounded-md border border-gold/40 text-warm-white hover:bg-gold hover:text-royal-navy transition-colors duration-300"
            >
              Contact
            </button>
            <button
              type="button"
              onClick={() => navigate('/cart')}
              className="ml-2 inline-flex items-center gap-2 px-3 py-1 rounded-md border border-gold bg-gold/10 text-warm-white hover:bg-gold hover:text-royal-navy transition-colors duration-300"
            >
              <ShoppingBag size={16} />
              <span className="text-xs uppercase tracking-wide">Cart</span>
              {totalQuantity > 0 && (
                <span className="ml-1 inline-flex items-center justify-center min-w-[1.5rem] px-1 py-0.5 rounded-full bg-gold text-royal-navy text-[10px] font-semibold">
                  {totalQuantity}
                </span>
              )}
            </button>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-royal-navy border-t border-gold/20">
          <nav className="px-4 py-4 space-y-4">
            <button
              type="button"
              onClick={() => {
                navigate('/');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-warm-white hover:text-gold transition-colors duration-300"
            >
              Home
            </button>
            <button
              type="button"
              onClick={() => {
                navigate('/shop');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-warm-white hover:text-gold transition-colors duration-300"
            >
              Shop
            </button>
            <button
              type="button"
              onClick={() => {
                navigate('/about');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-warm-white hover:text-gold transition-colors duration-300"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => {
                navigate('/contact');
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left text-warm-white hover:text-gold transition-colors duration-300"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
