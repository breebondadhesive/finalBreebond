'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, FileText } from 'lucide-react';

export default function TermsPage() {
  return (
    <main className="relative bg-white">
      {/* Back Button */}
      <div className="fixed top-8 left-8 z-50">
        <Link href="/">
          <motion.button
            className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm text-black border border-gray-200 hover:bg-gray-100 transition-all duration-300 rounded-full shadow-lg"
            whileHover={{ scale: 1.05, x: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back</span>
          </motion.button>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[40vh] bg-gradient-to-br from-gray-900 via-blue-950 to-black flex items-center justify-center overflow-hidden">
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

        <div className="relative max-w-[1400px] mx-auto px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FileText className="w-16 h-16 text-blue-300 mx-auto mb-6" />
            <h1 className="text-7xl font-light text-white mb-6 leading-none tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-lg text-gray-300">Last Updated: October 2025</p>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="relative py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            {/* Introduction */}
            <div className="mb-12">
              <h2 className="text-4xl font-light text-black mb-6 tracking-tight">Introduction</h2>
              <p className="text-gray-700 leading-relaxed">
                Welcome to BREEBOND. These terms and conditions outline the rules and regulations for the use of BREEBOND's products and services. By purchasing or using our products, you agree to accept these terms and conditions in full.
              </p>
            </div>

            {/* Product Information */}
            <div className="mb-12">
              <h2 className="text-4xl font-light text-black mb-6 tracking-tight">1. Product Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>1.1</strong> All product specifications, including but not limited to technical data, certifications, and application guidelines, are provided for informational purposes and represent typical values under controlled laboratory conditions.
                </p>
                <p>
                  <strong>1.2</strong> BREEBOND reserves the right to modify product formulations and specifications without prior notice to ensure continuous improvement and compliance with evolving standards.
                </p>
                <p>
                  <strong>1.3</strong> Product packaging may vary from images displayed on our website or promotional materials.
                </p>
              </div>
            </div>

            {/* Usage & Application */}
            <div className="mb-12">
              <h2 className="text-4xl font-light text-black mb-6 tracking-tight">2. Usage & Application</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>2.1</strong> Products must be used in accordance with technical data sheets and application guidelines provided by BREEBOND.
                </p>
                <p>
                  <strong>2.2</strong> Users are responsible for determining the suitability of products for their intended applications.
                </p>
                <p>
                  <strong>2.3</strong> BREEBOND recommends professional installation for all tile adhesive applications to ensure optimal performance.
                </p>
                <p>
                  <strong>2.4</strong> Surface preparation, environmental conditions, and application techniques significantly impact product performance and are the responsibility of the user.
                </p>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="mb-12">
              <h2 className="text-4xl font-light text-black mb-6 tracking-tight">3. Quality Assurance</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>3.1</strong> All BREEBOND products comply with EN12004 and IS15477-2019 standards at the time of manufacture.
                </p>
                <p>
                  <strong>3.2</strong> Products are warranted to be free from manufacturing defects for a period of 6 months from the date of manufacture when stored in original, unopened packaging under recommended conditions.
                </p>
                <p>
                  <strong>3.3</strong> Storage conditions: Cool, dry place away from direct sunlight, temperature range 5°C to 35°C.
                </p>
              </div>
            </div>

            {/* Warranty & Liability */}
            <div className="mb-12">
              <h2 className="text-4xl font-light text-black mb-6 tracking-tight">4. Warranty & Liability</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>4.1</strong> BREEBOND warrants that products will meet published specifications when used in accordance with technical guidelines.
                </p>
                <p>
                  <strong>4.2</strong> Our liability is limited to replacement of defective products or refund of purchase price, at our sole discretion.
                </p>
                <p>
                  <strong>4.3</strong> BREEBOND shall not be liable for:
                </p>
                <ul className="list-disc pl-8 space-y-2">
                  <li>Improper storage or handling of products</li>
                  <li>Incorrect application or installation</li>
                  <li>Use of products beyond their shelf life</li>
                  <li>Failure to follow technical guidelines and recommendations</li>
                  <li>Consequential or indirect damages</li>
                  <li>Labor costs or other installation-related expenses</li>
                </ul>
              </div>
            </div>

            {/* Returns & Complaints */}
            <div className="mb-12">
              <h2 className="text-4xl font-light text-black mb-6 tracking-tight">5. Returns & Complaints</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>5.1</strong> Product complaints must be reported within 7 days of delivery with supporting documentation including batch numbers, purchase receipts, and photographic evidence.
                </p>
                <p>
                  <strong>5.2</strong> Returns will only be accepted for unopened products in original packaging within 30 days of purchase, subject to a restocking fee.
                </p>
                <p>
                  <strong>5.3</strong> Custom orders and special formulations are non-returnable.
                </p>
              </div>
            </div>

            {/* Technical Support */}
            <div className="mb-12">
              <h2 className="text-4xl font-light text-black mb-6 tracking-tight">6. Technical Support</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>6.1</strong> BREEBOND provides technical support and guidance for product selection and application.
                </p>
                <p>
                  <strong>6.2</strong> Technical recommendations are provided in good faith but do not constitute a guarantee of performance for specific applications.
                </p>
                <p>
                  <strong>6.3</strong> Users should conduct their own tests to determine product suitability for critical applications.
                </p>
              </div>
            </div>

            {/* Safety & Handling */}
            <div className="mb-12">
              <h2 className="text-4xl font-light text-black mb-6 tracking-tight">7. Safety & Handling</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>7.1</strong> Users must follow all safety guidelines provided in product safety data sheets (SDS).
                </p>
                <p>
                  <strong>7.2</strong> Appropriate personal protective equipment (PPE) must be worn during product handling and application.
                </p>
                <p>
                  <strong>7.3</strong> Products should be kept out of reach of children and stored safely.
                </p>
                <p>
                  <strong>7.4</strong> Dispose of unused product and packaging in accordance with local environmental regulations.
                </p>
              </div>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-4xl font-light text-black mb-6 tracking-tight">8. Intellectual Property</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>8.1</strong> All product names, trademarks, logos, and trade dress are the property of BREEBOND.
                </p>
                <p>
                  <strong>8.2</strong> Technical documentation, formulations, and proprietary information are confidential and protected by intellectual property laws.
                </p>
              </div>
            </div>

            {/* Modification of Terms */}
            <div className="mb-12">
              <h2 className="text-4xl font-light text-black mb-6 tracking-tight">9. Modification of Terms</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>9.1</strong> BREEBOND reserves the right to modify these terms and conditions at any time.
                </p>
                <p>
                  <strong>9.2</strong> Updated terms will be posted on our website with the revision date.
                </p>
                <p>
                  <strong>9.3</strong> Continued use of our products after modifications constitutes acceptance of the revised terms.
                </p>
              </div>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-4xl font-light text-black mb-6 tracking-tight">10. Governing Law</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>10.1</strong> These terms and conditions are governed by and construed in accordance with the laws of India.
                </p>
                <p>
                  <strong>10.2</strong> Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Surat, Gujarat.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-12">
              <h2 className="text-4xl font-light text-black mb-6 tracking-tight">11. Contact Information</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  For questions regarding these terms and conditions, please contact us at:
                </p>
                <div className="bg-gray-50 p-6 mt-4">
                  <p><strong>BREEBOND</strong></p>
                  <p>OP No. 36, TPS-52, Block No 29</p>
                  <p>Surat, Gujarat - 395004</p>
                  <p>Email: info@breebond.in</p>
                  <p>Website: www.breebond.in</p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl font-light text-black mb-8 tracking-tight">
              Questions About Our Terms?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Our team is here to help clarify any questions you may have about our terms and conditions.
            </p>
            
            <Link href="/contact">
              <motion.button
                className="px-12 py-4 bg-blue-900 text-white text-sm uppercase tracking-wider font-medium hover:bg-blue-800 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
