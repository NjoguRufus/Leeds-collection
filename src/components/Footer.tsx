import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 px-4 pb-4">
      <div className="bg-gray-900 text-white rounded-2xl overflow-hidden">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Leeds Collection
              </h3>
              <p className="text-gray-400">
                Redefining luxury fashion for the modern era.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/shop" className="text-gray-400 hover:text-white transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/shop?category=men" className="text-gray-400 hover:text-white transition-colors">
                    Men's Collection
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=women" className="text-gray-400 hover:text-white transition-colors">
                    Women's Collection
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=watches" className="text-gray-400 hover:text-white transition-colors">
                    Watches
                  </Link>
                </li>
                <li>
                  <Link to="/shop?category=shoes" className="text-gray-400 hover:text-white transition-colors">
                    Shoes
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Leeds Collection. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;