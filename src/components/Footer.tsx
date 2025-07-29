import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-medium mb-4">
              Design Solutions
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Creating beautiful, functional spaces that inspire and delight.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Ready to transform your space?</p>
              <p>Let&apos;s discuss your vision.</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/designsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </Link>
              <Link
                href="mailto:hello@designsolutions.com"
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 Design Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 