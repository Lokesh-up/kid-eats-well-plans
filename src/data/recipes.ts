
// Indian-style recipes for families with minimal ingredients
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
  videoUrl?: string; // YouTube or cooking video link
}

export const recipesData: Recipe[] = [
  {
    id: 'dal-chawal',
    title: 'Simple Dal Chawal',
    image: 'src/assets/images/dal-chawal.jpg',
    mealType: 'lunch',
    ageGroups: ['1-3', '4-6', '7-10'],
    prepTime: '5',
    cookTime: '20',
    difficulty: 'easy',
    servings: 4,
    ingredients: [
      '1 cup rice',
      '1/2 cup yellow dal (moong/arhar)',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      '1 tsp turmeric',
      '1 tsp salt',
      '2 tbsp oil',
      '1 tsp cumin seeds'
    ],
    steps: [
      'Wash and boil rice with 2 cups water.',
      'In another pot, wash dal and boil with 1 cup water.',
      'Heat oil, add cumin seeds.',
      'Add onions, cook till golden.',
      'Add tomatoes, turmeric, salt.',
      'Mix cooked dal with vegetables.',
      'Serve hot dal over rice.'
    ],
    dietaryNeeds: ['vegetarian', 'gluten-free'],
    tags: ['budget-friendly', 'easy'],
    nutritionTags: ['protein', 'energy'],
    parentTips: [
      'Add ghee on top for extra nutrition',
      'Can be made in pressure cooker for faster cooking',
      'Perfect comfort food for sick days'
    ],
    videoUrl: 'https://youtube.com/watch?v=dal-chawal-recipe'
  },
  {
    id: 'roti-sabzi',
    title: 'Simple Roti with Aloo Sabzi',
    image: 'src/assets/images/roti-sabzi.jpg',
    mealType: 'dinner',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '15',
    difficulty: 'easy',
    servings: 4,
    ingredients: [
      '2 cups wheat flour',
      '3 medium potatoes',
      '1 onion',
      '2 tomatoes',
      '1 tsp turmeric',
      '1 tsp salt',
      '2 tbsp oil',
      'Water as needed'
    ],
    steps: [
      'Mix flour with water to make soft dough.',
      'Boil and cube potatoes.',
      'Heat oil, add chopped onions.',
      'Add tomatoes, cook till soft.',
      'Add potatoes, turmeric, salt.',
      'Cook for 5 minutes.',
      'Roll and cook rotis on tawa.',
      'Serve hot roti with sabzi.'
    ],
    dietaryNeeds: ['vegetarian', 'dairy-free'],
    tags: ['budget-friendly', 'filling'],
    nutritionTags: ['energy', 'fiber'],
    parentTips: [
      'Let kids help roll small rotis',
      'Can add green vegetables for nutrition',
      'Make extra roti for next day breakfast'
    ],
    videoUrl: 'https://youtube.com/watch?v=roti-making-easy'
  },
  {
    id: 'poha',
    title: 'Simple Poha',
    image: 'src/assets/images/poha.jpg',
    mealType: 'breakfast',
    ageGroups: ['4-6', '7-10'],
    prepTime: '5',
    cookTime: '10',
    difficulty: 'easy',
    servings: 3,
    ingredients: [
      '2 cups poha (flattened rice)',
      '1 onion, chopped',
      '1 potato, diced small',
      '1 tsp mustard seeds',
      '1 tsp turmeric',
      'Salt to taste',
      '2 tbsp oil',
      'Fresh coriander leaves'
    ],
    steps: [
      'Wash poha gently, drain water.',
      'Heat oil, add mustard seeds.',
      'Add onions and potato pieces.',
      'Cook till potato is soft.',
      'Add turmeric and salt.',
      'Add washed poha, mix gently.',
      'Cook for 2-3 minutes.',
      'Garnish with coriander.'
    ],
    dietaryNeeds: ['vegetarian', 'gluten-free'],
    tags: ['budget-friendly', 'quick'],
    nutritionTags: ['energy', 'light'],
    parentTips: [
      'Perfect breakfast for busy mornings',
      'Can add peanuts for extra crunch',
      'Squeeze lemon before serving'
    ],
    videoUrl: 'https://youtube.com/watch?v=poha-recipe-easy'
  },
  {
    id: 'rajma-chawal',
    title: 'Rajma Chawal',
    image: 'src/assets/images/rajma-chawal.jpg',
    mealType: 'lunch',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '25',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '1 cup rajma (kidney beans), soaked overnight',
      '1 cup rice',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      '1 tsp garam masala',
      '1 tsp turmeric',
      'Salt to taste',
      '2 tbsp oil'
    ],
    steps: [
      'Pressure cook soaked rajma for 4-5 whistles.',
      'Cook rice separately.',
      'Heat oil, add onions till golden.',
      'Add tomatoes, cook till soft.',
      'Add garam masala, turmeric.',
      'Add cooked rajma with water.',
      'Simmer for 10 minutes.',
      'Serve with rice.'
    ],
    dietaryNeeds: ['vegetarian', 'protein-rich'],
    tags: ['budget-friendly', 'filling'],
    nutritionTags: ['protein', 'iron'],
    parentTips: [
      'Soak rajma overnight for easier cooking',
      'Can be made in larger quantity and stored',
      'Rich source of protein for growing kids'
    ],
    videoUrl: 'https://youtube.com/watch?v=rajma-masala-recipe'
  },
  {
    id: 'chana-chaat',
    title: 'Healthy Chana Chaat',
    image: 'src/assets/images/chana-chaat.jpg',
    mealType: 'snack',
    ageGroups: ['4-6', '7-10'],
    prepTime: '5',
    cookTime: '0',
    difficulty: 'easy',
    servings: 2,
    ingredients: [
      '1 cup boiled chana (chickpeas)',
      '1 cucumber, diced',
      '1 tomato, diced',
      '1 onion, chopped',
      '1 tsp chaat masala',
      'Lemon juice',
      'Salt to taste',
      'Fresh mint leaves'
    ],
    steps: [
      'Mix boiled chana with diced vegetables.',
      'Add chaat masala and salt.',
      'Squeeze lemon juice over mixture.',
      'Garnish with mint leaves.',
      'Mix well and serve immediately.'
    ],
    dietaryNeeds: ['vegetarian', 'protein-rich', 'gluten-free'],
    tags: ['no-cook', 'healthy', 'filling'],
    nutritionTags: ['protein', 'fiber'],
    parentTips: [
      'Can use canned chickpeas for quick preparation',
      'Add grated carrot for extra crunch',
      'Perfect evening snack for hungry kids'
    ],
    videoUrl: 'https://youtube.com/watch?v=chana-chaat-healthy'
  },
  {
    id: 'khichdi',
    title: 'Nutritious Khichdi',
    image: 'src/assets/images/khichdi.jpg',
    mealType: 'dinner',
    ageGroups: ['1-3', '4-6', '7-10'],
    prepTime: '5',
    cookTime: '20',
    difficulty: 'easy',
    servings: 4,
    ingredients: [
      '1 cup rice',
      '1/2 cup moong dal',
      '1 tsp turmeric',
      '1 tsp cumin seeds',
      '2 tbsp ghee',
      'Salt to taste',
      '3 cups water',
      'Mixed vegetables (optional)'
    ],
    steps: [
      'Wash rice and dal together.',
      'Heat ghee, add cumin seeds.',
      'Add rice and dal, stir for 1 minute.',
      'Add water, turmeric, salt.',
      'Add vegetables if using.',
      'Pressure cook for 3-4 whistles.',
      'Let pressure release naturally.',
      'Mix and serve hot with pickle.'
    ],
    dietaryNeeds: ['vegetarian', 'gluten-free', 'easy-digest'],
    tags: ['comfort-food', 'one-pot', 'sick-day'],
    nutritionTags: ['protein', 'easy-digest'],
    parentTips: [
      'Perfect food when kids are unwell',
      'Can add different vegetables each time',
      'Very gentle on stomach'
    ],
    videoUrl: 'https://youtube.com/watch?v=khichdi-recipe-kids'
  },
  {
    id: 'rava-laddu',
    title: 'Simple Rava Laddu',
    image: 'src/assets/images/rava-laddu.jpg',
    mealType: 'dessert',
    ageGroups: ['4-6', '7-10'],
    prepTime: '5',
    cookTime: '10',
    difficulty: 'easy',
    servings: 10,
    ingredients: [
      '1 cup rava (semolina)',
      '1/2 cup sugar powder',
      '1/4 cup ghee',
      '2 tbsp coconut powder',
      '1/4 cup chopped almonds',
      'Pinch of cardamom powder'
    ],
    steps: [
      'Dry roast rava till light golden.',
      'Let it cool completely.',
      'Mix rava with sugar powder.',
      'Add coconut, almonds, cardamom.',
      'Warm ghee slightly.',
      'Add ghee gradually to mixture.',
      'Mix well and form small balls.',
      'Store in airtight container.'
    ],
    dietaryNeeds: ['vegetarian'],
    tags: ['festival-sweet', 'homemade'],
    nutritionTags: ['energy', 'healthy-fat'],
    parentTips: [
      'Kids love to help shape the laddus',
      'Can be made for special occasions',
      'Healthier than store-bought sweets'
    ],
    videoUrl: 'https://youtube.com/watch?v=rava-laddu-easy'
  },
  {
    id: 'banana-lassi',
    title: 'Banana Lassi',
    image: 'src/assets/images/banana-lassi.jpg',
    mealType: 'snack',
    ageGroups: ['1-3', '4-6', '7-10'],
    prepTime: '3',
    cookTime: '0',
    difficulty: 'easy',
    servings: 2,
    ingredients: [
      '2 ripe bananas',
      '1 cup fresh curd/yogurt',
      '2 tbsp sugar or jaggery',
      '1/2 cup cold milk',
      'Pinch of cardamom powder',
      'Ice cubes (optional)'
    ],
    steps: [
      'Peel and chop bananas.',
      'Add all ingredients to blender.',
      'Blend until smooth and frothy.',
      'Add ice if you want it chilled.',
      'Pour into glasses and serve immediately.'
    ],
    dietaryNeeds: ['vegetarian', 'protein-rich'],
    tags: ['no-cook', 'refreshing', 'summer'],
    nutritionTags: ['protein', 'calcium'],
    parentTips: [
      'Perfect summer drink for kids',
      'Can use frozen banana for thicker consistency',
      'Add honey instead of sugar for natural sweetness'
    ],
    videoUrl: 'https://youtube.com/watch?v=banana-lassi-kids'
  }
];
