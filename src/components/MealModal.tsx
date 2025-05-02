
import React from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter 
} from "@/components/ui/card";
import { 
  Egg, 
  Clock, 
  Corn, 
  Shield, 
  Zap 
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type MealModalProps = {
  mealId: string | null;
  onClose: () => void;
};

// Mock recipe data - in a real app, this would come from an API
const recipeData: Record<string, {
  name: string;
  image: string;
  prepTime: string;
  cookTime: string;
  ingredients: string[];
  steps: string[];
  nutritionTags: string[];
  parentTips: string[];
}> = {
  'toddler-breakfast-1': {
    name: 'Mini Veggie Omelette',
    image: '/placeholder.svg',
    prepTime: '5 mins',
    cookTime: '10 mins',
    ingredients: [
      '2 eggs, beaten',
      '1 tbsp milk',
      '¼ cup finely diced bell pepper',
      '¼ cup finely diced spinach',
      '1 tbsp grated cheese',
      'Pinch of salt (optional)'
    ],
    steps: [
      'Whisk eggs and milk in a bowl.',
      'Heat a small non-stick pan over medium-low heat.',
      'Add the diced vegetables and cook for 1 minute.',
      'Pour in the egg mixture and cook until mostly set.',
      'Sprinkle cheese on top and fold the omelette in half.',
      'Cook for 1 more minute until cheese melts.',
      'Cut into bite-sized pieces for toddlers.'
    ],
    nutritionTags: ['protein', 'immunity'],
    parentTips: [
      'Let your toddler help mix the eggs!',
      'You can substitute any vegetables your child enjoys.',
      'Make ahead and refrigerate for up to 2 days.'
    ]
  },
  'kids-breakfast-1': {
    name: 'Rainbow Pancakes',
    image: '/placeholder.svg',
    prepTime: '15 mins',
    cookTime: '15 mins',
    ingredients: [
      '1 cup all-purpose flour',
      '2 tbsp sugar',
      '1 tsp baking powder',
      '¼ tsp salt',
      '1 egg',
      '¾ cup milk',
      '2 tbsp melted butter',
      'Food coloring (red, orange, yellow, green, blue, purple)',
      'Fresh fruit for topping'
    ],
    steps: [
      'Mix dry ingredients in a bowl.',
      'In another bowl, whisk egg, milk, and melted butter.',
      'Combine wet and dry ingredients to form a batter.',
      'Divide the batter into 6 small bowls.',
      'Add a drop of food coloring to each bowl and mix.',
      'Heat a non-stick pan over medium heat.',
      'Pour small amounts of each colored batter to make pancakes.',
      'Flip when bubbles form on top.',
      'Serve stacked with fruit between layers.'
    ],
    nutritionTags: ['energy', 'fiber'],
    parentTips: [
      'Let kids choose which color pancake they want next!',
      'Use natural food coloring made from fruits and vegetables if preferred.',
      'These freeze well for busy mornings.'
    ]
  },
  'big-kids-breakfast-1': {
    name: 'Breakfast Burrito',
    image: '/placeholder.svg',
    prepTime: '10 mins',
    cookTime: '10 mins',
    ingredients: [
      'Whole wheat tortillas',
      '2 eggs, scrambled',
      '¼ cup black beans, rinsed',
      '¼ cup grated cheese',
      '2 tbsp salsa',
      'Diced avocado',
      'Handful of spinach'
    ],
    steps: [
      'Scramble eggs in a pan until mostly cooked.',
      'Add black beans and warm through.',
      'Place tortilla on a plate and add the egg mixture in the center.',
      'Top with cheese, spinach, salsa, and avocado.',
      'Fold in the sides and roll up tightly.',
      'Optional: Place back in pan to seal the edges.',
      'Cut in half before serving.'
    ],
    nutritionTags: ['protein', 'energy'],
    parentTips: [
      'Prep ingredients the night before for a quick morning assembly.',
      'Let kids assemble their own burrito with their favorite toppings.',
      'Wrap in foil for an on-the-go breakfast.'
    ]
  },
  // We can add more recipes here as needed
};

const MealModal: React.FC<MealModalProps> = ({ mealId, onClose }) => {
  if (!mealId) return null;

  // Get recipe data or show placeholder if not found
  const recipe = recipeData[mealId] || {
    name: 'Recipe Details',
    image: '/placeholder.svg',
    prepTime: '10 mins',
    cookTime: '20 mins',
    ingredients: ['Coming soon...'],
    steps: ['Recipe coming soon!'],
    nutritionTags: [],
    parentTips: ['Check back soon for expert tips!']
  };

  // Function to render nutrition tag icons
  const renderNutritionIcon = (tag: string) => {
    switch (tag) {
      case 'protein':
        return <Egg className="text-blue-600" />;
      case 'fiber':
        return <Corn className="text-amber-600" />;
      case 'immunity':
        return <Shield className="text-green-600" />;
      case 'energy':
        return <Zap className="text-yellow-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{recipe.name}</CardTitle>
              <CardDescription className="flex items-center gap-2 mt-1">
                <Clock size={16} />
                <span>Prep: {recipe.prepTime}</span>
                <span>•</span>
                <span>Cook: {recipe.cookTime}</span>
              </CardDescription>
            </div>
            <Button variant="outline" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <img 
                src={recipe.image} 
                alt={recipe.name} 
                className="w-full h-48 object-cover rounded-md border"
              />
              {recipe.nutritionTags.length > 0 && (
                <div className="mt-3">
                  <h4 className="font-medium mb-2">Nutrition Highlights</h4>
                  <div className="flex flex-wrap gap-2">
                    {recipe.nutritionTags.map(tag => (
                      <Badge key={tag} className="flex items-center gap-1 py-1.5">
                        {renderNutritionIcon(tag)}
                        <span>{tag === 'protein' ? 'High in Protein' : 
                               tag === 'fiber' ? 'Rich in Fiber' : 
                               tag === 'immunity' ? 'Boosts Immunity' : 
                               'Energy-packed'}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="md:w-2/3 space-y-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Ingredients</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-2">Instructions</h3>
                <ol className="list-decimal pl-5 space-y-1">
                  {recipe.steps.map((step, index) => (
                    <li key={index} className="pb-2">{step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {recipe.parentTips.length > 0 && (
            <div className="bg-accent p-4 rounded-md">
              <h3 className="font-bold text-lg mb-2">Tips for Parents</h3>
              <ul className="list-disc pl-5">
                {recipe.parentTips.map((tip, index) => (
                  <li key={index} className="mb-1">{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end gap-2 border-t pt-4">
          <Button variant="outline">Print Recipe</Button>
          <Button>Save Recipe</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default MealModal;
