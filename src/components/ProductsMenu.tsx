'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import { useEffect } from 'react';

interface ProductsMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductsMenu({ isOpen, onClose }: ProductsMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-white overflow-y-auto overflow-x-hidden pointer-events-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="fixed top-4 sm:top-8 right-4 sm:right-8 z-[110] w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-gray-100 transition-colors rounded-full"
            aria-label="Close menu"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
          </button>

          <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-12 sm:mb-16 text-center"
            >
              <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-3 sm:mb-4">
                Our Products
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-black tracking-tight mb-4 sm:mb-6">
                Complete Range
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-black mx-auto mb-4 sm:mb-6"></div>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
                Explore our comprehensive collection of premium tile adhesive solutions designed for every application and project requirement.
              </p>
            </motion.div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              {products.map((product, idx) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    onClick={onClose}
                    className="group block"
                  >
                    <motion.div
                      className="p-12 h-full border border-gray-200 hover:bg-gray-50 transition-all duration-300"
                      whileHover={{ x: 2 }}
                    >
                      <div className="group-hover:border-l-2 group-hover:border-black group-hover:pl-6 transition-all duration-300">
                        <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                          {product.subtitle}
                        </p>
                        <h3 className="text-5xl font-light text-black mb-6 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                          {product.name}
                        </h3>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-black font-medium">
                          <span>View Details</span>
                          <motion.span
                            className="inline-block"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            →
                          </motion.span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* View All Products Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex justify-center"
            >
              <Link href="/products" onClick={onClose}>
                <motion.button
                  className="px-12 py-4 text-sm uppercase tracking-wider font-medium border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Products
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
