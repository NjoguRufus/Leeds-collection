import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto px-4"
      >
        <motion.h1
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About Leeds Collection
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">Our Story</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Leeds Collection was founded with a vision to redefine luxury fashion for the modern era. 
              Our journey began with a simple idea: to create exceptional fashion pieces that combine 
              timeless elegance with contemporary design.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Today, we're proud to offer a carefully curated selection of high-quality fashion items, 
              from elegant suits and evening gowns to luxury watches and handcrafted shoes.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 20 }}
            animate={{ x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Quality First</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We source only the finest materials and work with skilled artisans to ensure exceptional quality.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Sustainable Fashion</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    We're committed to sustainable practices and responsible fashion production.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center text-white flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Customer Focus</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Your satisfaction is our priority. We strive to provide exceptional service and support.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          className="mt-12 bg-purple-50 dark:bg-gray-800 p-8 rounded-xl"
        >
          <h2 className="text-2xl font-semibold mb-6">Our Commitment</h2>
          <p className="text-gray-600 dark:text-gray-300">
            At Leeds Collection, we're committed to bringing you the finest in fashion. 
            Every piece in our collection is carefully selected to ensure it meets our 
            high standards of quality and style. We believe that luxury should be 
            accessible, and we strive to provide an exceptional shopping experience 
            for all our customers.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;