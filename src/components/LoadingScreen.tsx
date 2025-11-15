'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [resourcesLoaded, setResourcesLoaded] = useState(false);

  useEffect(() => {
    // Check if resources are already cached
    const cachedTimestamp = sessionStorage.getItem('breebond_resources_loaded');
    const now = Date.now();
    const cacheValid = cachedTimestamp && (now - parseInt(cachedTimestamp)) < 3600000; // 1 hour

    if (cacheValid) {
      // Skip loading screen if recently visited
      setResourcesLoaded(true);
      setIsLoading(false);
      return;
    }

    // Preload critical resources
    const preloadResources = async () => {
      try {
        // Wait for all critical images to load
        const imagePromises = [
          // Preload logo
          new Promise((resolve) => {
            const img = new window.Image();
            img.src = '/images/logos/BREEBOND LOGO.svg';
            img.onload = resolve;
            img.onerror = resolve;
          }),
        ];

        await Promise.all(imagePromises);
        
        // Mark resources as loaded
        sessionStorage.setItem('breebond_resources_loaded', now.toString());
        setResourcesLoaded(true);
        
        // Wait minimum display time for UX
        setTimeout(() => {
          setIsLoading(false);
        }, 1500);
      } catch (error) {
        console.error('Resource preload error:', error);
        setResourcesLoaded(true);
        setIsLoading(false);
      }
    };

    preloadResources();
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600 rounded-full blur-[120px]"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.5, 0.3, 0.5],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>

          {/* Logo and Loading Content */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center relative z-10"
          >
            {/* Logo */}
            <motion.div
              className="mb-8"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/images/logos/BREEBOND LOGO.svg"
                alt="BREEBOND"
                width={280}
                height={80}
                priority
                className="mx-auto"
                style={{ filter: 'brightness(0) invert(1)', height: 'auto' }}
              />
            </motion.div>

            {/* Loading Text */}
            <motion.p
              className="text-sm uppercase tracking-widest text-gray-400"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {resourcesLoaded ? 'Ready' : 'Loading Premium Adhesives...'}
            </motion.p>

            {/* Loading Bar */}
            <div className="mt-6 w-64 h-1 bg-gray-800 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-white"
                initial={{ width: '0%' }}
                animate={{ width: resourcesLoaded ? '100%' : '70%' }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
