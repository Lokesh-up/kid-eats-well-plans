
import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Shield, Corn, Egg, Zap } from 'lucide-react';

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

// Mock data for meal plans
const generateMealPlans = (ageGroup: string) => {
  const mealsByAge: Record<string, MealType[]> = {
    '1-3': [
      {
        id: 'toddler-breakfast-1',
        name: 'Mini Veggie Omelette',
        image: '/placeholder.svg',
        tags: ['quick', 'protein-rich'],
        nutritionTags: ['protein', 'immunity'],
        dietary: { vegetarian: true, glutenFree: true, dairyFree: false, nutFree: true, pickyEaterFriendly: true }
      },
      {
        id: 'toddler-snack-1',
        name: 'Banana & Yogurt',
        image: '/placeholder.svg',
        tags: ['no-cook', 'finger-food'],
        nutritionTags: ['energy', 'fiber'],
        dietary: { vegetarian: true, glutenFree: true, dairyFree: false, nutFree: true, pickyEaterFriendly: true }
      },
      {
        id: 'toddler-lunch-1',
        name: 'Tiny Turkey Sandwiches',
        image: '/placeholder.svg',
        tags: ['protein-rich', 'lunchbox'],
        nutritionTags: ['protein', 'energy'],
        dietary: { vegetarian: false, glutenFree: false, dairyFree: true, nutFree: true, pickyEaterFriendly: true }
      },
      {
        id: 'toddler-snack-2',
        name: 'Apple Slices & Nut Butter',
        image: '/placeholder.svg',
        tags: ['no-cook', 'fiber-rich'],
        nutritionTags: ['fiber', 'energy'],
        dietary: { vegetarian: true, glutenFree: true, dairyFree: true, nutFree: false, pickyEaterFriendly: true }
      },
      {
        id: 'toddler-dinner-1',
        name: 'Mini Pasta & Hidden Veggie Sauce',
        image: '/placeholder.svg',
        tags: ['toddler-friendly', 'veggie-rich'],
        nutritionTags: ['fiber', 'immunity'],
        dietary: { vegetarian: true, glutenFree: false, dairyFree: false, nutFree: true, pickyEaterFriendly: true }
      }
    ],
    '4-6': [
      {
        id: 'kids-breakfast-1',
        name: 'Rainbow Pancakes',
        image: '/placeholder.svg',
        tags: ['fun', 'weekend'],
        nutritionTags: ['energy', 'fiber'],
        dietary: { vegetarian: true, glutenFree: false, dairyFree: false, nutFree: true, pickyEaterFriendly: true }
      },
      {
        id: 'kids-snack-1',
        name: 'Veggie Sticks & Hummus',
        image: '/placeholder.svg',
        tags: ['no-cook', 'protein-rich'],
        nutritionTags: ['protein', 'fiber'],
        dietary: { vegetarian: true, glutenFree: true, dairyFree: true, nutFree: true, pickyEaterFriendly: false }
      },
      {
        id: 'kids-lunch-1',
        name: 'Bento Box Lunch',
        image: '/placeholder.svg',
        tags: ['lunchbox', 'balanced'],
        nutritionTags: ['protein', 'energy', 'fiber'],
        dietary: { vegetarian: false, glutenFree: true, dairyFree: false, nutFree: true, pickyEaterFriendly: true }
      },
      {
        id: 'kids-snack-2',
        name: 'Fruit & Cheese Kabobs',
        image: '/placeholder.svg',
        tags: ['fun', 'calcium-rich'],
        nutritionTags: ['immunity', 'energy'],
        dietary: { vegetarian: true, glutenFree: true, dairyFree: false, nutFree: true, pickyEaterFriendly: true }
      },
      {
        id: 'kids-dinner-1',
        name: 'Build-Your-Own Tacos',
        image: '/placeholder.svg',
        tags: ['interactive', 'family-meal'],
        nutritionTags: ['protein', 'fiber'],
        dietary: { vegetarian: false, glutenFree: true, dairyFree: false, nutFree: true, pickyEaterFriendly: true }
      }
    ],
    '7-10': [
      {
        id: 'big-kids-breakfast-1',
        name: 'Breakfast Burrito',
        image: '/placeholder.svg',
        tags: ['protein-rich', 'grab-and-go'],
        nutritionTags: ['protein', 'energy'],
        dietary: { vegetarian: false, glutenFree: false, dairyFree: false, nutFree: true, pickyEaterFriendly: true }
      },
      {
        id: 'big-kids-snack-1',
        name: 'Trail Mix',
        image: '/placeholder.svg',
        tags: ['no-cook', 'energy-boost'],
        nutritionTags: ['energy', 'protein'],
        dietary: { vegetarian: true, glutenFree: true, dairyFree: true, nutFree: false, pickyEaterFriendly: true }
      },
      {
        id: 'big-kids-lunch-1',
        name: 'Hearty Sandwich & Soup',
        image: '/placeholder.svg',
        tags: ['lunch', 'comfort-food'],
        nutritionTags: ['protein', 'fiber', 'immunity'],
        dietary: { vegetarian: false, glutenFree: false, dairyFree: false, nutFree: true, pickyEaterFriendly: true }
      },
      {
        id: 'big-kids-snack-2',
        name: 'Yogurt Parfait',
        image: '/placeholder.svg',
        tags: ['protein-rich', 'sweet-treat'],
        nutritionTags: ['protein', 'immunity'],
        dietary: { vegetarian: true, glutenFree: true, dairyFree: false, nutFree: true, pickyEaterFriendly: true }
      },
      {
        id: 'big-kids-dinner-1',
        name: 'Baked Fish Fingers & Sweet Potato Fries',
        image: '/placeholder.svg',
        tags: ['kid-favorite', 'healthy-twist'],
        nutritionTags: ['protein', 'immunity', 'fiber'],
        dietary: { vegetarian: false, glutenFree: true, dairyFree: true, nutFree: true, pickyEaterFriendly: true }
      }
    ]
  };

  return mealsByAge[ageGroup] || [];
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
      return <Egg size={16} className="text-blue-600" title="High in Protein" />;
    case 'fiber':
      return <Corn size={16} className="text-amber-600" title="Rich in Fiber" />;
    case 'immunity':
      return <Shield size={16} className="text-green-600" title="Boosts Immunity" />;
    case 'energy':
      return <Zap size={16} className="text-yellow-600" title="Energy-packed" />;
    default:
      return null;
  }
};

const WeeklyMealPlan: React.FC<MealPlanProps> = ({ ageGroup, dietaryFilters, onMealClick }) => {
  const allMeals = generateMealPlans(ageGroup);
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
