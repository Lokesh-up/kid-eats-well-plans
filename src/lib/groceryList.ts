import { CatalogRecipe, cleanIngredientName } from '@/data/recipeCatalog';

export const GROCERY_CATEGORIES = ['Vegetables', 'Fruits', 'Grains', 'Protein', 'Dairy', 'Pantry/Other'] as const;
export type GroceryCategory = (typeof GROCERY_CATEGORIES)[number];

export interface GroceryItem {
  id: string;
  name: string;
  category: GroceryCategory;
  quantity: string;
  purchased: boolean;
}

const CATEGORY_RULES: [RegExp, GroceryCategory][] = [
  [/banana|apple|mango|papaya|grape|orange|chikoo|dates|pomegranate|fruit|lemon/, 'Fruits'],
  [/onion|tomato|potato|aloo|carrot|beans|peas|spinach|palak|cabbage|gourd|beetroot|capsicum|cauliflower|gobi|cucumber|coriander|curry leaves|ginger|garlic|chilli|chili|vegetable|veg|corn|methi|pumpkin|brinjal|bhindi|okra|mint/, 'Vegetables'],
  [/rice|poha|atta|flour|maida|suji|sooji|rava|semolina|dalia|oats|sabudana|vermicelli|pasta|noodle|bread|pav|roti|idli|dosa|wheat|barley/, 'Grains'],
  [/dal|moong|masoor|chana|rajma|lentil|sprout|besan|chole|chicken|mutton|keema|fish|prawn|egg|paneer|soya|tofu/, 'Protein'],
  [/milk|curd|dahi|yogurt|ghee|butter|cheese|cream|malai|khoya|buttermilk/, 'Dairy'],
];

export function categorize(name: string): GroceryCategory {
  const n = name.toLowerCase();
  for (const [pattern, category] of CATEGORY_RULES) {
    if (pattern.test(n)) return category;
  }
  return 'Pantry/Other';
}

const titleCase = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

/** Merge ingredient lines from many recipes into a de-duplicated shopping list. */
export function buildGroceryItems(recipes: CatalogRecipe[]): GroceryItem[] {
  const merged = new Map<string, { name: string; parts: string[] }>();

  for (const recipe of recipes) {
    for (const line of recipe.ingredients) {
      const name = cleanIngredientName(line);
      if (!name) continue;
      const entry = merged.get(name) ?? { name, parts: [] };
      const quantity = line.replace(/\s+/g, ' ').trim();
      if (!entry.parts.includes(quantity)) entry.parts.push(quantity);
      merged.set(name, entry);
    }
  }

  return Array.from(merged.values())
    .map(({ name, parts }) => ({
      id: name.replace(/\s+/g, '-'),
      name: titleCase(name),
      category: categorize(name),
      quantity: parts.length > 1 ? `${parts.length} recipes` : parts[0],
      purchased: false,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function groupByCategory(items: GroceryItem[]): Record<GroceryCategory, GroceryItem[]> {
  const grouped = {} as Record<GroceryCategory, GroceryItem[]>;
  for (const category of GROCERY_CATEGORIES) grouped[category] = [];
  for (const item of items) grouped[item.category].push(item);
  return grouped;
}
