import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Shield, Apple, Egg, Zap } from 'lucide-react';
import { getRecipesByAge } from '../data/recipesByAge';
import { Recipe } from '../data/recipes';

type MealType = {
  id: string;
  name: string;
  image?: string;
  tags: string[];
  nutritionTags: ('protein' | 'fiber' | 'immunity' | 'energy')[];
  dietary: {
    vegetarian: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    nutFree: boolean;
    pickyEaterFriendly: boolean;
  };
};

type MealPlanProps = {
  ageGroup: string;
  dietaryFilters: {
    vegetarian: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    nutFree: boolean;
    pickyEaterFriendly: boolean;
  };
  onMealClick: (id: string) => void;
};

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const mealTypes = ['Breakfast', 'Morning Snack', 'Lunch', 'Afternoon Snack', 'Dinner'];

// Convert Recipe to MealType for the meal plan
const convertRecipeToMeal = (recipe: Recipe): MealType => {
  return {
    id: recipe.id,
    name: recipe.title,
    image: recipe.image,
    tags: recipe.tags,
    nutritionTags: recipe.nutritionTags as ('protein' | 'fiber' | 'immunity' | 'energy')[],
    dietary: {
      vegetarian: recipe.dietaryNeeds.includes('vegetarian'),
      glutenFree: recipe.dietaryNeeds.includes('gluten-free'),
      dairyFree: recipe.dietaryNeeds.includes('dairy-free'),
      nutFree: recipe.dietaryNeeds.includes('nut-free'),
      pickyEaterFriendly: recipe.tags.includes('picky-eater-friendly')
    }
  };
};

// Get meals for specific age group and meal type
const getMealsForAgeGroup = (ageGroup: string): MealType[] => {
  const recipes = getRecipesByAge(ageGroup);
  return recipes.map(convertRecipeToMeal);
};

// Helper to filter meals based on dietary preferences
const filterMealsByDietary = (meals: MealType[], filters: MealPlanProps['dietaryFilters']) => {
  if (Object.values(filters).every(v => v === false)) {
    return meals;
  }
  
  return meals.filter(meal => {
    return Object.entries(filters).every(([key, isActive]) => {
      // Only filter if the preference is active
      if (!isActive) return true;
      
      // Check if the meal meets the active dietary preference
      return meal.dietary[key as keyof typeof meal.dietary];
    });
  });
};

// Helper for nutrition tag icons
const NutritionIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'protein':
      return <Egg size={16} className="text-blue-600" aria-label="High in Protein" />;
    case 'fiber':
      return <Apple size={16} className="text-amber-600" aria-label="Rich in Fiber" />;
    case 'immunity':
      return <Shield size={16} className="text-green-600" aria-label="Boosts Immunity" />;
    case 'energy':
      return <Zap size={16} className="text-yellow-600" aria-label="Energy-packed" />;
    default:
      return null;
  }
};

const WeeklyMealPlan: React.FC<MealPlanProps> = ({ ageGroup, dietaryFilters, onMealClick }) => {
  const allMeals = getMealsForAgeGroup(ageGroup);
  const filteredMeals = filterMealsByDietary(allMeals, dietaryFilters);
  
  // Function to get a meal for a specific cell
  const getMealForCell = (dayIndex: number, mealTypeIndex: number) => {
    // This is a simple pattern to distribute our mock meals across the week
    // In a real app, you'd fetch the actual meal plan for each day
    const mealIndex = (dayIndex + mealTypeIndex) % filteredMeals.length;
    return filteredMeals[mealIndex];
  };

  return (
    <div className="overflow-x-auto pb-4">
      <Table className="border rounded-md">
        <TableHeader className="bg-muted">
          <TableRow>
            <TableHead className="w-[120px]">Meal</TableHead>
            {daysOfWeek.map(day => (
              <TableHead key={day}>{day}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {mealTypes.map((mealType, mealTypeIndex) => (
            <TableRow key={mealType}>
              <TableCell className="font-medium bg-muted/50">{mealType}</TableCell>
              {daysOfWeek.map((day, dayIndex) => {
                const meal = getMealForCell(dayIndex, mealTypeIndex);
                
                // If no matching meal after filtering
                if (!meal) {
                  return (
                    <TableCell key={`${day}-${mealType}`} className="text-muted-foreground italic">
                      Not available with selected filters
                    </TableCell>
                  );
                }
                
                return (
                  <TableCell 
                    key={`${day}-${mealType}`} 
                    className="cursor-pointer hover:bg-muted/20 transition-colors"
                    onClick={() => onMealClick(meal.id)}
                  >
                    <div className="font-medium">{meal.name}</div>
                    <div className="flex flex-wrap items-center gap-1 mt-1">
                      {meal.nutritionTags.map(tag => (
                        <span key={tag} className="inline-flex">
                          <NutritionIcon type={tag} />
                        </span>
                      ))}
                      {meal.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default WeeklyMealPlan;
