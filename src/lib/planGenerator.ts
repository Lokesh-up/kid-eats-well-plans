import {
  AgeGroup,
  CatalogRecipe,
  DAYS,
  Goal,
  MEAL_SLOTS,
  MealSlot,
  Preference,
  Restriction,
} from '@/data/recipeCatalog';
import { filterRecipes } from './recipeFilter';

export interface PlanPreferences {
  ageGroup: AgeGroup;
  preference: Preference;
  restrictions: Restriction[];
  goals: Goal[];
}

/** dayIndex -> slot -> recipe id */
export type WeeklyPlan = Record<string, Partial<Record<MealSlot, string>>>;

export const defaultPreferences: PlanPreferences = {
  ageGroup: '4-6',
  preference: 'vegetarian',
  restrictions: [],
  goals: ['variety'],
};

/** Recipes that suit the profile for one slot, loosening filters if too few match. */
export function candidatesForSlot(prefs: PlanPreferences, slot: MealSlot): CatalogRecipe[] {
  const base = { ageGroup: prefs.ageGroup, slots: [slot], preference: prefs.preference, restrictions: prefs.restrictions };

  const withGoals = filterRecipes({ ...base, goals: prefs.goals });
  if (withGoals.length >= 3) return withGoals;

  const withoutGoals = filterRecipes(base);
  if (withoutGoals.length >= 3) return withoutGoals;

  const anyAge = filterRecipes({ ...base, ageGroup: 'all' });
  if (anyAge.length >= 3) return anyAge;

  return filterRecipes({ slots: [slot], ageGroup: 'all', preference: prefs.preference });
}

function shuffle<T>(items: T[], seed: number): T[] {
  const copy = [...items];
  let state = seed || 1;
  for (let i = copy.length - 1; i > 0; i -= 1) {
    state = (state * 1103515245 + 12345) & 0x7fffffff;
    const j = state % (i + 1);
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/** Build a 7-day plan with as little repetition as the matching recipes allow. */
export function generatePlan(prefs: PlanPreferences, seed = Date.now()): WeeklyPlan {
  const plan: WeeklyPlan = {};

  for (const { value: slot } of MEAL_SLOTS) {
    const pool = shuffle(candidatesForSlot(prefs, slot), seed + slot.length);
    DAYS.forEach((_, dayIndex) => {
      plan[dayIndex] = plan[dayIndex] ?? {};
      if (pool.length) plan[dayIndex][slot] = pool[dayIndex % pool.length].id;
    });
  }

  return plan;
}

/** Alternatives for a single planned meal, excluding the one already there. */
export function alternativesFor(prefs: PlanPreferences, slot: MealSlot, currentId?: string): CatalogRecipe[] {
  return candidatesForSlot(prefs, slot)
    .filter((r) => r.id !== currentId)
    .slice(0, 12);
}

export function mondayOf(date = new Date()): string {
  const d = new Date(date);
  const day = (d.getDay() + 6) % 7;
  d.setDate(d.getDate() - day);
  return d.toISOString().slice(0, 10);
}

export function formatWeekRange(weekStart: string): string {
  const start = new Date(weekStart);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  const fmt = (d: Date) => d.toLocaleDateString(undefined, { day: 'numeric', month: 'short' });
  return `${fmt(start)} – ${fmt(end)}`;
}
