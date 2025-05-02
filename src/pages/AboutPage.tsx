
import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">About KidEatsWell</h1>
        
        <div className="mb-12">
          <p className="text-lg mb-4">
            KidEatsWell was founded by a group of parents and nutritionists who understand the challenges of providing healthy, balanced meals for children in today's busy world.
          </p>
          
          <p className="text-lg mb-4">
            Our mission is to make nutritious eating simple and enjoyable for families with young children. We believe that establishing healthy eating habits early sets the foundation for a lifetime of wellbeing.
          </p>
          
          <p className="text-lg mb-8">
            Through our age-appropriate meal plans, simple recipes, and expert advice, we aim to take the stress out of meal planning and help parents raise healthy, happy eaters.
          </p>
          
          <div className="flex justify-center">
            <Link to="/meal-plans">
              <Button size="lg">Explore Our Meal Plans</Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-kid-green rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="mb-6">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                placeholder="Your name"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                placeholder="Your email address"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 rounded-md border border-gray-300"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
