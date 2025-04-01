import React from 'react';
import { Leaf, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
      <nav className="bg-white shadow-md fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
            <img src="https://images.unsplash.com/photo-1742795919941-4668c5beb7d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"  className={'h-16 w-50 text-green-600'} />
              <span className="ml-2 text-xl font-bold text-gray-800">Cropcare</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-600 hover:text-green-600">Home</a>
              <a href="#about" className="text-gray-600 hover:text-green-600">About</a>
              <a href="#services" className="text-gray-600 hover:text-green-600">Services</a>
              <a href="#products" className="text-gray-600 hover:text-green-600">Products</a>
              <a href="#testimonials" className="text-gray-600 hover:text-green-600">Testimonials</a>
              <a href="#contact" className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Contact Us
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-green-600"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-green-600">Home</a>
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-green-600">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-green-600">Services</a>
              <a href="#products" className="block px-3 py-2 text-gray-600 hover:text-green-600">Products</a>
              <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-green-600">Testimonials</a>
              <a href="#contact" className="block px-3 py-2 text-green-600 font-medium">Contact Us</a>
            </div>
          </div>
        )}
      </nav>
  );
}