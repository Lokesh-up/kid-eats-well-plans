
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-kid-purple p-2 rounded-full">
              <span className="font-display text-xl font-bold">KidEats</span>
            </div>
            <span className="font-display font-bold text-primary">Well</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="font-medium hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/meal-plans" className="font-medium hover:text-primary transition-colors">
              Meal Plans
            </Link>
            <Link to="/recipes" className="font-medium hover:text-primary transition-colors">
              Recipes
            </Link>
            <Link to="/tips" className="font-medium hover:text-primary transition-colors">
              Tips
            </Link>
            <Link to="/about" className="font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Button>Get Started</Button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-2">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="px-3 py-2 rounded-md hover:bg-kid-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/meal-plans" 
                className="px-3 py-2 rounded-md hover:bg-kid-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Meal Plans
              </Link>
              <Link 
                to="/recipes" 
                className="px-3 py-2 rounded-md hover:bg-kid-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Recipes
              </Link>
              <Link 
                to="/tips" 
                className="px-3 py-2 rounded-md hover:bg-kid-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tips
              </Link>
              <Link 
                to="/about" 
                className="px-3 py-2 rounded-md hover:bg-kid-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
