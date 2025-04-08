import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaStore,
  FaInfoCircle,
  FaEnvelope,
  FaSun,
  FaMoon,
  FaShoppingCart,
  FaBars,
} from 'react-icons/fa';
import { useStore } from '../store/useStore';
import logo from '../images/logo.png';

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode, cart } = useStore();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="fixed w-full z-50 px-4 py-4">
      <nav
        className={`${
          darkMode ? 'dark bg-gray-900/90 text-white' : 'bg-white/90'
        } backdrop-blur-lg rounded-2xl shadow-lg mx-auto max-w-7xl`}
      >
        <div className="container mx-auto">
          <div className="flex justify-between items-center h-16 px-6">
            {/* Logo */}
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10 object-contain" />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-4">
              <Link
                to="/shop"
                className="flex items-center space-x-2 px-4 py-2 border border-[#F9A825] rounded-full text-[#F9A825] hover:bg-[#F9A825]/10 transition"
              >
                <FaStore />
                <span>Shop</span>
              </Link>

              <Link
                to="/about"
                className="flex items-center space-x-2 px-4 py-2 border border-[#E42420] rounded-full text-[#E42420] hover:bg-[#E42420]/10 transition"
              >
                <FaInfoCircle />
                <span>About</span>
              </Link>

              <Link
                to="/contact"
                className="flex items-center space-x-2 px-4 py-2 border border-[#00B6F1] rounded-full text-[#00B6F1] hover:bg-[#00B6F1]/10 transition"
              >
                <FaEnvelope />
                <span>Contact</span>
              </Link>

              <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-2 p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {darkMode ? <FaSun color="#F9A825" /> : <FaMoon color="#1B1F47" />}
              </button>

              <Link to="/cart" className="relative flex items-center space-x-1 p-2">
                <FaShoppingCart color="#E42420" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#E42420] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars size={20} />
            </button>
          </div>

          {/* Mobile Nav Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 px-6 border-t border-gray-100 dark:border-gray-800 space-y-4">
              <Link
                to="/shop"
                className="flex items-center space-x-2 p-2 rounded-full border border-[#F9A825] hover:bg-[#F9A825]/10 transition-all"
              >
                <FaStore size={18} color="#F9A825" />
                <span className="text-sm text-[#F9A825]">Shop</span>
              </Link>

              <Link
                to="/about"
                className="flex items-center space-x-2 p-2 rounded-full border border-[#E42420] hover:bg-[#E42420]/10 transition-all"
              >
                <FaInfoCircle size={18} color="#E42420" />
                <span className="text-sm text-[#E42420]">About</span>
              </Link>

              <Link
                to="/contact"
                className="flex items-center space-x-2 p-2 rounded-full border border-[#00B6F1] hover:bg-[#00B6F1]/10 transition-all"
              >
                <FaEnvelope size={18} color="#00B6F1" />
                <span className="text-sm text-[#00B6F1]">Contact</span>
              </Link>

              <button
                onClick={toggleDarkMode}
                className="flex items-center space-x-2 p-2 rounded-full border border-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 w-full"
              >
                {darkMode ? (
                  <FaSun size={18} color="#F9A825" />
                ) : (
                  <FaMoon size={18} color="#1B1F47" />
                )}
                <span className="text-sm">
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>

              <Link
                to="/cart"
                className="relative flex items-center space-x-2 p-2 rounded-full border border-[#E42420] hover:bg-[#E42420]/10 transition-all"
              >
                <FaShoppingCart size={18} color="#E42420" />
                <span className="text-sm text-[#E42420]">Cart</span>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#E42420] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
