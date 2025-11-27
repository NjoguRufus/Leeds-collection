import { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import { CartProvider } from './lib/cart';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/' || path === '') {
      setCurrentPage('home');
    } else if (path === '/shop') {
      setCurrentPage('shop');
    } else if (path.startsWith('/product/')) {
      setCurrentPage('product');
    } else if (path === '/about') {
      setCurrentPage('about');
    } else if (path === '/contact') {
      setCurrentPage('contact');
    } else if (path === '/cart') {
      setCurrentPage('cart');
    }

    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  function handleNavigation() {
    const path = window.location.pathname;
    if (path === '/' || path === '') {
      setCurrentPage('home');
    } else if (path === '/shop') {
      setCurrentPage('shop');
    } else if (path.startsWith('/product/')) {
      setCurrentPage('product');
    } else if (path === '/about') {
      setCurrentPage('about');
    } else if (path === '/contact') {
      setCurrentPage('contact');
    } else if (path === '/cart') {
      setCurrentPage('cart');
    }
  }

  function renderPage() {
    switch (currentPage) {
      case 'shop':
        return <ShopPage />;
      case 'product':
        return <ProductPage />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'cart':
        return <CartPage />;
      default:
        return <HomePage />;
    }
  }

  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </CartProvider>
  );
}

export default App;
