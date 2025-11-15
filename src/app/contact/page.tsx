'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Clock, Send, Instagram, Navigation } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import InteractiveMap from '@/components/InteractiveMap';

export default function ContactPage() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  // Pre-fill form with URL parameters from home page
  useEffect(() => {
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    const message = searchParams.get('message');

    if (name || email || message) {
      setFormData(prev => ({
        ...prev,
        name: name || '',
        email: email || '',
        message: message || ''
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email body
    const emailBody = `Hello BREEBOND Team,

I am reaching out regarding: ${formData.subject}

--- Message Details ---
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Message:
${formData.message}

--- End of Message ---

Best regards,
${formData.name}`;
    
    // Create mailto link
    const mailtoLink = `mailto:breebond.adhesive@gmail.com?subject=${encodeURIComponent('Contact Form: ' + formData.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    setShowSuccess(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setShowSuccess(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
              backgroundImage: 'url(/images/contactus.png)',
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
            <p className="text-xs sm:text-sm uppercase tracking-widest text-gray-400 mb-4 sm:mb-6">Get in Touch</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white mb-6 sm:mb-8 leading-none tracking-tight">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
              Have questions about our products? Need technical support? We're here to help.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-20">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-black mb-8 sm:mb-12 tracking-tight">
                Let's Connect
              </h2>

              <div className="space-y-8">
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-6 p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">Our Location</h3>
                    <p className="text-gray-600 leading-relaxed">
                      OP No. 36, TPS-52, Block No 29<br />
                      Surat, Gujarat - 395004<br />
                      India
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-6 p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">Email</h3>
                    <a href="mailto:breebondllp@gmail.com" className="text-gray-600 hover:text-black transition-colors block">
                      breebond.adhesive@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-6 p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </motion.div>

                <div className="pt-8">
                  <h3 className="text-xl font-medium text-black mb-4">Website</h3>
                  <a href="https://www.breebond.org" className="text-blue-900 hover:underline text-lg">
                    www.breebond.org
                  </a>
                </div>

                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-6 p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-black mb-2">Instagram</h3>
                    <a 
                      href="https://www.instagram.com/breebond_llp?igsh=MWZ2eXU3dXBvdGs4bQ==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-black transition-colors"
                    >
                      @breebond_llp
                    </a>
                  </div>
                </motion.div>

                <div className="pt-4">
                  <h3 className="text-xl font-medium text-black mb-4">Certifications</h3>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-6 py-3 bg-gray-100 text-sm font-medium text-gray-700">
                      EN12004
                    </span>
                    <span className="px-6 py-3 bg-gray-100 text-sm font-medium text-gray-700">
                      IS15477-2019
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-50 p-12">
                <h2 className="text-4xl font-light text-black mb-8 tracking-tight">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-black focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-black focus:outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-black focus:outline-none transition-colors"
                      placeholder="+91 XXX XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-black focus:outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white border border-gray-300 focus:border-black focus:outline-none transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 bg-black text-white text-sm uppercase tracking-wider font-medium flex items-center justify-center gap-3 hover:bg-gray-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: showSuccess ? 1 : 1.02 }}
                    whileTap={{ scale: showSuccess ? 1 : 0.98 }}
                    disabled={showSuccess}
                  >
                    <Send className="w-5 h-5" />
                    {showSuccess ? 'Opening Email Client...' : 'Send Message'}
                  </motion.button>

                  {/* Success Message */}
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-4 bg-green-50 border border-green-200 rounded-lg text-center"
                    >
                      <p className="text-sm text-green-800 font-medium">
                        ✓ Email client opened! Please send the email to complete your message.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <InteractiveMap />
    </main>
  );
}
