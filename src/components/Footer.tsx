import Link from 'next/link';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-xl font-medium text-gray-800 tracking-wide">
              DesignSolutions
            </h3>
            <p className="font-sans text-sm text-gray-600 mt-1">
              Creating beautiful spaces, one room at a time
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <Link
              href="https://instagram.com/designsolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <Instagram className="h-5 w-5" />
              <span className="font-sans text-sm font-light">@designsolutions</span>
            </Link>
            
            <Link
              href="mailto:hello@designsolutions.com"
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              <Mail className="h-5 w-5" />
              <span className="font-sans text-sm font-light">hello@designsolutions.com</span>
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-100 text-center">
          <p className="font-sans text-sm text-gray-600">
            © {new Date().getFullYear()} DesignSolutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 