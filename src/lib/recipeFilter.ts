import {
  AgeGroup,
  CatalogRecipe,
  Goal,
  MealSlot,
  Preference,
  Restriction,
  allRecipes,
  cleanIngredientName,
} from '@/data/recipeCatalog';

export interface RecipeQuery {
  search?: string;
  ageGroup?: AgeGroup | 'all';
  slots?: MealSlot[];
  maxTime?: number | null;
  preference?: Preference | 'all';
  restrictions?: Restriction[];
  goals?: Goal[];
  tags?: string[];
}

const PREFERENCE_ALLOWS: Record<Preference, Preference[]> = {
  vegetarian: ['vegetarian'],
  eggitarian: ['vegetarian', 'eggitarian'],
  'non-vegetarian': ['vegetarian', 'eggitarian', 'non-vegetarian'],
};

/** Single filtering engine shared by the planner, recipe search and AI fallback. */
export function filterRecipes(query: RecipeQuery, source: CatalogRecipe[] = allRecipes): CatalogRecipe[] {
  const search = query.search?.trim().toLowerCase() ?? '';

  return source.filter((recipe) => {
    if (search) {
      const haystack = `${recipe.title} ${recipe.ingredients.join(' ')} ${recipe.tags.join(' ')}`.toLowerCase();
      if (!haystack.includes(search)) return false;
    }
    if (query.ageGroup && query.ageGroup !== 'all' && !recipe.ageGroups.includes(query.ageGroup)) return false;
    if (query.slots?.length && !query.slots.includes(recipe.slot)) return false;
    if (query.maxTime && recipe.totalTime > query.maxTime) return false;
    if (query.preference && query.preference !== 'all' && !PREFERENCE_ALLOWS[query.preference].includes(recipe.preference)) {
      return false;
    }
    if (query.restrictions?.length && !query.restrictions.every((r) => recipe.restrictions.includes(r))) return false;
    if (query.goals?.length && !query.goals.some((g) => recipe.goals.includes(g))) return false;
    if (query.tags?.length && !query.tags.every((t) => recipe.tags.includes(t))) return false;
    return true;
  });
}

/** Rank recipes by how many of the given kitchen ingredients they use. */
export function matchByIngredients(available: string[], source: CatalogRecipe[] = allRecipes) {
  const have = available.map((i) => i.toLowerCase().trim()).filter(Boolean);
  if (!have.length) return [];

  return source
    .map((recipe) => {
      const names = recipe.ingredients.map(cleanIngredientName);
      const matched = names.filter((name) => have.some((h) => name.includes(h) || h.includes(name)));
      const missing = recipe.ingredients.filter((_, i) => !matched.includes(names[i]));
      return { recipe, matchedCount: matched.length, missing, ratio: matched.length / Math.max(1, names.length) };
    })
    .filter((r) => r.matchedCount > 0)
    .sort((a, b) => b.ratio - a.ratio || b.matchedCount - a.matchedCount)
    .slice(0, 24);
}
