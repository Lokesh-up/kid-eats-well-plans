// Maps recipe ids/titles to real image files that exist in /public/images.
// The original dataset referenced `src/assets/images/...` paths which never
// resolve in the browser, so everything is remapped here in one place.

const EXISTING = [
  'aloo-paratha',
  'banana-pancake',
  'besan-chilla',
  'chicken-upma',
  'dal-chawal',
  'dalia-kheer',
  'egg-paratha',
  'fish-paratha',
  'fruit-chaat',
  'keema-dosa',
  'poha',
  'rajma-chawal',
  'roti-sabzi',
  'sabudana-khichdi',
  'upma',
  'vegetable-pulao',
  'generic-rice-dal',
  'generic-idli-dosa',
  'generic-puree-soup',
  'generic-chaat-snack',
  'generic-chicken-curry',
  'generic-curd-rice',
  'generic-biryani',
  'generic-porridge',
  'generic-veg-curry',
  'generic-fish',
];

const EXISTING_SET = new Set(EXISTING);

/** keyword -> image basename, checked in order */
const RULES: [RegExp, string][] = [
  [/paratha/, 'aloo-paratha'],
  [/pancake/, 'banana-pancake'],
  [/chilla|cheela|besan/, 'besan-chilla'],
  [/poha/, 'poha'],
  [/upma/, 'upma'],
  [/rajma|chole|chana/, 'rajma-chawal'],
  [/kheer|halwa|custard|sheera|porridge|dalia|oats|milk|sooji/, 'generic-porridge'],
  [/sabudana/, 'sabudana-khichdi'],
  [/pulao|biryani|fried-rice/, 'generic-biryani'],
  [/curd-rice|dahi|yogurt|raita|lassi/, 'generic-curd-rice'],
  [/idli|dosa|uttapam|appam|vada/, 'generic-idli-dosa'],
  [/puree|mash|broth|soup|water|juice/, 'generic-puree-soup'],
  [/chaat|bhel|sev|tikki|pakora|samosa|cutlet|nugget|popcorn|roll|sandwich|toast|bread|dhokla|corn|sprout/, 'generic-chaat-snack'],
  [/fish|prawn/, 'generic-fish'],
  [/keema|mutton/, 'keema-dosa'],
  [/chicken/, 'generic-chicken-curry'],
  [/egg|omelette|bhurji/, 'egg-paratha'],
  [/khichdi|dal|sambar|rasam|curry-rice|rice/, 'generic-rice-dal'],
  [/fruit|banana|apple|mango|papaya|salad|chikoo|beetroot|carrot/, 'fruit-chaat'],
  [/roti|chapati|sabzi|gobi|paneer|veg/, 'generic-veg-curry'],
];

export const FALLBACK_IMAGE = '/images/generic-veg-curry.jpg';

/** Resolve any recipe image reference to a file that actually exists. */
export function resolveRecipeImage(recipe: { id: string; title: string; image?: string }): string {
  const raw = recipe.image ?? '';
  const fromPath = raw.split('/').pop()?.replace(/\.(jpg|jpeg|png|webp)$/i, '') ?? '';

  for (const candidate of [fromPath, fromPath.replace(/-(46|79|13)$/, ''), recipe.id]) {
    if (candidate && EXISTING_SET.has(candidate)) return `/images/${candidate}.jpg`;
  }

  const haystack = `${recipe.id} ${fromPath} ${recipe.title}`.toLowerCase().replace(/\s+/g, '-');
  for (const [pattern, file] of RULES) {
    if (pattern.test(haystack)) return `/images/${file}.jpg`;
  }
  return FALLBACK_IMAGE;
}
