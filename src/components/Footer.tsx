
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-kid-purple bg-opacity-30 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center mb-4">
              <div className="bg-kid-purple p-2 rounded-full">
                <span className="font-display text-xl font-bold">KidEats</span>
              </div>
              <span className="font-display font-bold text-primary ml-1">Well</span>
            </Link>
            <p className="text-sm text-gray-600 max-w-xs">
              Helping busy parents easily find nutritious and delicious meal ideas for their kids.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/meal-plans" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Meal Plans
                </Link>
              </li>
              <li>
                <Link to="/recipes" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Recipes
                </Link>
              </li>
              <li>
                <Link to="/tips" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Tips
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-sm text-gray-600 mb-4">
              Get weekly meal plan ideas in your inbox
            </p>
            <form className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-6">
          <p className="text-center text-sm text-gray-600">
            &copy; {currentYear} KidEatsWell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
