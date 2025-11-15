'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/data/products';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-full sm:w-96 bg-white z-[101] shadow-2xl overflow-hidden flex flex-col"
            style={{ maxWidth: '100vw' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-black">
              <Image 
                src="/images/logos/BREEBOND LOGO.svg" 
                alt="BREEBOND Logo" 
                width={120} 
                height={32}
                className="h-8 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <motion.button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6 text-white" />
              </motion.button>
            </div>

            {/* Navigation Content */}
            <div className="flex-1 overflow-y-auto">
              {/* Main Navigation */}
              <div className="p-6 space-y-2">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link href="/" onClick={onClose}>
                    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors group">
                      <span className="text-lg font-medium text-black uppercase tracking-wider">Home</span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <Link href="/company" onClick={onClose}>
                    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors group">
                      <span className="text-lg font-medium text-black uppercase tracking-wider">Company</span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="/contact" onClick={onClose}>
                    <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition-colors group">
                      <span className="text-lg font-medium text-black uppercase tracking-wider">Contact</span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-black group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              </div>

              {/* Products Section */}
              <div className="border-t border-gray-200 bg-gray-50">
                <div className="p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    <h3 className="text-xs uppercase tracking-wider text-gray-500 font-medium mb-4">
                      Our Products
                    </h3>
                    <div className="space-y-3">
                      {products.map((product, index) => (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.05 }}
                        >
                          <Link href={`/products/${product.slug}`} onClick={onClose}>
                            <div className="p-3 bg-white hover:bg-gray-100 rounded-lg transition-colors border border-gray-200 group">
                              <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                                {product.subtitle}
                              </p>
                              <p className="text-sm font-medium text-black group-hover:text-gray-900">
                                {product.name}
                              </p>
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="p-6 border-t border-gray-200 bg-black">
              <motion.a
                href="tel:9904676745"
                onClick={onClose}
                className="block w-full py-4 bg-white text-black text-center text-sm uppercase tracking-wider font-medium rounded-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Quote
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
