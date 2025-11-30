'use client';

import Link from 'next/link';

export default function SimpleFooter() {
  return (
    <footer className="relative bg-black text-white py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/footer.png)',
            filter: 'brightness(0.5)'
          }}
        />
      </div>

      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 md:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 tracking-tight">BREEBOND</h3>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-3 sm:mb-4">
              Premium tile adhesive solutions for residential, commercial, and industrial applications.
            </p>
            <div className="flex gap-3">
              <span className="px-3 py-1 bg-gray-900 text-xs text-gray-300 border border-gray-800">EN12004</span>
              <span className="px-3 py-1 bg-gray-900 text-xs text-gray-300 border border-gray-800">IS15477-2019</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-3 sm:mb-4 font-medium">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="/products" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Products</a>
              </li>
              <li>
                <a href="/company" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Company</a>
              </li>
              <li>
                <a href="/contact" className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-3 sm:mb-4 font-medium">Products</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <a href="/products/type-3-101" className="text-gray-400 hover:text-white transition-colors">TYPE-3 101</a>
              </li>
              <li>
                <a href="/products/type-4-s1" className="text-gray-400 hover:text-white transition-colors">TYPE-4 S1</a>
              </li>
              <li>
                <a href="/products/type-4-s1-plus" className="text-gray-400 hover:text-white transition-colors">TYPE-4 S1-Plus</a>
              </li>
              <li>
                <a href="/products/type-5-s2-flex" className="text-gray-400 hover:text-white transition-colors">TYPE-5 S2-Flex</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs sm:text-sm uppercase tracking-wider text-gray-500 mb-3 sm:mb-4 font-medium">Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-gray-400 text-xs sm:text-sm">
              <p>OP No. 36, TPS-52, Block No 29</p>
              <p>Surat, Gujarat - 395004</p>
              <p className="pt-2">
                <a href="mailto:breebondllp@gmail.com" className="hover:text-white transition-colors">
                  breebondllp@gmail.com
                </a>
              </p>
              <p>
                <a href="https://www.breebond.in" className="hover:text-white transition-colors">
                  www.breebond.in
                </a>
              </p>
              <p className="pt-2">
                <a href="https://www.instagram.com/breebond_llp?igsh=MWZ2eXU3dXBvdGs4bQ==" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  @breebond_llp
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} BREEBOND. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </a>
              <span className="text-gray-800">|</span>
              <a href="/terms#privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
