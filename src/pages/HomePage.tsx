
import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import AgeGroupCard from '../components/AgeGroupCard';
import MealCard from '../components/MealCard';
import TipCard from '../components/TipCard';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  // Sample data for age groups
  const ageGroups = [
    {
      ageRange: '1–3',
      description: 'Specially designed for toddlers developing taste preferences and nutritional needs.',
      bgColor: 'bg-kid-yellow',
      icon: '/placeholder.svg', // We'll use placeholder for now
    },
    {
      ageRange: '4–6',
      description: 'Balanced meals for preschoolers and kindergarteners with growing appetites.',
      bgColor: 'bg-kid-green',
      icon: '/placeholder.svg',
    },
    {
      ageRange: '7–10',
      description: 'Hearty, nutritious options for active school-aged kids with bigger energy needs.',
      bgColor: 'bg-kid-peach',
      icon: '/placeholder.svg',
    },
  ];

  // Sample data for featured meals
  const featuredMeals = [
    {
      id: '1',
      title: 'Rainbow Veggie Pasta',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      mealType: 'Lunch',
      prepTime: '15 min',
      tags: ['Quick Prep', 'Vegetarian'],
    },
    {
      id: '2',
      title: 'Berry Yogurt Parfait',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      mealType: 'Breakfast',
      prepTime: '5 min',
      tags: ['No-Cook', 'High Protein'],
    },
    {
      id: '3',
      title: 'Mini Turkey Sliders',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
      mealType: 'Dinner',
      prepTime: '20 min',
      tags: ['Kid-Favorite', 'Protein-Rich'],
    },
  ];

  // Sample data for tips
  const tips = [
    {
      id: '1',
      title: 'Dealing with Picky Eaters',
      excerpt: 'Practical strategies to help introduce new foods to hesitant kids without the mealtime battles.',
      authorName: 'Dr. Sarah Johnson',
      authorImage: '/placeholder.svg',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    },
    {
      id: '2',
      title: 'Lunchbox Ideas for Kindergarteners',
      excerpt: 'Creative and nutritious lunch ideas that will actually get eaten and are easy to prepare.',
      authorName: 'Maria Rodriguez',
      authorImage: '/placeholder.svg',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9',
    },
  ];

  return (
    <>
      <HeroSection />
      
      <FeaturesSection />

      {/* Age Groups Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meal Plans by Age</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover age-appropriate meal plans designed specifically for your child's nutritional needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ageGroups.map((group, index) => (
              <AgeGroupCard key={index} {...group} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Recipes</h2>
            <Link to="/recipes">
              <Button variant="ghost">View All</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredMeals.map((meal) => (
              <MealCard key={meal.id} {...meal} />
            ))}
          </div>
        </div>
      </section>

      {/* Tips for Parents Section */}
      <section className="py-16 bg-kid-purple bg-opacity-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Tips for Parents</h2>
            <Link to="/tips">
              <Button variant="ghost">View All</Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((tip) => (
              <TipCard key={tip.id} {...tip} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-kid-blue bg-opacity-30 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Weekly Meal Inspiration</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Join thousands of parents receiving weekly meal plans, recipes, and feeding tips directly to their inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg border border-gray-300 flex-grow"
                required
              />
              <Button size="lg" type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
