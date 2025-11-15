'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';

export default function ProductsPage() {
  return (
    <main className="relative bg-white overflow-x-hidden">
      {/* Back Button */}
      <div className="fixed top-3 sm:top-6 md:top-8 left-3 sm:left-6 md:left-8 z-50">
        <Link href="/">
          <motion.button
            className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 bg-white/90 backdrop-blur-sm text-black border border-gray-200 hover:bg-gray-100 transition-all duration-300 rounded-full shadow-lg"
            whileHover={{ scale: 1.05, x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="text-xs sm:text-sm font-medium">Back</span>
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/allproduct.png)',
              filter: 'brightness(0.7) contrast(1.1)'
            }}
          />
        </div>

        

        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 md:py-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-4 sm:mb-6">Our Complete Range</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 sm:mb-8 leading-none tracking-tight">
              All Products
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
              Explore our complete range of premium tile adhesive solutions designed for every application.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <Link
                  href={`/products/${product.slug}`}
                  className="group block h-full"
                >
                  <div className="border border-gray-200 hover:border-gray-300 transition-all duration-300 h-full flex flex-col">
                    {/* Product Image */}
                    <div className="relative h-64 sm:h-72 md:h-80 bg-white p-4 sm:p-6 md:p-8 flex items-center justify-center overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={400}
                        height={400}
                        loading="lazy"
                        quality={80}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300">
                      <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
                        {product.subtitle}
                      </p>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-3 sm:mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
                        {product.name}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed flex-1">
                        {product.description}
                      </p>

                      {/* Specs */}
                      <div className="flex flex-wrap gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white text-xs sm:text-sm font-medium text-gray-700">
                          {product.weight}
                        </span>
                        <span className="px-3 sm:px-4 py-1 sm:py-2 bg-white text-xs sm:text-sm font-medium text-gray-700">
                          {product.standard.split('|')[0].trim()}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs sm:text-sm text-black font-medium">
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
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-light text-white mb-8 tracking-tight">
              Need Help Choosing?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Our team of experts is ready to help you select the perfect adhesive solution for your project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <motion.button
                  className="px-12 py-4 bg-white text-black text-sm uppercase tracking-wider font-medium"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us
                </motion.button>
              </Link>
              <Link href="/company">
                <motion.button
                  className="px-12 py-4 border-2 border-white text-white text-sm uppercase tracking-wider font-medium hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
