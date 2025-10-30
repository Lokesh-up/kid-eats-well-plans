
import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from 'lucide-react';
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import WeeklyMealPlan from '@/components/WeeklyMealPlan';
import MealModal from '@/components/MealModal';

const MealPlansPage = () => {
  const [selectedAge, setSelectedAge] = useState("1-3");
  const [selectedDiet, setSelectedDiet] = useState("all");
  const [dietaryFilters, setDietaryFilters] = useState({
    vegetarian: false,
    glutenFree: false,
    dairyFree: false,
    nutFree: false,
    pickyEaterFriendly: false,
  });
  const [openRecipe, setOpenRecipe] = useState<string | null>(null);

  const handleDownloadPDF = () => {
    window.print();
  };

  const handleDietaryFilterChange = (filter: string) => {
    setDietaryFilters(prev => ({
      ...prev,
      [filter]: !prev[filter as keyof typeof prev]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Daily Meal Plans for Happy, Healthy Kids</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Choose your child's age group to get meal plans crafted by nutrition experts. Easy, nutritious, and kid-approved!
        </p>
      </div>

      {/* Print Header - Hidden on screen, visible in print */}
      <div className="hidden print-header print:block">
        <h1 className="text-2xl font-bold mb-2">Weekly Meal Plan - Ages {selectedAge}</h1>
        <p className="text-sm mb-4">
          Dietary Preferences: {Object.entries(dietaryFilters)
            .filter(([_, value]) => value)
            .map(([key]) => key.replace(/([A-Z])/g, ' $1').trim())
            .join(', ') || 'None'}
        </p>
      </div>

      {/* Age Group Selector */}
      <Tabs defaultValue="1-3" className="w-full mb-8" onValueChange={setSelectedAge}>
        <div className="flex justify-center mb-6 no-print">
          <TabsList className="grid grid-cols-3 w-full max-w-xl">
            <TabsTrigger value="1-3" className="text-lg py-3">Ages 1–3 (Toddlers)</TabsTrigger>
            <TabsTrigger value="4-6" className="text-lg py-3">Ages 4–6</TabsTrigger>
            <TabsTrigger value="7-9" className="text-lg py-3">Ages 7–9</TabsTrigger>
          </TabsList>
        </div>

        {/* Filter Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 bg-gray-50 p-4 rounded-lg no-print-filter">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-medium">Dietary Needs:</span>
            <div className="flex flex-wrap gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox 
                  checked={dietaryFilters.vegetarian} 
                  onCheckedChange={() => handleDietaryFilterChange('vegetarian')}
                />
                <span>Vegetarian</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox 
                  checked={dietaryFilters.glutenFree} 
                  onCheckedChange={() => handleDietaryFilterChange('glutenFree')}
                />
                <span>Gluten-Free</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox 
                  checked={dietaryFilters.dairyFree} 
                  onCheckedChange={() => handleDietaryFilterChange('dairyFree')}
                />
                <span>Dairy-Free</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox 
                  checked={dietaryFilters.nutFree} 
                  onCheckedChange={() => handleDietaryFilterChange('nutFree')}
                />
                <span>Nut-Free</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <Checkbox 
                  checked={dietaryFilters.pickyEaterFriendly} 
                  onCheckedChange={() => handleDietaryFilterChange('pickyEaterFriendly')}
                />
                <span>Picky Eater</span>
              </label>
            </div>
          </div>
          
          
          <Button variant="outline" className="gap-2" onClick={handleDownloadPDF}>
            <Download size={18} />
            Download PDF
          </Button>
        </div>
        
        {/* Age-specific Meal Plans */}
        <TabsContent value="1-3">
          <WeeklyMealPlan ageGroup="1-3" dietaryFilters={dietaryFilters} onMealClick={setOpenRecipe} />
        </TabsContent>
        <TabsContent value="4-6">
          <WeeklyMealPlan ageGroup="4-6" dietaryFilters={dietaryFilters} onMealClick={setOpenRecipe} />
        </TabsContent>
        <TabsContent value="7-9">
          <WeeklyMealPlan ageGroup="7-9" dietaryFilters={dietaryFilters} onMealClick={setOpenRecipe} />
        </TabsContent>
      </Tabs>

      {/* Parent Tips Section */}
      <div className="bg-accent rounded-lg p-6 mt-8 mb-12 no-print">
        <h3 className="font-bold text-xl mb-4">Tips for Parents</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <p className="text-lg font-medium">🍽️ Tip: Batch cook and freeze toddler meals!</p>
              <p className="text-gray-600 mt-2">Save time by preparing several meals at once and freezing them in portion-sized containers.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-lg font-medium">🌈 Include colorful fruits to increase interest</p>
              <p className="text-gray-600 mt-2">Kids eat with their eyes first! A colorful plate is more likely to attract their attention.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <p className="text-lg font-medium">🔄 Rotate new foods with familiar favorites</p>
              <p className="text-gray-600 mt-2">Introduce one new food alongside foods your child already enjoys to increase acceptance.</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recipe Modal */}
      <MealModal mealId={openRecipe} onClose={() => setOpenRecipe(null)} />
    </div>
  );
};

export default MealPlansPage;
