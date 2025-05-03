
import React from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-kid-purple/50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="text-primary">Healthy Kids,</span> <br /> Happy Parents
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Nutritious and delicious meal plans for busy families. Take the stress out of feeding your kids well.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/meal-plans">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Meal Plans
                </Button>
              </Link>
              <Link to="/recipes">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Explore Recipes
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
              alt="Healthy meal for kids" 
              className="rounded-2xl shadow-lg max-w-full w-full md:max-w-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
