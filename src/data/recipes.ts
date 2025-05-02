
// Mock recipe data for the application
export interface Recipe {
  id: string;
  title: string;
  image: string;
  mealType: string;
  ageGroups: string[];
  prepTime: string; // in minutes
  cookTime: string; // in minutes
  difficulty: string;
  servings: number;
  ingredients: string[];
  steps: string[];
  dietaryNeeds: string[];
  tags: string[];
  nutritionTags: string[];
  parentTips: string[];
}

export const recipesData: Recipe[] = [
  {
    id: 'mini-veggie-omelette',
    title: 'Mini Veggie Omelette',
    image: '/placeholder.svg',
    mealType: 'breakfast',
    ageGroups: ['1-3', '4-6'],
    prepTime: '5',
    cookTime: '10',
    difficulty: 'easy',
    servings: 1,
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
    dietaryNeeds: ['gluten-free', 'nut-free'],
    tags: ['picky-eater'],
    nutritionTags: ['protein', 'immunity'],
    parentTips: [
      'Let your toddler help mix the eggs!',
      'You can substitute any vegetables your child enjoys.',
      'Make ahead and refrigerate for up to 2 days.'
    ]
  },
  {
    id: 'rainbow-pancakes',
    title: 'Rainbow Pancakes',
    image: '/placeholder.svg',
    mealType: 'breakfast',
    ageGroups: ['4-6', '7-10'],
    prepTime: '15',
    cookTime: '15',
    difficulty: 'medium',
    servings: 4,
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
    dietaryNeeds: ['nut-free'],
    tags: ['picky-eater'],
    nutritionTags: ['energy', 'fiber'],
    parentTips: [
      'Let kids choose which color pancake they want next!',
      'Use natural food coloring made from fruits and vegetables if preferred.',
      'These freeze well for busy mornings.'
    ]
  },
  {
    id: 'breakfast-burrito',
    title: 'Breakfast Burrito',
    image: '/placeholder.svg',
    mealType: 'breakfast',
    ageGroups: ['7-10'],
    prepTime: '10',
    cookTime: '10',
    difficulty: 'easy',
    servings: 1,
    ingredients: [
      'Whole wheat tortilla',
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
    dietaryNeeds: ['nut-free'],
    tags: ['lunchbox', 'freezer-friendly'],
    nutritionTags: ['protein', 'energy'],
    parentTips: [
      'Prep ingredients the night before for a quick morning assembly.',
      'Let kids assemble their own burrito with their favorite toppings.',
      'Wrap in foil for an on-the-go breakfast.'
    ]
  },
  {
    id: 'veggie-pita-pockets',
    title: 'Veggie Pita Pockets',
    image: '/placeholder.svg',
    mealType: 'lunch',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '0',
    difficulty: 'easy',
    servings: 2,
    ingredients: [
      'Whole wheat pita pockets',
      'Hummus',
      'Grated carrots',
      'Cucumber slices',
      'Cherry tomatoes, halved',
      'Shredded lettuce',
      'Optional: diced avocado'
    ],
    steps: [
      'Cut pita pockets in half to create two pouches.',
      'Spread hummus inside each pita half.',
      'Fill with vegetables and avocado if using.',
      'Serve immediately or wrap well for lunchboxes.'
    ],
    dietaryNeeds: ['vegetarian', 'dairy-free', 'nut-free'],
    tags: ['no-cook', 'lunchbox', 'picky-eater'],
    nutritionTags: ['fiber'],
    parentTips: [
      'Let kids choose their fillings from a selection of prepared veggies.',
      'For picky eaters, start with just one or two veggies they already enjoy.',
      'Add a protein like falafel or grilled chicken for a more substantial meal.'
    ]
  },
  {
    id: 'apple-sandwich',
    title: 'Apple Sandwich Stackers',
    image: '/placeholder.svg',
    mealType: 'snack',
    ageGroups: ['1-3', '4-6', '7-10'],
    prepTime: '5',
    cookTime: '0',
    difficulty: 'easy',
    servings: 2,
    ingredients: [
      '1 apple, cored and sliced into rounds',
      '2 tbsp nut or seed butter',
      '1 tbsp granola',
      'Sprinkle of cinnamon',
      'Optional: raisins, mini chocolate chips'
    ],
    steps: [
      'Slice apple into rounds about 1/4 inch thick.',
      'Spread nut/seed butter on half of the apple slices.',
      'Sprinkle with granola and cinnamon.',
      'Add optional toppings if desired.',
      'Top with remaining apple slices to create sandwiches.'
    ],
    dietaryNeeds: ['gluten-free', 'vegetarian', 'dairy-free'],
    tags: ['no-cook', 'picky-eater'],
    nutritionTags: ['fiber', 'energy'],
    parentTips: [
      'Use sunflower seed butter for school lunch boxes with nut restrictions.',
      'To prevent browning, brush apple slices with lemon juice.',
      'Let children assemble their own apple sandwiches!'
    ]
  },
  {
    id: 'chicken-veggie-pasta',
    title: 'One-Pot Chicken & Veggie Pasta',
    image: '/placeholder.svg',
    mealType: 'dinner',
    ageGroups: ['1-3', '4-6', '7-10'],
    prepTime: '10',
    cookTime: '20',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '2 cups whole wheat pasta (small shapes work best)',
      '1 cup diced cooked chicken',
      '1 cup mixed vegetables (peas, carrots, broccoli)',
      '2 tbsp olive oil',
      '1 small onion, diced finely',
      '1 garlic clove, minced',
      '2 cups low-sodium chicken broth',
      '1/2 cup grated parmesan cheese',
      'Salt and pepper to taste'
    ],
    steps: [
      'Heat olive oil in a large pot over medium heat.',
      'Sauté onion until translucent, about 3 minutes.',
      'Add garlic and cook for 30 seconds until fragrant.',
      'Add pasta, chicken, vegetables, and broth.',
      'Bring to a boil, then reduce heat and simmer covered for about 10-12 minutes until pasta is tender.',
      'Stir in parmesan cheese until melted.',
      'Season lightly with salt and pepper if needed.'
    ],
    dietaryNeeds: ['nut-free'],
    tags: ['freezer-friendly'],
    nutritionTags: ['protein', 'energy'],
    parentTips: [
      'Use leftover rotisserie chicken for a quicker prep time.',
      'Frozen mixed vegetables work great in this recipe.',
      'For picky eaters, choose pasta shapes they enjoy.'
    ]
  },
  {
    id: 'banana-oat-cookies',
    title: '3-Ingredient Banana Oat Cookies',
    image: '/placeholder.svg',
    mealType: 'dessert',
    ageGroups: ['1-3', '4-6', '7-10'],
    prepTime: '5',
    cookTime: '15',
    difficulty: 'easy',
    servings: 12,
    ingredients: [
      '2 ripe bananas, mashed',
      '1 cup rolled oats',
      '1/4 cup mini chocolate chips or raisins',
      'Optional: 1/2 tsp cinnamon or vanilla extract'
    ],
    steps: [
      'Preheat oven to 350°F (175°C).',
      'Mash bananas in a bowl.',
      'Stir in oats and chocolate chips or raisins.',
      'Add optional flavorings if desired.',
      'Drop spoonfuls of mixture onto a lined baking sheet.',
      'Flatten slightly with the back of a spoon.',
      'Bake for 12-15 minutes until golden.',
      'Allow to cool before serving.'
    ],
    dietaryNeeds: ['vegetarian', 'dairy-free', 'nut-free'],
    tags: ['picky-eater', 'freezer-friendly'],
    nutritionTags: ['fiber', 'energy'],
    parentTips: [
      'These make great breakfast cookies too!',
      'Store in an airtight container for up to 3 days.',
      'Let kids mash the bananas and mix the ingredients.'
    ]
  },
  {
    id: 'toddler-smoothie',
    title: 'Hidden Veggie Smoothie',
    image: '/placeholder.svg',
    mealType: 'snack',
    ageGroups: ['1-3', '4-6'],
    prepTime: '5',
    cookTime: '0',
    difficulty: 'easy',
    servings: 2,
    ingredients: [
      '1 cup frozen berries',
      '1 banana',
      '1/2 cup spinach or kale (mild tasting)',
      '1 cup milk (dairy or plant-based)',
      '1 tbsp ground flaxseed (optional)',
      '1 tsp honey (for kids over 1 year)'
    ],
    steps: [
      'Add all ingredients to a blender.',
      'Blend until smooth and creamy.',
      'Add more liquid if needed for desired consistency.',
      'Serve immediately.'
    ],
    dietaryNeeds: ['gluten-free'],
    tags: ['no-cook', 'picky-eater'],
    nutritionTags: ['fiber', 'immunity'],
    parentTips: [
      'Use frozen fruits instead of ice for a creamier texture.',
      'Serve in a fun cup with a colorful straw to increase appeal.',
      'Let kids pick one ingredient to add for a sense of ownership.'
    ]
  }
];
