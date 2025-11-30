'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function ClipPathFooter() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)']
  );

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <motion.footer
        style={{ clipPath }}
        className="sticky bottom-0 h-screen bg-black text-white flex items-center justify-center overflow-hidden"
      >
        {/* Tile Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(45deg, #ffffff 25%, transparent 25%),
              linear-gradient(-45deg, #ffffff 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, #ffffff 75%),
              linear-gradient(-45deg, transparent 75%, #ffffff 75%)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
          }} />
        </div>

        <div className="relative max-w-[1600px] mx-auto px-8 w-full">
          <div className="text-center mb-16">
            <h2 className="text-8xl font-bold mb-6 tracking-tight">BREEBOND</h2>
            <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Your trusted partner in adhesive solutions for tiles.
              Quality that bonds beyond expectation.
            </p>

            <div className="flex flex-wrap justify-center gap-12 mb-16 text-left">
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Address</h3>
                <p className="text-gray-300">OP No. 36, TPS-52, Block No 29</p>
                <p className="text-gray-300">Surat, Gujarat - 395004</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Website</h3>
                <a href="https://www.breebond.in" className="text-gray-300 hover:text-white transition-colors">
                  www.breebond.in
                </a>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Standards</h3>
                <p className="text-gray-300">EN12004 | IS15477-2019</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 bg-white text-black text-sm uppercase tracking-wider font-medium"
                >
                  View Products
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-4 border-2 border-white text-white text-sm uppercase tracking-wider font-medium hover:bg-white/10 transition-colors"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="border-t border-gray-800 pt-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              {/* Company Info */}
              <div>
                <h3 className="text-xl font-bold text-white mb-4 tracking-tight">BREEBOND</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  Premium tile adhesive solutions for residential, commercial, and industrial applications.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-medium">Quick Links</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/" className="text-gray-400 hover:text-white transition-colors text-sm">Home</a>
                  </li>
                  <li>
                    <a href="/company" className="text-gray-400 hover:text-white transition-colors text-sm">Company</a>
                  </li>
                  <li>
                    <a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
                  </li>
                </ul>
              </div>

              {/* Products */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-medium">Products</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/products/type-3-101" className="text-gray-400 hover:text-white transition-colors text-sm">TYPE-3 101</a>
                  </li>
                  <li>
                    <a href="/products/type-4-s1" className="text-gray-400 hover:text-white transition-colors text-sm">TYPE-4 S1</a>
                  </li>
                  <li>
                    <a href="/products/type-4-s1-plus" className="text-gray-400 hover:text-white transition-colors text-sm">TYPE-4 S1-Plus</a>
                  </li>
                  <li>
                    <a href="/products/type-5-s2-flex" className="text-gray-400 hover:text-white transition-colors text-sm">TYPE-5 S2-Flex</a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-medium">Legal</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/terms#privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-500 text-sm">
                  © {new Date().getFullYear()} BREEBOND. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                  <a href="mailto:info@breebond.in" className="text-gray-500 hover:text-white text-sm transition-colors">
                    info@breebond.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
