'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Award, Users, Target, TrendingUp } from 'lucide-react';

export default function CompanyPage() {
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
      <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 opacity-30">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{
              filter: 'brightness(0.7) contrast(1.1)'
            }}
          >
            <source src="/images/video4.mp4" type="video/mp4" />
          </video>
        </div>

        

        {/* Animated Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-500 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '5s' }} />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-24 md:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-4 sm:mb-6">About Us</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 sm:mb-8 leading-none tracking-tight">
              Building<br />Better<br />Together
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
              BREEBOND is your trusted partner in adhesive solutions for tiles. We specialize in creating high-quality, reliable adhesives that ensure the perfect bond for your projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-6 sm:mb-8 tracking-tight">
                Our Story
              </h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded with a vision to revolutionize the tile adhesive industry, BREEBOND has been at the forefront of innovation and quality since our inception. Our journey began with a simple mission: to create adhesive solutions that exceed expectations.
                </p>
                <p>
                  Today, we stand as a trusted name in the construction and building materials industry, serving residential, commercial, and industrial projects across the region. Our commitment to excellence and customer satisfaction drives everything we do.
                </p>
                <p>
                  Located in Surat, Gujarat, we leverage cutting-edge technology and rigorous quality control to manufacture adhesives that meet and exceed international standards including EN12004 and IS15477-2019.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-gray-50 to-gray-100 p-12 rounded-lg"
            >
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-black mb-1 sm:mb-2">Quality Certified</h3>
                    <p className="text-sm sm:text-base text-gray-600">EN12004 & IS15477-2019 compliant products</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-black mb-1 sm:mb-2">Expert Team</h3>
                    <p className="text-sm sm:text-base text-gray-600">Experienced professionals dedicated to excellence</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-medium text-black mb-1 sm:mb-2">Continuous Innovation</h3>
                    <p className="text-sm sm:text-base text-gray-600">Investing in R&D for better products</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 sm:p-8 md:p-12 border-l-4 border-black"
            >
              <Target className="w-10 h-10 sm:w-12 sm:h-12 text-black mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-4 sm:mb-6 tracking-tight">Our Mission</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                To provide innovative, high-quality adhesive solutions that empower builders, contractors, and homeowners to create lasting, beautiful spaces. We are committed to excellence, sustainability, and customer satisfaction in every product we manufacture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 sm:p-8 md:p-12 border-l-4 border-black"
            >
              <Award className="w-10 h-10 sm:w-12 sm:h-12 text-black mb-4 sm:mb-6" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-4 sm:mb-6 tracking-tight">Our Vision</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                To be the leading manufacturer of tile adhesives in India, recognized for our unwavering commitment to quality, innovation, and customer service. We aspire to set industry standards and expand our reach while maintaining our core values.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black mb-4 sm:mb-6 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: 'Quality First',
                description: 'We never compromise on quality. Every product undergoes rigorous testing to ensure it meets the highest standards.'
              },
              {
                title: 'Customer Focus',
                description: 'Our customers are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations.'
              },
              {
                title: 'Innovation',
                description: 'We continuously invest in research and development to bring cutting-edge solutions to the market.'
              },
              {
                title: 'Integrity',
                description: 'We conduct our business with honesty, transparency, and ethical practices in all our dealings.'
              },
              {
                title: 'Sustainability',
                description: 'We are committed to environmentally responsible manufacturing and sustainable business practices.'
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from product development to customer service.'
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="p-8 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="w-2 h-16 bg-black mb-6" />
                <h3 className="text-2xl font-medium text-black mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
              Join Us in Building Better
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Whether you're a contractor, builder, or homeowner, we're here to support your projects with premium adhesive solutions.
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
              <Link href="/products/type-2-101">
                <motion.button
                  className="px-12 py-4 border-2 border-white text-white text-sm uppercase tracking-wider font-medium hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View Products
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
