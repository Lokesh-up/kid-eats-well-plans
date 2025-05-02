
import React from 'react';
import { Calendar, ChefHat, Baby } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Baby size={32} className="text-primary" />,
      title: 'Age-Appropriate Nutrition',
      description: 'Meal plans specifically designed for each developmental stage from toddlers to big kids.',
    },
    {
      icon: <Calendar size={32} className="text-primary" />,
      title: 'Weekly Planning',
      description: 'Save time with our pre-planned weekly menus that take the guesswork out of feeding your family.',
    },
    {
      icon: <ChefHat size={32} className="text-primary" />,
      title: 'Simple Recipes',
      description: 'Quick, easy-to-follow recipes with minimal ingredients for busy parents on the go.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Parents Love Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make meal planning for your kids simple, nutritious, and stress-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-kid-blue bg-opacity-20 rounded-xl p-8 text-center transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-white rounded-full shadow-sm">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
