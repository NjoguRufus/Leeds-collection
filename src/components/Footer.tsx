import { Mail, Phone, MapPin, ShoppingBag } from 'lucide-react';
import logo from '../images/logo.png';

export default function Footer() {
  return (
    <footer className="bg-royal-navy text-warm-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Leeds Collection logo" className="w-10 h-10 object-contain" />
              <div>
                <h3 className="text-xl font-playfair">Leeds Collection</h3>
                <p className="text-gold text-xs tracking-widest">EMBU</p>
              </div>
            </div>
            <p className="text-soft-grey text-sm leading-relaxed">
              Where Fashion Is Our Passion. Imported luxury fashion for Women, Men & Kids.
            </p>
          </div>

          <div>
            <h4 className="font-playfair text-lg mb-4 text-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-soft-grey hover:text-gold transition-colors duration-300">Home</a></li>
              <li><a href="/shop" className="text-soft-grey hover:text-gold transition-colors duration-300">Shop</a></li>
              <li><a href="/about" className="text-soft-grey hover:text-gold transition-colors duration-300">About Us</a></li>
              <li><a href="/contact" className="text-soft-grey hover:text-gold transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg mb-4 text-gold">Contact</h4>
            <ul className="space-y-3 text-soft-grey text-sm">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="mt-1 text-gold" />
                <div>
                  <div>+254 710 208435</div>
                  <div>0701 419 720</div>
                </div>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="mt-1 text-gold" />
                <div>
                  <div>info@leeds.co.ke</div>
                  <div>yvonne@leeds.co.ke</div>
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-playfair text-lg mb-4 text-gold">Our Locations</h4>
            <ul className="space-y-3 text-soft-grey text-sm">
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 text-gold" />
                <span>FF72+9P3, B6 Embu</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="mt-1 text-gold" />
                <span>Kerugoya Branch</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/20 pt-6 pb-2 text-center text-soft-grey text-sm space-y-1">
          <p>&copy; {new Date().getFullYear()} Leeds Collection Embu. All rights reserved.</p>
          <p className="text-[11px] text-soft-grey/80">
            Powered &amp; maintained by{' '}
            <a
              href="https://astraronix.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-gold/60 underline-offset-2 hover:text-gold transition-colors"
            >
              Astraronix Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
