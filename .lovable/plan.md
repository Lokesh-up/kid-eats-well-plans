# Kid Eats Well Plans — full upgrade

Keeps the current warm/pastel identity, the 150 Indian recipes, tips content and existing cards. Nothing is thrown away; pages get rebuilt on top of the same data.

## What you'll get

**Home** — same "Healthy Kids, Happy Parents" message, with a big "Create My Meal Plan" button, a value section (planning, recipes, grocery list, saved plans) and a 4-step "How it works".

**Meal Planner (main feature)** — pick age group (1–3, 4–6, 7–10), food preference (veg / non-veg / eggitarian), restrictions (dairy-free, gluten-free, nut-free) and goals (quick, lunchbox-friendly, balanced variety, budget). "Generate My Plan" fills a 7-day grid with Breakfast, Lunch, Snack, Dinner. Each meal has View Recipe, Replace Meal (shows matching alternatives), Save Recipe and Add to Grocery List. Regenerating keeps your choices.

**Recipes** — search plus filters for age, meal type, prep time, veg/egg/chicken/fish and restrictions. Recipe detail shows photo, prep/cook time, servings, ingredients, steps, tags and estimated nutrition (calories, protein, carbs, fat, fiber) with a clear "general estimate, not medical advice" note. Actions: Save, Add to Meal Plan, Add ingredients to Grocery List.

**Grocery List** — built automatically from the active week, grouped into Vegetables, Fruits, Grains, Protein, Dairy, Pantry/Other, duplicates merged, tick items off, add from any recipe, clear or rebuild.

**Saved Recipes** — a "My Saved" area; saved to your account when signed in, kept on the device for guests.

**Child profiles & dashboard** — create children (name, age group, food preference, restrictions, goals), pick one when generating a plan. Dashboard shows the chosen child, today's meals, the current week, saved recipes, grocery list and previous plans.

**Accounts** — sign up / log in / log out with Lovable Cloud, protected dashboard. Guests can still browse recipes and use the planner locally.

**Previous plans** — every generated week is saved with its date range and can be reused.

**What's in my kitchen?** — tick or type ingredients you have; matching recipes are ranked by how much you already have.

**AI planner** — describe a request in plain words ("7-day vegetarian plan for my 6-year-old, under 20 minutes, lunchbox-friendly"). Runs through a secure server-side AI call; if AI is unavailable it falls back to the same rule-based matching so the feature always works. No keys in the browser.

**Tips** — categories (Nutrition, Lunchbox, Picky Eating, Quick Meals, Budget) with search.

**Theme & mobile** — Light / Dark / System switch with a purpose-designed dark palette, plus a bottom navigation bar on phones (Home, Planner, Recipes, Grocery, Profile) and small-screen polish everywhere.

## Technical notes

- **Data fix first**: recipe images point at `src/assets/images/...`, which never loads in the browser. Remap all recipe images to the real files in `public/images/` with a shared resolver and a friendly fallback, and add nutrition estimates + a normalized `dietaryNeeds`/preference field to the recipe type.
- **Shared domain layer** (`src/lib/…`, `src/hooks/…`): `recipeFilter.ts` (single filtering/matching engine used by planner, recipes page, replace-meal, kitchen match and AI fallback), `planGenerator.ts`, `groceryList.ts` (ingredient parsing, category mapping, quantity merge).
- **State**: React Context providers for theme, auth/session, active plan, saved recipes, grocery list, child profiles. Guest state in `localStorage`; signed-in state synced to Cloud.
- **Backend (Lovable Cloud)**: enable Cloud + email auth. Tables `profiles`, `children`, `saved_recipes`, `meal_plans`, `grocery_items` — all RLS-scoped to `auth.uid()` with explicit grants. One edge function `ai-meal-planner` calling the AI gateway (streamed), with rule-based fallback on any error.
- **Routes**: `/`, `/planner`, `/recipes`, `/recipes/:id`, `/grocery`, `/kitchen`, `/ai-planner`, `/saved`, `/tips`, `/tips/:id`, `/dashboard`, `/profiles`, `/auth`, `/about`. `/meal-plans` redirects to `/planner`.
- Recipe detail becomes a real page (modal kept for in-planner peeking), TypeScript errors cleaned, flows checked in the browser at the end.

## Assumptions

- Age labels stay 1–3 / 4–6 / 7–10 in the UI; the existing `7-9` dataset maps to 7–10.
- Nutrition numbers are computed estimates from ingredients, labelled as estimates.
- Recipes keep their current Indian, low-cost, minimal-ingredient character.
