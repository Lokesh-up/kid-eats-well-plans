// Rough, ingredient-based nutrition estimates. These are general estimates for
// guidance only and are always presented to parents as such — never as medical
// or dietetic advice.

export type NutritionEstimate = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
};

type Profile = { calories: number; protein: number; carbs: number; fat: number; fiber: number };

const INGREDIENT_PROFILES: [RegExp, Profile][] = [
  [/chicken|mutton|keema/, { calories: 120, protein: 14, carbs: 0, fat: 6, fiber: 0 }],
  [/fish|prawn/, { calories: 100, protein: 13, carbs: 0, fat: 4, fiber: 0 }],
  [/egg/, { calories: 70, protein: 6, carbs: 1, fat: 5, fiber: 0 }],
  [/paneer|cheese/, { calories: 90, protein: 6, carbs: 2, fat: 7, fiber: 0 }],
  [/dal|moong|masoor|chana|rajma|lentil|sprout|besan|chole/, { calories: 90, protein: 6, carbs: 14, fat: 1, fiber: 4 }],
  [/rice|poha|sooji|semolina|rava|dalia|oats|sabudana|vermicelli|pasta|noodle/, { calories: 110, protein: 2, carbs: 24, fat: 0.5, fiber: 1 }],
  [/flour|atta|maida|roti|chapati|bread|pav|bun/, { calories: 100, protein: 3, carbs: 20, fat: 1, fiber: 2 }],
  [/potato|aloo|sweet potato/, { calories: 70, protein: 2, carbs: 16, fat: 0, fiber: 2 }],
  [/milk|curd|yogurt|dahi|buttermilk/, { calories: 60, protein: 3, carbs: 5, fat: 3, fiber: 0 }],
  [/ghee|oil|butter/, { calories: 45, protein: 0, carbs: 0, fat: 5, fiber: 0 }],
  [/sugar|jaggery|honey/, { calories: 40, protein: 0, carbs: 10, fat: 0, fiber: 0 }],
  [/coconut|peanut|almond|cashew|nut|til|sesame/, { calories: 60, protein: 2, carbs: 3, fat: 5, fiber: 1 }],
  [/banana|apple|mango|papaya|fruit|grape|orange|chikoo|dates/, { calories: 55, protein: 0.5, carbs: 13, fat: 0, fiber: 2 }],
  [/spinach|palak|carrot|beans|peas|tomato|onion|cabbage|gourd|beetroot|capsicum|cauliflower|gobi|cucumber|vegetable|veg/, { calories: 25, protein: 1, carbs: 5, fat: 0, fiber: 2 }],
];

const round = (n: number) => Math.round(n * 10) / 10;

/** Estimate per-serving nutrition from an ingredient list. */
export function estimateNutrition(ingredients: string[], servings = 2): NutritionEstimate {
  const total: Profile = { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 };
  let matched = 0;

  for (const raw of ingredients) {
    const line = raw.toLowerCase();
    const hit = INGREDIENT_PROFILES.find(([pattern]) => pattern.test(line));
    if (!hit) continue;
    matched += 1;
    const [, profile] = hit;
    total.calories += profile.calories;
    total.protein += profile.protein;
    total.carbs += profile.carbs;
    total.fat += profile.fat;
    total.fiber += profile.fiber;
  }

  if (matched === 0) {
    return { calories: 150, protein: 4, carbs: 22, fat: 4, fiber: 2 };
  }

  const per = Math.max(1, servings);
  return {
    calories: Math.round(total.calories / per),
    protein: round(total.protein / per),
    carbs: round(total.carbs / per),
    fat: round(total.fat / per),
    fiber: round(total.fiber / per),
  };
}
