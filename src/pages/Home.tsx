import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Local image imports
import logo from '../images/logo.png'; // Import the logo image
import cloth1 from '../images/cloth1.jpg';
import cloth2 from '../images/cloth2.jpg';
import cloth3 from '../images/cloth3.jpg';
import cloth4 from '../images/cloth4.jpg';
import cloth5 from '../images/cloth5.jpg';
import shoe1 from '../images/shoe1.jpg';
import shoe2 from '../images/shoe2.jpg';
import shoe3 from '../images/shoe3.jpg';

const Home: React.FC = () => {
  const images = [cloth1, cloth2, cloth3, cloth4, cloth5, shoe1, shoe2, shoe3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000); // Image changes every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-16 mt-20 px-4">
      {/* Hero Section */}
      <section className="relative h-[85vh] rounded-3xl overflow-hidden shadow-2xl">
        {/* Background slideshow */}
        <div className="absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-center bg-cover transition-opacity duration-1000 ${
                index === currentImage ? 'opacity-100' : 'opacity-0'
              } bg-breathe`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        {/* Overlay content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 bg-black/30 text-white"
        >
          {/* Replace text with logo */}
          <img src={logo} alt="Logo" className="mb-6 w-48 md:w-64" />
{/* Adjust the width as needed */}
          <p className="text-lg md:text-2xl mb-8 text-white">
            Redefining luxury fashion for the modern era
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
          >
            Explore Collection <ArrowRight className="ml-2" />
          </Link>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['men', 'women', 'watches', 'shoes'].map((category) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-lg overflow-hidden shadow-lg"
            >
              <Link to={`/shop?category=${category}`}>
                <div className="aspect-square">
                  <img
                    src={`https://images.unsplash.com/photo-${
                      category === 'men'
                        ? '1594938298603-c8148c4dae35'
                        : category === 'women'
                        ? '1595777457583-95e059d581b8'
                        : category === 'watches'
                        ? '1524592094714-0f0654e20314'
                        : '1614252369475-531eba835eb1'
                    }?auto=format&fit=crop&q=80`}
                    alt={category}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white text-2xl font-bold capitalize">{category}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Global Styles (Inline CSS for Breathing Animation) */}
      <style>{`
        @keyframes breathe {
          0% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.1); /* Maximum expansion */
          }
          100% {
            transform: scale(1.05);
          }
        }

        /* Apply the breathing effect to the background images */
        .bg-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
