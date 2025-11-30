'use client';

import KerakollHeader from '@/components/KerakollHeader';
import SimpleFooter from '@/components/SimpleFooter';
import VideoCarousel from '@/components/VideoCarousel';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value
    });
  };

  const handleSendMessage = () => {
    // Redirect to contact page with form data as URL parameters
    const params = new URLSearchParams({
      name: contactForm.name,
      email: contactForm.email,
      message: contactForm.message
    });
    router.push(`/contact?${params.toString()}`);
  };

  return (
    <main className="relative overflow-x-hidden">
      <KerakollHeader />

      {/* Hero Section - Dark Background with Video Carousel */}
      <section id="home" className="relative h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
        {/* Video Background Carousel */}
        <VideoCarousel />

        {/* Hero Content */}
        <div className="relative z-20 max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-4 sm:mb-6">Premium Tile Adhesives</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 sm:mb-8 leading-none tracking-tight">
              BREEBOND
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
              Your trusted partner in adhesive solutions for tiles. Quality that bonds beyond expectation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <motion.a
                href="/products"
                className="px-8 sm:px-12 py-3 sm:py-4 bg-white text-black text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-gray-100 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Products
              </motion.a>
              <motion.a
                href="/company"
                className="px-8 sm:px-12 py-3 sm:py-4 border-2 border-white text-white text-xs sm:text-sm uppercase tracking-wider font-medium hover:bg-white/10 transition-colors text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        </div>

      </section>

      {/* Products Section - White Background */}
      <section id="products" className="relative min-h-screen bg-white py-16 sm:py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-500 mb-3 sm:mb-4">Our Solutions</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8 sm:mb-12 md:mb-16 tracking-tight">
              Premium Adhesive<br />Systems
            </h2>
          </motion.div>

          {/* Featured Products Grid - Only 2 Products */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">
            {[
              {
                name: 'TYPE-3 101',
                subtitle: 'C2TE Standard',
                desc: 'Polymer modified cement-based tile adhesive for standard applications. Ideal for fixing ceramic tiles on walls and floors.',
                image: '/images/gallery/C2TE.png',
                slug: 'type-3-101'
              },
              {
                name: 'TYPE-4 S1-Plus',
                subtitle: 'C2TE-S1-Plus Premium',
                desc: 'Superior bond strength with extended open time. Designed for professional applications requiring maximum performance.',
                image: '/images/gallery/C2TE - S1- Plus.png',
                slug: 'type-4-s1-plus'
              },
            ].map((product, idx) => (
              <motion.a
                key={idx}
                href={`/products/${product.slug}`}
                className="group cursor-pointer block"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-6 h-full">
                  {/* Image Section - 40% */}
                  <div className="md:col-span-2">
                    <div className="relative h-full max-h-[400px] min-h-[250px] sm:min-h-[300px] bg-white p-4 sm:p-6 flex items-center justify-center overflow-hidden border border-gray-200 group-hover:border-gray-300 transition-all duration-500">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={400}
                        loading="lazy"
                        quality={75}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain w-full h-full group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        <div className="text-center text-white p-4 sm:p-6">
                          <p className="text-xs sm:text-sm uppercase tracking-wider mb-1 sm:mb-2">Click to View</p>
                          <p className="text-xl sm:text-2xl font-light">{product.name}</p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Text Content - 60% */}
                  <div className="md:col-span-3 flex flex-col justify-center py-4 sm:py-6">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-2 sm:mb-3">
                      {product.subtitle}
                    </p>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-3 sm:mb-4 tracking-tight">
                      {product.name}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {product.desc}
                    </p>

                    {/* Specs Badges */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      <span className="px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700">
                        20kg
                      </span>
                      <span className="px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700">
                        EN12004
                      </span>
                      <span className="px-4 py-2 bg-gray-100 text-sm font-medium text-gray-700">
                        IS15477-2019
                      </span>
                    </div>

                    {/* Learn More Text */}
                    <div className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-black font-medium border-b-2 border-black pb-1 w-fit group-hover:opacity-60 transition-opacity">
                      <span>Learn More</span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* View All Products Button */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={() => router.push('/products')}
              className="px-8 sm:px-12 py-3 sm:py-4 text-xs sm:text-sm uppercase tracking-wider font-medium border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Products
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* About Section - Dark Background */}
      <section id="company" className="relative min-h-screen bg-gradient-to-br from-blue-950 to-gray-900 py-16 sm:py-24 md:py-32 flex items-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 opacity-30">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.6) contrast(1.2)'
            }}
          >
            <source src="/images/video5.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-300 mb-4 sm:mb-6">About Breebond</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 sm:mb-12 leading-tight tracking-tight">
              Building<br />Better<br />Together
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8">
              BREEBOND is your trusted partner in adhesive solutions for tiles.
              We specialize in creating high-quality, reliable adhesives that ensure
              the perfect bond for your tiles, whether for residential, commercial,
              or industrial applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <motion.a
                href="/company"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black text-xs sm:text-sm uppercase tracking-wider font-medium text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Story
              </motion.a>
              <motion.a
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white text-xs sm:text-sm uppercase tracking-wider font-medium text-center"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section - Light Gray Background */}
      <section className="relative min-h-screen bg-gray-50 py-16 sm:py-24 md:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 sm:mb-16 md:mb-24"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 tracking-tight">
              Why Choose BREEBOND
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600">
              Excellence in every application
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16">
            {[
              {
                title: 'Quality Assurance',
                desc: 'Every batch undergoes rigorous testing to meet international standards',
              },
              {
                title: 'Technical Expertise',
                desc: 'Backed by years of industry experience and continuous innovation',
              },
              {
                title: 'Customer Focus',
                desc: 'Dedicated support and custom solutions for every project',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="group"
              >
                <div className="h-1 w-12 sm:w-16 bg-blue-900 mb-6 sm:mb-8 group-hover:w-24 sm:group-hover:w-32 transition-all duration-500" />
                <h3 className="text-2xl sm:text-3xl font-light text-black mb-3 sm:mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Dark Background */}
      <section id="contact" className="relative min-h-screen bg-black py-16 sm:py-24 md:py-32 flex items-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 md:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 sm:mb-12 leading-tight tracking-tight">
                Let's Build<br />Something<br />Great
              </h2>
              <div className="space-y-4 sm:space-y-6 text-gray-400">
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Location</p>
                  <p className="text-base sm:text-lg">OP No. 36, TPS-52, Block No 29</p>
                  <p className="text-base sm:text-lg">Surat, Gujarat - 395004</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Website</p>
                  <p className="text-base sm:text-lg">www.breebond.in</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Standards</p>
                  <p className="text-base sm:text-lg">EN12004 | IS15477-2019</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <input
                type="text"
                name="name"
                value={contactForm.name}
                onChange={handleContactFormChange}
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white placeholder-gray-600 focus:border-white focus:outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleContactFormChange}
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white placeholder-gray-600 focus:border-white focus:outline-none transition-colors"
              />
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleContactFormChange}
                placeholder="Your Message"
                rows={4}
                className="w-full bg-transparent border-b border-gray-700 py-4 text-white placeholder-gray-600 focus:border-white focus:outline-none transition-colors resize-none"
              />
              <motion.button
                onClick={handleSendMessage}
                className="w-full py-4 bg-white text-black text-sm uppercase tracking-wider font-medium mt-8"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SimpleFooter />
    </main>
  );
}
