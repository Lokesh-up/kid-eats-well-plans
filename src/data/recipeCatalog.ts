// Single normalized recipe catalog used by the planner, recipe search,
// grocery list, kitchen matcher and AI fallback.
import { Recipe, recipesData } from './recipes';
import { recipes1to3, recipes4to6, recipes7to9 } from './recipesByAge';
import { resolveRecipeImage } from '@/lib/recipeImages';
import { estimateNutrition, NutritionEstimate } from '@/lib/nutrition';

export type AgeGroup = '1-3' | '4-6' | '7-10';
export type MealSlot = 'breakfast' | 'lunch' | 'snack' | 'dinner';
export type Preference = 'vegetarian' | 'eggitarian' | 'non-vegetarian';
export type Restriction = 'dairy-free' | 'gluten-free' | 'nut-free';
export type Goal = 'quick' | 'lunchbox' | 'variety' | 'budget';

export const AGE_GROUPS: { value: AgeGroup; label: string }[] = [
  { value: '1-3', label: 'Ages 1–3 (Toddlers)' },
  { value: '4-6', label: 'Ages 4–6 (Preschool)' },
  { value: '7-10', label: 'Ages 7–10 (School age)' },
];

export const MEAL_SLOTS: { value: MealSlot; label: string }[] = [
  { value: 'breakfast', label: 'Breakfast' },
  { value: 'lunch', label: 'Lunch' },
  { value: 'snack', label: 'Snack' },
  { value: 'dinner', label: 'Dinner' },
];

export const PREFERENCES: { value: Preference; label: string }[] = [
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'eggitarian', label: 'Eggitarian' },
  { value: 'non-vegetarian', label: 'Non-vegetarian' },
];

export const RESTRICTIONS: { value: Restriction; label: string }[] = [
  { value: 'dairy-free', label: 'Dairy-free' },
  { value: 'gluten-free', label: 'Gluten-free' },
  { value: 'nut-free', label: 'Nut-free' },
];

export const GOALS: { value: Goal; label: string; hint: string }[] = [
  { value: 'quick', label: 'Quick meals', hint: 'Ready in about 20 minutes' },
  { value: 'lunchbox', label: 'Lunchbox-friendly', hint: 'Travels well, eaten cold or warm' },
  { value: 'variety', label: 'Balanced variety', hint: 'Mix of grains, protein and veggies' },
  { value: 'budget', label: 'Budget-friendly', hint: 'Everyday, low-cost ingredients' },
];

export const DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export interface CatalogRecipe {
  id: string;
  title: string;
  image: string;
  slot: MealSlot;
  originalMealType: string;
  ageGroups: AgeGroup[];
  prepTime: number;
  cookTime: number;
  totalTime: number;
  difficulty: string;
  servings: number;
  ingredients: string[];
  steps: string[];
  tags: string[];
  nutritionTags: string[];
  parentTips: string[];
  preference: Preference;
  restrictions: Restriction[];
  goals: Goal[];
  nutrition: NutritionEstimate;
  videoUrl: string;
}

const NON_VEG = /chicken|mutton|keema|fish|prawn|meat|lamb|egg/i;
const MEAT = /chicken|mutton|keema|fish|prawn|meat|lamb/i;
const EGG = /\begg|omelette|bhurji|anda/i;
const DAIRY = /milk|curd|dahi|yogurt|yoghurt|ghee|butter|paneer|cheese|cream|malai|khoya|buttermilk|lassi/i;
const GLUTEN = /wheat|atta|maida|flour|roti|chapati|paratha|bread|pav|bun|naan|puri|suji|sooji|rava|semolina|pasta|noodle|vermicelli|dalia|sevi?an|rusk|biscuit|barley|samosa|toast/i;
const NUTS = /peanut|almond|cashew|walnut|pista|nut\b|nuts|badam|kaju|mungphali/i;
const PRICEY = /paneer|cashew|almond|walnut|pista|butter|cream|khoya|mutton|prawn|chicken|fish/i;
const NOT_LUNCHBOX = /soup|broth|puree|mash|water|juice|kheer|curry|rasam|sambar/i;

const slotFor = (mealType: string): MealSlot => {
  const t = (mealType || '').toLowerCase();
  if (t.includes('breakfast')) return 'breakfast';
  if (t.includes('lunch')) return 'lunch';
  if (t.includes('dinner')) return 'dinner';
  return 'snack';
};

const ageFor = (groups: string[] | undefined): AgeGroup[] => {
  const mapped = (groups ?? []).map((g) => (g === '7-9' ? '7-10' : g)) as AgeGroup[];
  const valid = mapped.filter((g) => g === '1-3' || g === '4-6' || g === '7-10');
  return valid.length ? Array.from(new Set(valid)) : ['4-6'];
};

function normalize(raw: Recipe): CatalogRecipe {
  const text = `${raw.title} ${raw.ingredients.join(' ')} ${raw.tags.join(' ')} ${(raw.dietaryNeeds ?? []).join(' ')}`;
  const declaredNonVeg = (raw.dietaryNeeds ?? []).includes('non-vegetarian');

  let preference: Preference = 'vegetarian';
  if (MEAT.test(text) || (declaredNonVeg && !EGG.test(text))) preference = 'non-vegetarian';
  else if (EGG.test(text)) preference = 'eggitarian';

  const declared = raw.dietaryNeeds ?? [];
  const restrictions: Restriction[] = [];
  if (!DAIRY.test(text) || declared.includes('vegan') || declared.includes('dairy-free')) restrictions.push('dairy-free');
  if (!GLUTEN.test(text) || declared.includes('gluten-free')) restrictions.push('gluten-free');
  if (!NUTS.test(text)) restrictions.push('nut-free');

  const prepTime = Number(raw.prepTime) || 5;
  const cookTime = Number(raw.cookTime) || 0;
  const totalTime = prepTime + cookTime;
  const servings = raw.servings || 2;

  const goals: Goal[] = [];
  if (totalTime <= 20 || raw.tags.includes('quick') || raw.tags.includes('no-cook')) goals.push('quick');
  if (!NOT_LUNCHBOX.test(raw.title) && (raw.slotHintLunchbox ?? true)) goals.push('lunchbox');
  if (!PRICEY.test(text) || raw.tags.includes('budget')) goals.push('budget');
  goals.push('variety');

  return {
    id: raw.id,
    title: raw.title,
    image: resolveRecipeImage(raw),
    slot: slotFor(raw.mealType),
    originalMealType: raw.mealType,
    ageGroups: ageFor(raw.ageGroups),
    prepTime,
    cookTime,
    totalTime,
    difficulty: raw.difficulty ?? 'easy',
    servings,
    ingredients: raw.ingredients,
    steps: raw.steps,
    tags: raw.tags ?? [],
    nutritionTags: raw.nutritionTags ?? [],
    parentTips: raw.parentTips ?? [],
    preference,
    restrictions,
    goals,
    nutrition: estimateNutrition(raw.ingredients, servings),
    videoUrl: `https://www.youtube.com/results?search_query=${encodeURIComponent(`${raw.title} recipe indian`)}`,
  };
}

const seen = new Set<string>();
export const allRecipes: CatalogRecipe[] = [
  ...recipes1to3,
  ...recipes4to6,
  ...recipes7to9,
  ...recipesData,
]
  .filter((r) => {
    if (!r?.id || seen.has(r.id)) return false;
    seen.add(r.id);
    return true;
  })
  .map(normalize);

export const recipeById = (id: string | null | undefined): CatalogRecipe | undefined =>
  id ? allRecipes.find((r) => r.id === id) : undefined;

/** Every distinct ingredient name in the catalog, cleaned up for the kitchen matcher. */
export const ingredientKeywords: string[] = (() => {
  const counts = new Map<string, number>();
  for (const recipe of allRecipes) {
    for (const name of recipe.ingredients.map(cleanIngredientName)) {
      if (!name || name.length < 3) continue;
      counts.set(name, (counts.get(name) ?? 0) + 1);
    }
  }
  return Array.from(counts.entries())
    .filter(([, count]) => count >= 3)
    .sort((a, b) => b[1] - a[1])
    .map(([name]) => name);
})();

/** Strip quantities/units from an ingredient line: "1/2 cup moong dal" -> "moong dal". */
export function cleanIngredientName(line: string): string {
  return line
    .toLowerCase()
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[0-9]+([./][0-9]+)?/g, ' ')
    .replace(/\b(cup|cups|tsp|tbsp|teaspoon|tablespoon|gm|gms|g|kg|ml|litre|liter|l|pinch|handful|nos?|piece|pieces|small|medium|large|big|few|as|per|to|taste|chopped|diced|grated|boiled|sliced|finely|fresh|ripe|optional|for|of|and|or|½|¼|¾)\b/g, ' ')
    .replace(/[^a-z\s-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
