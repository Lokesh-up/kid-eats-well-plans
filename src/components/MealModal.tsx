import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { 
  Clock, 
  Users, 
  ChefHat, 
  Heart, 
  Leaf, 
  Zap 
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Recipe, recipesData } from '@/data/recipes';

type MealModalProps = {
  mealId: string | null;
  onClose: () => void;
};

const MealModal: React.FC<MealModalProps> = ({ mealId, onClose }) => {
  if (!mealId) return null;

  // Find the recipe in our Indian recipes data
  const recipe = recipesData.find(r => r.id === mealId);
  
  if (!recipe) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
        <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recipe Not Found</CardTitle>
              <CardDescription>Sorry, this recipe is not available.</CardDescription>
            </div>
            <Button variant="ghost" onClick={onClose}>Close</Button>
          </CardHeader>
        </Card>
      </div>
    );
  }

  const renderNutritionIcon = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'protein':
        return <Heart className="w-4 h-4" />;
      case 'energy':
        return <Zap className="w-4 h-4" />;
      case 'fiber':
        return <Leaf className="w-4 h-4" />;
      case 'immunity':
        return <ChefHat className="w-4 h-4" />;
      case 'iron':
        return <Heart className="w-4 h-4" />;
      case 'calcium':
        return <Heart className="w-4 h-4" />;
      case 'healthy-fat':
        return <Heart className="w-4 h-4" />;
      case 'easy-digest':
        return <Leaf className="w-4 h-4" />;
      case 'light':
        return <Leaf className="w-4 h-4" />;
      case 'protein-rich':
        return <Heart className="w-4 h-4" />;
      default:
        return <Heart className="w-4 h-4" />;
    }
  };

  // Fallback image
  const fallbackImage = '/placeholder.svg';

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <Card className="w-full max-w-3xl max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl">{recipe.title}</CardTitle>
            <CardDescription className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Prep: {recipe.prepTime} mins
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Cook: {recipe.cookTime} mins
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                Serves: {recipe.servings}
              </span>
              <span>•</span>
              <Badge variant="secondary" className="ml-2">
                {recipe.difficulty}
              </Badge>
            </CardDescription>
          </div>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-48 object-cover rounded-md border"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = fallbackImage;
                }}
              />
              
              {recipe.videoUrl && (
                <div className="mt-4">
                  <h4 className="font-semibold mb-2 text-accent-foreground">Watch Cooking Video:</h4>
                  <a 
                    href={recipe.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors"
                  >
                    📺 Watch Recipe Video
                  </a>
                </div>
              )}
              
              {recipe.nutritionTags.length > 0 && (
                <div className="mt-3">
                  <h4 className="font-semibold mb-2">Nutrition Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {recipe.nutritionTags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="flex items-center gap-1">
                        {renderNutritionIcon(tag)}
                        {tag.replace(/-/g, ' ')}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {recipe.tags.length > 0 && (
                <div className="mt-3">
                  <h4 className="font-semibold mb-2">Recipe Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {recipe.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag.replace(/-/g, ' ')}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Ingredients</h3>
                <ul className="space-y-2">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                      <span>{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Instructions</h3>
            <ol className="space-y-3">
              {recipe.steps.map((step, index) => (
                <li key={index} className="flex gap-3">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm font-medium flex-shrink-0">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          
          {recipe.parentTips.length > 0 && (
            <div className="bg-accent/20 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-accent-foreground">Tips for Parents</h3>
              <ul className="space-y-2">
                {recipe.parentTips.map((tip, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent-foreground mt-2 flex-shrink-0"></span>
                    <span className="text-accent-foreground">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline">Print Recipe</Button>
            <Button className="bg-primary hover:bg-primary/90">Save Recipe</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MealModal;