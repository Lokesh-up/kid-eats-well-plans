
import React, { useState, useEffect } from 'react';
import { Search, Filter, Clock } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuCheckboxItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { 
  Command, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem 
} from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import MealCard from '@/components/MealCard';
import MealModal from '@/components/MealModal';
import RecipeFilters from '@/components/RecipeFilters';
import { recipesData } from '@/data/recipes';

const RecipesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [openRecipe, setOpenRecipe] = useState<string | null>(null);
  const [recipes, setRecipes] = useState(recipesData);
  const [activeFilters, setActiveFilters] = useState({
    mealTypes: [] as string[],
    ageGroups: [] as string[],
    prepTimes: [] as string[],
    dietaryNeeds: [] as string[],
    difficulties: [] as string[],
    tags: [] as string[],
  });

  // Apply filters
  useEffect(() => {
    let filteredResults = [...recipesData];

    // Apply search query filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredResults = filteredResults.filter(recipe => 
        recipe.title.toLowerCase().includes(query) ||
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(query))
      );
    }

    // Apply selected filters
    if (activeFilters.mealTypes.length > 0) {
      filteredResults = filteredResults.filter(recipe => 
        activeFilters.mealTypes.includes(recipe.mealType)
      );
    }

    if (activeFilters.ageGroups.length > 0) {
      filteredResults = filteredResults.filter(recipe => 
        activeFilters.ageGroups.some(age => recipe.ageGroups.includes(age))
      );
    }

    if (activeFilters.prepTimes.length > 0) {
      filteredResults = filteredResults.filter(recipe => {
        const prepTimeMinutes = parseInt(recipe.prepTime);
        return activeFilters.prepTimes.some(range => {
          if (range === 'under-10') return prepTimeMinutes < 10;
          if (range === 'under-20') return prepTimeMinutes < 20;
          if (range === 'over-30') return prepTimeMinutes >= 30;
          return false;
        });
      });
    }

    if (activeFilters.dietaryNeeds.length > 0) {
      filteredResults = filteredResults.filter(recipe => 
        activeFilters.dietaryNeeds.every(need => recipe.dietaryNeeds.includes(need))
      );
    }

    if (activeFilters.difficulties.length > 0) {
      filteredResults = filteredResults.filter(recipe => 
        activeFilters.difficulties.includes(recipe.difficulty)
      );
    }

    if (activeFilters.tags.length > 0) {
      filteredResults = filteredResults.filter(recipe => 
        activeFilters.tags.some(tag => recipe.tags.includes(tag))
      );
    }

    setRecipes(filteredResults);
  }, [searchQuery, activeFilters]);

  // Toggle a filter value
  const toggleFilter = (category: keyof typeof activeFilters, value: string) => {
    setActiveFilters(prev => {
      const currentValues = [...prev[category]];
      const index = currentValues.indexOf(value);
      
      if (index === -1) {
        return { ...prev, [category]: [...currentValues, value] };
      } else {
        currentValues.splice(index, 1);
        return { ...prev, [category]: currentValues };
      }
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveFilters({
      mealTypes: [],
      ageGroups: [],
      prepTimes: [],
      dietaryNeeds: [],
      difficulties: [],
      tags: [],
    });
    setSearchQuery("");
  };

  // Count active filters for badge
  const activeFilterCount = Object.values(activeFilters).reduce(
    (count, filters) => count + filters.length, 
    0
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Easy & Healthy Recipes for Kids</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore delicious recipes for every mealtime — made with love and busy parents in mind.
        </p>
      </div>
      
      {/* Search & Filter Bar */}
      <div className="bg-gray-50 p-4 rounded-lg mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
            <Input 
              placeholder="Search by recipe name or ingredient..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <div className="flex gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex gap-2 whitespace-nowrap">
                  <Filter size={18} />
                  Filters
                  {activeFilterCount > 0 && (
                    <Badge variant="secondary" className="ml-1 h-5 px-1.5">
                      {activeFilterCount}
                    </Badge>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[340px] p-0" align="end">
                <RecipeFilters
                  activeFilters={activeFilters}
                  toggleFilter={toggleFilter}
                  clearFilters={clearFilters}
                />
              </PopoverContent>
            </Popover>
            
            {activeFilterCount > 0 && (
              <Button variant="ghost" onClick={clearFilters}>
                Clear All
              </Button>
            )}
          </div>
        </div>
        
        {/* Active Filter Pills */}
        {activeFilterCount > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {Object.entries(activeFilters).map(([category, values]) => 
              values.map(value => (
                <Badge 
                  key={`${category}-${value}`}
                  variant="outline"
                  className="px-2 py-1 bg-background hover:bg-background/80 cursor-pointer"
                  onClick={() => toggleFilter(category as keyof typeof activeFilters, value)}
                >
                  {value.replace(/-/g, ' ')}
                  <span className="ml-1">×</span>
                </Badge>
              ))
            )}
          </div>
        )}
      </div>
      
      {/* Recipe Grid */}
      {recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {recipes.map(recipe => (
            <div 
              key={recipe.id}
              onClick={() => setOpenRecipe(recipe.id)}
              className="cursor-pointer"
            >
              <MealCard
                id={recipe.id}
                title={recipe.title}
                image={recipe.image}
                mealType={recipe.mealType}
                prepTime={`${recipe.prepTime} mins prep`}
                tags={recipe.tags}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium mb-2">No recipes match your filters</h3>
          <p className="text-gray-500">Try adjusting your search or filters to find more recipes</p>
          <Button onClick={clearFilters} className="mt-4">
            Clear all filters
          </Button>
        </div>
      )}
      
      {/* Call to Action Footer */}
      <div className="bg-accent rounded-lg p-8 mt-16 text-center">
        <h3 className="text-2xl font-bold mb-2">Want full weekly plans?</h3>
        <p className="mb-4 text-lg">Get ready-made meal plans tailored for your child's age group</p>
        <Button asChild size="lg">
          <a href="/meal-plans">Browse Meal Plans</a>
        </Button>
      </div>
      
      {/* Recipe Modal */}
      <MealModal mealId={openRecipe} onClose={() => setOpenRecipe(null)} />
    </div>
  );
};

export default RecipesPage;
