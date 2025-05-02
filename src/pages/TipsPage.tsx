
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import TipCard from '@/components/TipCard';
import QuickTipCard from '@/components/QuickTipCard';
import { categorizedTips, quickTips } from '@/data/tips';

// Type definitions
export type TipCategory = 
  | 'nutrition-basics' 
  | 'meal-planning' 
  | 'picky-eating' 
  | 'lunchbox-ideas' 
  | 'time-saving' 
  | 'feeding-by-age' 
  | 'mindful-eating';

const TipsPage = () => {
  const [activeCategory, setActiveCategory] = useState<TipCategory>('nutrition-basics');

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Parenting Tips for Healthier Mealtimes</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Helpful advice to make mealtime easier, happier, and healthier—for both you and your child.
        </p>

        <Tabs value={activeCategory} onValueChange={(value) => setActiveCategory(value as TipCategory)} className="w-full mb-8">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap gap-2">
            <TabsTrigger value="nutrition-basics">Nutrition Basics</TabsTrigger>
            <TabsTrigger value="meal-planning">Meal Planning</TabsTrigger>
            <TabsTrigger value="picky-eating">Picky Eating</TabsTrigger>
            <TabsTrigger value="lunchbox-ideas">Lunchbox Ideas</TabsTrigger>
            <TabsTrigger value="time-saving">Time-Saving Tips</TabsTrigger>
            <TabsTrigger value="feeding-by-age">Feeding by Age</TabsTrigger>
            <TabsTrigger value="mindful-eating">Mindful Eating</TabsTrigger>
          </TabsList>

          {Object.entries(categorizedTips).map(([category, tips]) => (
            <TabsContent key={category} value={category} className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tips.map((tip) => (
                  <TipCard 
                    key={tip.id} 
                    id={tip.id} 
                    title={tip.title} 
                    excerpt={tip.excerpt} 
                    authorName={tip.authorName} 
                    authorImage={tip.authorImage} 
                    image={tip.image} 
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <Separator className="my-12" />

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold mb-6">Featured Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {categorizedTips["nutrition-basics"].slice(0, 2).map((tip) => (
                <TipCard 
                  key={tip.id} 
                  id={tip.id} 
                  title={tip.title} 
                  excerpt={tip.excerpt} 
                  authorName={tip.authorName} 
                  authorImage={tip.authorImage} 
                  image={tip.image} 
                />
              ))}
            </div>
          </div>
          <div className="lg:w-1/3 bg-secondary/50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold mb-6">Quick Wins for Busy Parents</h2>
            <div className="space-y-4">
              {quickTips.map((tip, index) => (
                <QuickTipCard key={index} tip={tip} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-primary/10 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Feeling overwhelmed?</h3>
          <p className="text-gray-700 mb-6">Let us take the stress out of mealtime with our ready-to-use meal plans.</p>
          <Button size="lg" asChild>
            <a href="/meal-plans">Try Our Weekly Meal Plans</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TipsPage;
