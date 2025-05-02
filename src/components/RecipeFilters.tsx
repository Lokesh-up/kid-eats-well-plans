
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

interface RecipeFiltersProps {
  activeFilters: {
    mealTypes: string[];
    ageGroups: string[];
    prepTimes: string[];
    dietaryNeeds: string[];
    difficulties: string[];
    tags: string[];
  };
  toggleFilter: (category: keyof typeof activeFilters, value: string) => void;
  clearFilters: () => void;
}

const RecipeFilters = ({ activeFilters, toggleFilter, clearFilters }: RecipeFiltersProps) => {
  return (
    <div className="p-4 max-h-[80vh] overflow-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-base">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters} className="h-7 text-sm">
          Clear All
        </Button>
      </div>
      
      <Tabs defaultValue="meal-type" className="w-full">
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="meal-type">Meal Type</TabsTrigger>
          <TabsTrigger value="age-diet">Age & Diet</TabsTrigger>
          <TabsTrigger value="other">Other</TabsTrigger>
        </TabsList>
        
        <TabsContent value="meal-type" className="space-y-4">
          {/* Meal Types */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Meal Type</h4>
            <div className="grid grid-cols-2 gap-2">
              {['breakfast', 'lunch', 'dinner', 'snack', 'dessert'].map(type => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`meal-${type}`} 
                    checked={activeFilters.mealTypes.includes(type)}
                    onCheckedChange={() => toggleFilter('mealTypes', type)}
                  />
                  <Label htmlFor={`meal-${type}`} className="capitalize">{type}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          {/* Prep Time */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Prep Time</h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: 'under-10', label: 'Under 10 minutes' },
                { id: 'under-20', label: 'Under 20 minutes' },
                { id: 'over-30', label: '30+ minutes' }
              ].map(time => (
                <div key={time.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`time-${time.id}`}
                    checked={activeFilters.prepTimes.includes(time.id)}
                    onCheckedChange={() => toggleFilter('prepTimes', time.id)}
                  />
                  <Label htmlFor={`time-${time.id}`}>{time.label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          {/* Difficulty */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Difficulty</h4>
            <div className="grid grid-cols-2 gap-2">
              {['easy', 'medium'].map(diff => (
                <div key={diff} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`diff-${diff}`}
                    checked={activeFilters.difficulties.includes(diff)}
                    onCheckedChange={() => toggleFilter('difficulties', diff)}
                  />
                  <Label htmlFor={`diff-${diff}`} className="capitalize">{diff}</Label>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="age-diet" className="space-y-4">
          {/* Age Groups */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Age Groups</h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: '1-3', label: 'Ages 1–3 (Toddlers)' },
                { id: '4-6', label: 'Ages 4–6' },
                { id: '7-10', label: 'Ages 7–10' }
              ].map(age => (
                <div key={age.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`age-${age.id}`}
                    checked={activeFilters.ageGroups.includes(age.id)}
                    onCheckedChange={() => toggleFilter('ageGroups', age.id)}
                  />
                  <Label htmlFor={`age-${age.id}`}>{age.label}</Label>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          {/* Dietary Needs */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Dietary Needs</h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: 'vegetarian', label: 'Vegetarian' },
                { id: 'gluten-free', label: 'Gluten-Free' },
                { id: 'dairy-free', label: 'Dairy-Free' },
                { id: 'nut-free', label: 'Nut-Free' }
              ].map(diet => (
                <div key={diet.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`diet-${diet.id}`}
                    checked={activeFilters.dietaryNeeds.includes(diet.id)}
                    onCheckedChange={() => toggleFilter('dietaryNeeds', diet.id)}
                  />
                  <Label htmlFor={`diet-${diet.id}`}>{diet.label}</Label>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="other" className="space-y-4">
          {/* Tags */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Special Features</h4>
            <div className="grid grid-cols-1 gap-2">
              {[
                { id: 'picky-eater', label: 'Picky Eater Friendly' },
                { id: 'no-cook', label: 'No Cooking Required' },
                { id: 'freezer-friendly', label: 'Freezer Friendly' },
                { id: 'lunchbox', label: 'Perfect for Lunchboxes' }
              ].map(tag => (
                <div key={tag.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`tag-${tag.id}`}
                    checked={activeFilters.tags.includes(tag.id)}
                    onCheckedChange={() => toggleFilter('tags', tag.id)}
                  />
                  <Label htmlFor={`tag-${tag.id}`}>{tag.label}</Label>
                </div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RecipeFilters;
