'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Mail } from 'lucide-react';
import type { Product } from '@/data/products';

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
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

      {/* Hero Section - Dark Background */}
      <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">


        <div className="relative   max-w-[1400px] mx-auto px-8 py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[500px] bg-black  flex items-center justify-center overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="object-contain w-full h-full"
              priority
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white"
          >
            <p className="text-sm uppercase tracking-widest text-gray-400 mb-4">
              {product.subtitle}
            </p>
            <h1 className="text-6xl font-light mb-8 tracking-tight">
              {product.name}
            </h1>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              {product.description}
            </p>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 gap-6 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg"
              >
                <p className="text-xs text-gray-400 mb-1">Standard</p>
                <p className="text-lg font-medium text-white">{product.standard}</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg"
              >
                <p className="text-xs text-gray-400 mb-1">Bed Thickness</p>
                <p className="text-lg font-medium text-white">{product.bedThickness}</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features & Applications Section - White Background */}
      <section className="relative py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-light text-white mb-12 tracking-tight">
                Key Features
              </h2>
              <ul className="space-y-4">
                {product.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span className="text-lg text-white">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Applications */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-5xl font-light text-white mb-12 tracking-tight">
                Applications
              </h2>
              <ul className="space-y-4">
                {product.applications.map((app, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 bg-black rounded-full" />
                    <span className="text-lg text-white">{app}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Specifications - Gray Background */}
      <section className="relative py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-light text-white mb-12 tracking-tight">
              Technical Specifications
            </h2>
            
            <div className="bg-black  divide-y divide-gray-200">
              {product.technicalSpecs.map((spec, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: idx * 0.05 }}
                  className="grid grid-cols-2 hover:bg-green-500 transition-colors duration-200"
                >
                  <div className="px-8 py-6">
                    <p className="font-medium text-white">{spec.label}</p>
                  </div>
                  <div className="px-8 py-6 ">
                    <p className="text-white">{spec.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Black Background */}
      <section className="relative py-24 bg-black">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-6xl font-light text-white mb-8 tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Contact us for more information, technical support, or to request a quote for {product.name}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                className="px-12 py-4 bg-white text-black text-sm uppercase tracking-wider font-medium flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                Request Quote
              </motion.button>
              
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
