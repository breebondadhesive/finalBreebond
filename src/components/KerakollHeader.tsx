// components/KerakollHeader.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import ProductsMenu from './ProductsMenu';
import MobileDrawer from './MobileDrawer';
import { products } from '@/data/products';
import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function KerakollHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [textColor, setTextColor] = useState('white');
  const [isProductsMenuOpen, setIsProductsMenuOpen] = useState(false);
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [isMobileDrawerOpen, setIsMobileDrawerOpen] = useState(false);
  
  const { scrollY } = useScroll();
  

  // Header background opacity
  const headerBgOpacity = useTransform(scrollY, [0, 100], [0, 1]);

  const mainRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // A slight delay to ensure the main element is mounted
    setTimeout(() => {
      mainRef.current = document.querySelector('main');
    }, 100);

    const handleScroll = () => {
      // Check if scrolled past threshold
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
      
      if (!mainRef.current) return;

      // Detect section background and change text color
      const sections = mainRef.current.querySelectorAll('section');
      let currentTextColor = 'white';
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const headerHeight = 80;
        
        // Check if section is overlapping with header
        if (rect.top <= headerHeight && rect.bottom > headerHeight) {
          const bgColor = window.getComputedStyle(section).backgroundColor;
          
          // Check for background-image gradient
          const bgImage = window.getComputedStyle(section).backgroundImage;
          if (bgImage.includes('gradient')) {
            if (bgImage.includes('blue-950') || bgImage.includes('gray-900') || bgImage.includes('black')) {
              currentTextColor = 'white';
              return;
            }
          }

          const rgb = bgColor.match(/\d+/g);
          
          if (rgb) {
            const [r, g, b] = rgb.map(Number);
            // Calculate luminance to determine if background is light or dark
            const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            currentTextColor = luminance > 0.5 ? 'black' : 'white';
          } else {
             // If we can't determine background color (e.g. it's a gradient), we can check for a class
             if (section.classList.contains('bg-white') || section.classList.contains('bg-gray-50')) {
                currentTextColor = 'black';
             } else {
                currentTextColor = 'white';
             }
          }
        }
      });
      
      setTextColor(currentTextColor);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Fully Transparent Fixed Header */}
      <motion.header
        style={{ 
          backgroundColor: 'transparent',
        }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      >
        <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-8 h-14 sm:h-16 md:h-20 flex items-center justify-between">
          {/* Logo Container - Only visible after scroll */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isScrolled ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex items-center"
          >
            <a href="#home" className="flex items-center">
              <Image 
                src="/images/logos/BREEBOND LOGO.svg" 
                alt="BREEBOND Logo" 
                width={150} 
                height={40}
                priority
                className="h-8 sm:h-10 w-auto transition-all duration-300"
                style={{ filter: textColor === 'white' ? 'brightness(0) invert(1)' : 'none' }}
              />
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileDrawerOpen(true)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            style={{ color: textColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>

          {/* Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8">
            {['Products', 'Company', 'Contact'].map((item) => (
              item === 'Products' ? (
                <div 
                  key={item}
                  className="relative"
                  onMouseEnter={() => setShowProductsDropdown(true)}
                  onMouseLeave={() => setShowProductsDropdown(false)}
                >
                  <motion.button
                    onClick={() => setIsProductsMenuOpen(true)}
                    className="relative text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-medium transition-colors duration-300 group"
                    style={{ color: textColor }}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10">{item}</span>
                    <motion.span
                      className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                      style={{ backgroundColor: textColor }}
                    />
                  </motion.button>
                  
                  {/* Hover Dropdown Menu */}
                  {showProductsDropdown && (
                    <div className="absolute top-full left-0 mt-4 w-64 bg-white shadow-xl border border-gray-200 z-50 rounded-lg overflow-hidden">
                      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                        <p className="text-xs uppercase tracking-wider text-gray-500 font-medium">Quick Access</p>
                      </div>
                      {products.map((product) => (
                        <Link 
                          key={product.id}
                          href={`/products/${product.slug}`}
                          className="block px-6 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
                          onClick={() => setShowProductsDropdown(false)}
                        >
                          <p className="text-xs uppercase tracking-wider text-gray-500 mb-1">
                            {product.subtitle}
                          </p>
                          <p className="text-sm font-medium text-black">
                            {product.name}
                          </p>
                        </Link>
                      ))}
                      <button 
                        onClick={() => {
                          setShowProductsDropdown(false);
                          setIsProductsMenuOpen(true);
                        }}
                        className="w-full px-6 py-4 bg-black text-white text-center text-sm uppercase tracking-wider font-medium hover:bg-gray-900 transition-colors"
                      >
                        View All Products
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <motion.a
                  key={item}
                  href={item === 'Company' ? '/company' : item === 'Contact' ? '/contact' : `#${item.toLowerCase()}`}
                  className="relative text-[10px] sm:text-xs md:text-sm uppercase tracking-wider font-medium transition-colors duration-300 group"
                  style={{ color: textColor }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10">{item}</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: textColor }}
                  />
                </motion.a>
              )
            ))}
          </nav>

          {/* CTA Button - Hidden on small screens */}
          <motion.a
            href="tel:7436062000"
            className="hidden lg:block px-3 md:px-4 lg:px-6 py-1.5 md:py-2 text-[10px] md:text-xs uppercase tracking-wider font-medium border transition-all duration-300"
            style={{ 
              color: textColor,
              borderColor: textColor
            }}
            whileHover={{ scale: 1.05, backgroundColor: textColor === 'white' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            Get Quote
          </motion.a>
        </div>
      </motion.header>


      {/* Products Menu */}
      <ProductsMenu 
        isOpen={isProductsMenuOpen} 
        onClose={() => setIsProductsMenuOpen(false)} 
      />

      {/* Mobile Drawer */}
      <MobileDrawer 
        isOpen={isMobileDrawerOpen} 
        onClose={() => setIsMobileDrawerOpen(false)} 
      />
    </>
  );
}
