'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Phone, Clock, Mail } from 'lucide-react';

export default function InteractiveMap() {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState(false);

  // BREEBOND location details
  const locationData = {
    address: "OP No. 36, TPS-52, Block No 29, Surat, Gujarat - 395004, India",
    coordinates: { lat: 21.1702, lng: 72.8311 },
    phone: "+91 XXX XXX XXXX",
    hours: "Mon-Sat: 9:00 AM - 6:00 PM"
  };

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  const handleMapError = () => {
    setMapError(true);
  };

  const openInGoogleMaps = () => {
    const query = encodeURIComponent(locationData.address);
    window.open(`https://maps.google.com/?q=${query}`, '_blank');
  };

  const openDirections = () => {
    const query = encodeURIComponent(locationData.address);
    window.open(`https://maps.google.com/dir/?api=1&destination=${query}`, '_blank');
  };

  return (
    <section className="relative py-16 sm:py-24 md:py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-light text-black mb-4 sm:mb-8 tracking-tight">
            Visit Our Facility
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Schedule an appointment to visit our manufacturing facility and see our quality processes firsthand.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-2xl bg-gray-200">
              {!mapError ? (
                <>
                  {/* Loading State */}
                  {!mapLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                      <div className="text-center">
                        <div className="w-8 h-8 border-2 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-sm text-gray-600">Loading map...</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.0123456789!2d72.8311!3d21.1702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e59411d1563%3A0xfe4558290938b042!2sSurat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1699000000000"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="BREEBOND Location - Surat, Gujarat"
                    onLoad={handleMapLoad}
                    onError={handleMapError}
                  />
                </>
              ) : (
                /* Fallback when map fails to load */
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="text-center p-8">
                    <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-700 mb-2">Map Unavailable</h3>
                    <p className="text-gray-600 mb-6">Unable to load the interactive map</p>
                    <button
                      onClick={openInGoogleMaps}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-900 transition-colors rounded-lg"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in Google Maps
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Address Card */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Our Address</h3>
                  <p className="text-gray-600 leading-relaxed">
                    OP No. 36, TPS-52, Block No 29<br />
                    Surat, Gujarat - 395004<br />
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black rounded-lg flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Contact Info</h3>
                  <p className="text-gray-600 mb-2">
                    Email: breebondllp@gmail.com
                  </p>
                  <p className="text-gray-600">
                    Phone: Available on request
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black rounded-lg flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">Business Hours</h3>
                  <p className="text-gray-600">
                    Monday - Saturday<br />
                    9:00 AM - 6:00 PM<br />
                    <span className="text-sm text-gray-500">Sunday: Closed</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={openDirections}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-black text-white hover:bg-gray-900 transition-colors rounded-lg font-medium"
              >
                <Navigation className="w-5 h-5" />
                Get Directions
              </button>
              
              <button
                onClick={openInGoogleMaps}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 border-2 border-black text-black hover:bg-black hover:text-white transition-colors rounded-lg font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                View in Google Maps
              </button>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-light text-black mb-4">Plan Your Visit</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We welcome visitors to our manufacturing facility. Please contact us in advance to schedule 
              an appointment and ensure our team is available to provide you with a comprehensive tour 
              of our operations and quality control processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:breebondllp@gmail.com?subject=Facility Visit Request"
                className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white hover:bg-gray-900 transition-colors rounded-lg font-medium"
              >
                <Mail className="w-4 h-4" />
                Schedule a Visit
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors rounded-lg font-medium"
              >
                Contact Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
