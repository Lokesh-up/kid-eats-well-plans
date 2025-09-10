
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
  // ==================== BREAKFAST RECIPES (6 VEG + 4 NON-VEG) ====================
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
    id: 'upma',
    title: 'Rava Upma',
    image: 'src/assets/images/upma.jpg',
    mealType: 'breakfast',
    ageGroups: ['4-6', '7-10'],
    prepTime: '5',
    cookTime: '15',
    difficulty: 'easy',
    servings: 4,
    ingredients: [
      '1 cup rava (semolina)',
      '1 onion, chopped',
      '1 tsp mustard seeds',
      '1 tsp urad dal',
      '2 green chilies, chopped',
      '2 cups water',
      'Salt to taste',
      '2 tbsp oil'
    ],
    steps: [
      'Dry roast rava till light golden.',
      'Heat oil, add mustard seeds and urad dal.',
      'Add onions and green chilies.',
      'Cook till onions are soft.',
      'Add water and salt, bring to boil.',
      'Slowly add roasted rava while stirring.',
      'Cook covered for 5 minutes.',
      'Serve hot with pickle.'
    ],
    dietaryNeeds: ['vegetarian'],
    tags: ['budget-friendly', 'filling'],
    nutritionTags: ['energy', 'fiber'],
    parentTips: [
      'Roast rava well to avoid lumps',
      'Can add vegetables for nutrition',
      'Keep stirring while adding rava'
    ],
    videoUrl: 'https://youtube.com/watch?v=upma-recipe'
  },
  {
    id: 'dalia-kheer',
    title: 'Sweet Dalia Kheer',
    image: 'src/assets/images/dalia-kheer.jpg',
    mealType: 'breakfast',
    ageGroups: ['1-3', '4-6', '7-10'],
    prepTime: '5',
    cookTime: '20',
    difficulty: 'easy',
    servings: 4,
    ingredients: [
      '1/2 cup dalia (broken wheat)',
      '2 cups milk',
      '3 tbsp jaggery or sugar',
      '2 tbsp ghee',
      '4-5 almonds, chopped',
      'Pinch of cardamom powder'
    ],
    steps: [
      'Dry roast dalia till golden.',
      'Heat ghee, add roasted dalia.',
      'Add milk and bring to boil.',
      'Cook till dalia is soft.',
      'Add jaggery and cardamom.',
      'Cook till thick consistency.',
      'Garnish with almonds.',
      'Serve warm.'
    ],
    dietaryNeeds: ['vegetarian'],
    tags: ['sweet', 'nutritious'],
    nutritionTags: ['calcium', 'fiber'],
    parentTips: [
      'Healthy breakfast option',
      'Can be made with fruits',
      'Good source of fiber for kids'
    ],
    videoUrl: 'https://youtube.com/watch?v=dalia-kheer'
  },
  {
    id: 'aloo-paratha',
    title: 'Aloo Paratha',
    image: 'src/assets/images/aloo-paratha.jpg',
    mealType: 'breakfast',
    ageGroups: ['4-6', '7-10'],
    prepTime: '15',
    cookTime: '20',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '2 cups wheat flour',
      '3 boiled potatoes, mashed',
      '1 tsp cumin seeds',
      '1 green chili, chopped',
      'Salt to taste',
      'Water as needed',
      'Ghee for cooking'
    ],
    steps: [
      'Make soft dough with flour and water.',
      'Mix mashed potatoes with cumin, chili, salt.',
      'Roll small dough ball, add potato filling.',
      'Seal and roll gently into paratha.',
      'Cook on hot tawa with ghee.',
      'Cook both sides till golden spots.',
      'Serve hot with curd.',
      'Best enjoyed fresh.'
    ],
    dietaryNeeds: ['vegetarian'],
    tags: ['filling', 'traditional'],
    nutritionTags: ['energy', 'carbohydrates'],
    parentTips: [
      'Kids love the potato filling',
      'Make parathas smaller for kids',
      'Serve with fresh curd'
    ],
    videoUrl: 'https://youtube.com/watch?v=aloo-paratha'
  },
  {
    id: 'besan-chilla',
    title: 'Besan Chilla',
    image: 'src/assets/images/besan-chilla.jpg',
    mealType: 'breakfast',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '15',
    difficulty: 'easy',
    servings: 3,
    ingredients: [
      '1 cup besan (gram flour)',
      '1 onion, chopped',
      '1 tomato, chopped',
      '1 green chili, chopped',
      '1 tsp turmeric',
      'Salt to taste',
      'Water as needed',
      'Oil for cooking'
    ],
    steps: [
      'Mix besan with water to make batter.',
      'Add chopped vegetables and spices.',
      'Mix well, remove lumps.',
      'Heat oil in pan.',
      'Pour batter and spread.',
      'Cook till golden brown.',
      'Flip and cook other side.',
      'Serve hot with chutney.'
    ],
    dietaryNeeds: ['vegetarian', 'gluten-free', 'protein-rich'],
    tags: ['healthy', 'protein'],
    nutritionTags: ['protein', 'fiber'],
    parentTips: [
      'High protein breakfast option',
      'Can add grated vegetables',
      'Make it colorful with veggies'
    ],
    videoUrl: 'https://youtube.com/watch?v=besan-chilla'
  },
  {
    id: 'sabudana-khichdi',
    title: 'Sabudana Khichdi',
    image: 'src/assets/images/sabudana-khichdi.jpg',
    mealType: 'breakfast',
    ageGroups: ['4-6', '7-10'],
    prepTime: '30',
    cookTime: '15',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '1 cup sabudana (sago), soaked',
      '2 potatoes, cubed',
      '1/2 cup peanuts, crushed',
      '1 tsp cumin seeds',
      '2 green chilies',
      'Salt to taste',
      '2 tbsp oil',
      'Lemon juice'
    ],
    steps: [
      'Soak sabudana for 4-5 hours.',
      'Heat oil, add cumin seeds.',
      'Add potatoes and cook till soft.',
      'Add peanuts and green chilies.',
      'Add soaked sabudana and salt.',
      'Mix gently and cook for 5 minutes.',
      'Add lemon juice before serving.',
      'Garnish with coriander.'
    ],
    dietaryNeeds: ['vegetarian', 'gluten-free'],
    tags: ['traditional', 'fasting'],
    nutritionTags: ['energy', 'carbohydrates'],
    parentTips: [
      'Soak sabudana properly',
      'Perfect for fasting days',
      'Kids love the texture'
    ],
    videoUrl: 'https://youtube.com/watch?v=sabudana-khichdi'
  },
  {
    id: 'egg-paratha',
    title: 'Egg Paratha',
    image: 'src/assets/images/egg-paratha.jpg',
    mealType: 'breakfast',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '15',
    difficulty: 'easy',
    servings: 3,
    ingredients: [
      '3 eggs',
      '3 chapati/roti',
      '1 onion, chopped',
      '1 tomato, chopped',
      '1 green chili, chopped',
      'Salt to taste',
      '2 tbsp oil',
      'Coriander leaves'
    ],
    steps: [
      'Beat eggs with salt.',
      'Add chopped vegetables to eggs.',
      'Heat oil in pan.',
      'Pour egg mixture and spread.',
      'Place chapati on top.',
      'Press gently and cook.',
      'Flip and cook other side.',
      'Serve hot with ketchup.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'quick'],
    nutritionTags: ['protein', 'energy'],
    parentTips: [
      'High protein breakfast',
      'Can use leftover rotis',
      'Kids love eggs'
    ],
    videoUrl: 'https://youtube.com/watch?v=egg-paratha'
  },
  {
    id: 'chicken-upma',
    title: 'Chicken Upma',
    image: 'src/assets/images/chicken-upma.jpg',
    mealType: 'breakfast',
    ageGroups: ['7-10'],
    prepTime: '10',
    cookTime: '20',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '1 cup rava (semolina)',
      '200g chicken, small pieces',
      '1 onion, chopped',
      '1 tsp mustard seeds',
      '2 green chilies',
      '2 cups water',
      'Salt to taste',
      '3 tbsp oil'
    ],
    steps: [
      'Dry roast rava till golden.',
      'Cook chicken pieces with salt.',
      'Heat oil, add mustard seeds.',
      'Add onions and chilies.',
      'Add cooked chicken.',
      'Add water and bring to boil.',
      'Add roasted rava gradually.',
      'Cook till thick and serve.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'filling'],
    nutritionTags: ['protein', 'iron'],
    parentTips: [
      'High protein breakfast',
      'Cook chicken well',
      'Great for growing kids'
    ],
    videoUrl: 'https://youtube.com/watch?v=chicken-upma'
  },
  {
    id: 'fish-paratha',
    title: 'Fish Paratha',
    image: 'src/assets/images/fish-paratha.jpg',
    mealType: 'breakfast',
    ageGroups: ['7-10'],
    prepTime: '20',
    cookTime: '25',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '2 cups wheat flour',
      '200g fish fillet, cooked and mashed',
      '1 onion, chopped',
      '1 tsp turmeric',
      '1 tsp garam masala',
      'Salt to taste',
      'Ghee for cooking'
    ],
    steps: [
      'Make soft dough with flour.',
      'Cook fish with onions and spices.',
      'Mash fish mixture well.',
      'Roll dough, add fish filling.',
      'Seal and roll into paratha.',
      'Cook on tawa with ghee.',
      'Cook both sides till done.',
      'Serve hot with curd.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'traditional'],
    nutritionTags: ['protein', 'omega-3'],
    parentTips: [
      'Remove all fish bones',
      'Rich in healthy fats',
      'Good for brain development'
    ],
    videoUrl: 'https://youtube.com/watch?v=fish-paratha'
  },
  {
    id: 'meat-dosa',
    title: 'Keema Dosa',
    image: 'src/assets/images/keema-dosa.jpg',
    mealType: 'breakfast',
    ageGroups: ['7-10'],
    prepTime: '15',
    cookTime: '20',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '2 cups dosa batter',
      '200g minced meat (keema)',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      '1 tsp garam masala',
      'Salt to taste',
      '3 tbsp oil'
    ],
    steps: [
      'Cook keema with onions and spices.',
      'Add tomatoes and cook till dry.',
      'Heat dosa pan with oil.',
      'Pour dosa batter and spread.',
      'Add keema filling on half.',
      'Fold dosa and cook.',
      'Serve hot with chutney.',
      'Best enjoyed immediately.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'south-indian'],
    nutritionTags: ['protein', 'iron'],
    parentTips: [
      'Cook meat thoroughly',
      'Can use chicken keema',
      'High protein breakfast'
    ],
    videoUrl: 'https://youtube.com/watch?v=keema-dosa'
  },

  // ==================== MORNING SNACK RECIPES (6 VEG + 4 NON-VEG) ====================
  {
    id: 'banana-pancake',
    title: 'Banana Pancakes',
    image: 'src/assets/images/banana-pancake.jpg',
    mealType: 'morning-snack',
    ageGroups: ['1-3', '4-6', '7-10'],
    prepTime: '5',
    cookTime: '10',
    difficulty: 'easy',
    servings: 3,
    ingredients: [
      '2 ripe bananas',
      '1 cup flour',
      '1 egg',
      '1/2 cup milk',
      '2 tbsp sugar',
      '1 tsp baking powder',
      'Pinch of salt',
      'Ghee for cooking'
    ],
    steps: [
      'Mash bananas till smooth.',
      'Mix flour, baking powder, salt.',
      'Beat egg with milk and sugar.',
      'Combine all ingredients.',
      'Heat ghee in pan.',
      'Pour batter and cook.',
      'Flip when bubbles form.',
      'Serve with honey.'
    ],
    dietaryNeeds: ['vegetarian'],
    tags: ['sweet', 'healthy'],
    nutritionTags: ['energy', 'potassium'],
    parentTips: [
      'Use very ripe bananas',
      'Kids love helping mix',
      'Natural sweetness from bananas'
    ],
    videoUrl: 'https://youtube.com/watch?v=banana-pancakes'
  },
  {
    id: 'fruit-chaat',
    title: 'Seasonal Fruit Chaat',
    image: 'src/assets/images/fruit-chaat.jpg',
    mealType: 'morning-snack',
    ageGroups: ['1-3', '4-6', '7-10'],
    prepTime: '5',
    cookTime: '0',
    difficulty: 'easy',
    servings: 2,
    ingredients: [
      '1 apple, diced',
      '1 banana, sliced',
      '1 orange, peeled',
      '1/2 cup grapes',
      '1 tsp chaat masala',
      'Lemon juice',
      'Pinch of salt',
      'Mint leaves'
    ],
    steps: [
      'Wash and cut all fruits.',
      'Mix fruits in a bowl.',
      'Sprinkle chaat masala and salt.',
      'Add lemon juice.',
      'Mix gently.',
      'Garnish with mint.',
      'Serve immediately.',
      'Best when fresh.'
    ],
    dietaryNeeds: ['vegetarian', 'vegan', 'gluten-free'],
    tags: ['healthy', 'no-cook', 'refreshing'],
    nutritionTags: ['vitamins', 'fiber'],
    parentTips: [
      'Use seasonal fruits',
      'Great source of vitamins',
      'Perfect healthy snack'
    ],
    videoUrl: 'https://youtube.com/watch?v=fruit-chaat'
  },
  {
    id: 'roasted-chana',
    title: 'Roasted Chana',
    image: 'src/assets/images/roasted-chana.jpg',
    mealType: 'morning-snack',
    ageGroups: ['4-6', '7-10'],
    prepTime: '5',
    cookTime: '15',
    difficulty: 'easy',
    servings: 4,
    ingredients: [
      '1 cup dried chickpeas',
      '1 tsp turmeric',
      '1 tsp red chili powder',
      '1 tsp chaat masala',
      'Salt to taste',
      '2 tbsp oil',
      'Curry leaves'
    ],
    steps: [
      'Soak chickpeas overnight.',
      'Boil till tender.',
      'Heat oil, add curry leaves.',
      'Add boiled chickpeas.',
      'Add all spices and salt.',
      'Roast till crispy.',
      'Cool and store.',
      'Serve as snack.'
    ],
    dietaryNeeds: ['vegetarian', 'protein-rich', 'gluten-free'],
    tags: ['healthy', 'crunchy', 'protein'],
    nutritionTags: ['protein', 'fiber'],
    parentTips: [
      'Great protein snack',
      'Can be stored for days',
      'Healthy alternative to chips'
    ],
    videoUrl: 'https://youtube.com/watch?v=roasted-chana'
  },
  {
    id: 'sweet-potato-chaat',
    title: 'Sweet Potato Chaat',
    image: 'src/assets/images/sweet-potato-chaat.jpg',
    mealType: 'morning-snack',
    ageGroups: ['4-6', '7-10'],
    prepTime: '5',
    cookTime: '20',
    difficulty: 'easy',
    servings: 3,
    ingredients: [
      '2 sweet potatoes, boiled',
      '1 onion, chopped',
      '1 tomato, chopped',
      '1 tsp chaat masala',
      'Lemon juice',
      'Salt to taste',
      'Coriander leaves'
    ],
    steps: [
      'Boil and cube sweet potatoes.',
      'Mix with chopped vegetables.',
      'Add chaat masala and salt.',
      'Squeeze lemon juice.',
      'Mix everything well.',
      'Garnish with coriander.',
      'Serve immediately.',
      'Enjoy the sweet taste.'
    ],
    dietaryNeeds: ['vegetarian', 'vegan', 'gluten-free'],
    tags: ['healthy', 'sweet', 'nutritious'],
    nutritionTags: ['vitamins', 'fiber'],
    parentTips: [
      'Rich in vitamin A',
      'Natural sweetness',
      'Great for eye health'
    ],
    videoUrl: 'https://youtube.com/watch?v=sweet-potato-chaat'
  },
  {
    id: 'moong-sprouts',
    title: 'Moong Sprouts Salad',
    image: 'src/assets/images/moong-sprouts.jpg',
    mealType: 'morning-snack',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '5',
    difficulty: 'easy',
    servings: 3,
    ingredients: [
      '1 cup moong sprouts',
      '1 cucumber, diced',
      '1 tomato, diced',
      '1 carrot, grated',
      '1 tsp chaat masala',
      'Lemon juice',
      'Salt to taste',
      'Green chutney'
    ],
    steps: [
      'Steam sprouts for 5 minutes.',
      'Let them cool.',
      'Mix with chopped vegetables.',
      'Add chaat masala and salt.',
      'Add lemon juice.',
      'Mix with green chutney.',
      'Serve fresh.',
      'Best eaten immediately.'
    ],
    dietaryNeeds: ['vegetarian', 'protein-rich', 'gluten-free'],
    tags: ['healthy', 'protein', 'fresh'],
    nutritionTags: ['protein', 'vitamins'],
    parentTips: [
      'Sprout at home for freshness',
      'Rich in protein',
      'Great for growing kids'
    ],
    videoUrl: 'https://youtube.com/watch?v=moong-sprouts-salad'
  },
  {
    id: 'puffed-rice-chaat',
    title: 'Puffed Rice Chaat',
    image: 'src/assets/images/puffed-rice-chaat.jpg',
    mealType: 'morning-snack',
    ageGroups: ['4-6', '7-10'],
    prepTime: '5',
    cookTime: '0',
    difficulty: 'easy',
    servings: 2,
    ingredients: [
      '2 cups puffed rice',
      '1 onion, chopped',
      '1 tomato, chopped',
      '1 boiled potato, diced',
      '2 tbsp tamarind chutney',
      '1 tsp chaat masala',
      'Salt to taste',
      'Sev for garnish'
    ],
    steps: [
      'Mix puffed rice with vegetables.',
      'Add tamarind chutney.',
      'Sprinkle chaat masala and salt.',
      'Mix everything well.',
      'Garnish with sev.',
      'Serve immediately.',
      'Eat before it gets soggy.',
      'Perfect light snack.'
    ],
    dietaryNeeds: ['vegetarian', 'gluten-free'],
    tags: ['light', 'crunchy', 'tangy'],
    nutritionTags: ['light', 'low-calorie'],
    parentTips: [
      'Make fresh each time',
      'Kids love the crunch',
      'Light and filling'
    ],
    videoUrl: 'https://youtube.com/watch?v=puffed-rice-chaat'
  },
  {
    id: 'chicken-cutlet',
    title: 'Mini Chicken Cutlets',
    image: 'src/assets/images/chicken-cutlet.jpg',
    mealType: 'morning-snack',
    ageGroups: ['7-10'],
    prepTime: '15',
    cookTime: '15',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '200g chicken, minced',
      '2 boiled potatoes, mashed',
      '1 onion, chopped fine',
      '1 egg',
      'Breadcrumbs',
      'Salt and pepper',
      'Oil for frying'
    ],
    steps: [
      'Cook minced chicken well.',
      'Mix with mashed potatoes.',
      'Add chopped onions and seasoning.',
      'Shape into small cutlets.',
      'Dip in beaten egg.',
      'Coat with breadcrumbs.',
      'Shallow fry till golden.',
      'Serve with sauce.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'crispy'],
    nutritionTags: ['protein', 'iron'],
    parentTips: [
      'Make small sizes for kids',
      'Can be baked instead',
      'High protein snack'
    ],
    videoUrl: 'https://youtube.com/watch?v=chicken-cutlet'
  },
  {
    id: 'egg-rolls',
    title: 'Mini Egg Rolls',
    image: 'src/assets/images/egg-rolls.jpg',
    mealType: 'morning-snack',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '15',
    difficulty: 'easy',
    servings: 3,
    ingredients: [
      '3 eggs',
      '3 chapatis',
      '1 onion, chopped',
      '1 capsicum, chopped',
      'Salt and pepper',
      '2 tbsp oil',
      'Tomato sauce'
    ],
    steps: [
      'Beat eggs with salt and pepper.',
      'Add chopped vegetables.',
      'Make omelet with this mixture.',
      'Place omelet on chapati.',
      'Add sauce and roll tightly.',
      'Cut into small pieces.',
      'Serve immediately.',
      'Great finger food.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'portable'],
    nutritionTags: ['protein', 'energy'],
    parentTips: [
      'Perfect lunch box snack',
      'Easy to eat',
      'Kids love rolls'
    ],
    videoUrl: 'https://youtube.com/watch?v=egg-rolls'
  },
  {
    id: 'fish-fingers',
    title: 'Fish Fingers',
    image: 'src/assets/images/fish-fingers.jpg',
    mealType: 'morning-snack',
    ageGroups: ['7-10'],
    prepTime: '15',
    cookTime: '15',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '300g fish fillet, cut in strips',
      '1 cup flour',
      '2 eggs, beaten',
      'Breadcrumbs',
      'Salt and pepper',
      'Oil for frying',
      'Lemon wedges'
    ],
    steps: [
      'Season fish strips with salt, pepper.',
      'Coat in flour, then egg.',
      'Roll in breadcrumbs.',
      'Heat oil for frying.',
      'Fry till golden and crispy.',
      'Drain on paper towels.',
      'Serve with lemon.',
      'Best when hot.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'crispy'],
    nutritionTags: ['protein', 'omega-3'],
    parentTips: [
      'Remove all bones carefully',
      'Rich in healthy fats',
      'Great for brain development'
    ],
    videoUrl: 'https://youtube.com/watch?v=fish-fingers'
  },
  {
    id: 'meat-samosa',
    title: 'Mini Meat Samosas',
    image: 'src/assets/images/meat-samosa.jpg',
    mealType: 'morning-snack',
    ageGroups: ['7-10'],
    prepTime: '20',
    cookTime: '20',
    difficulty: 'hard',
    servings: 6,
    ingredients: [
      '200g minced meat',
      '1 cup flour for dough',
      '1 onion, chopped',
      '1 tsp garam masala',
      'Salt to taste',
      'Oil for deep frying',
      'Water for dough'
    ],
    steps: [
      'Make stiff dough with flour and water.',
      'Cook minced meat with onions and spices.',
      'Let meat filling cool.',
      'Roll dough thin and cut triangles.',
      'Add filling and seal edges.',
      'Heat oil for deep frying.',
      'Fry samosas till golden.',
      'Serve hot with chutney.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'traditional'],
    nutritionTags: ['protein', 'iron'],
    parentTips: [
      'Make smaller sizes for kids',
      'Can be baked for healthier option',
      'Great for special occasions'
    ],
    videoUrl: 'https://youtube.com/watch?v=meat-samosa'
  },

  // ==================== LUNCH RECIPES (6 VEG + 4 NON-VEG) ====================
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
    id: 'vegetable-pulao',
    title: 'Vegetable Pulao',
    image: 'src/assets/images/vegetable-pulao.jpg',
    mealType: 'lunch',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '20',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '1 cup basmati rice',
      '1 cup mixed vegetables',
      '1 onion, sliced',
      '2 bay leaves',
      '4-5 green cardamom',
      '1 tsp cumin seeds',
      'Salt to taste',
      '3 tbsp ghee'
    ],
    steps: [
      'Wash and soak rice for 15 minutes.',
      'Heat ghee, add whole spices.',
      'Add sliced onions, cook till golden.',
      'Add mixed vegetables.',
      'Add soaked rice and mix.',
      'Add 2 cups water and salt.',
      'Cook covered till rice is done.',
      'Serve hot with raita.'
    ],
    dietaryNeeds: ['vegetarian', 'gluten-free'],
    tags: ['colorful', 'nutritious'],
    nutritionTags: ['vitamins', 'fiber'],
    parentTips: [
      'Use colorful vegetables',
      'One-pot complete meal',
      'Kids love the aromatic rice'
    ],
    videoUrl: 'https://youtube.com/watch?v=vegetable-pulao'
  },
  {
    id: 'chole-bhature',
    title: 'Chole with Roti',
    image: 'src/assets/images/chole-bhature.jpg',
    mealType: 'lunch',
    ageGroups: ['7-10'],
    prepTime: '15',
    cookTime: '30',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '1 cup chickpeas, soaked overnight',
      '2 onions, chopped',
      '3 tomatoes, chopped',
      '1 tsp chole masala',
      '1 tsp turmeric',
      'Salt to taste',
      '3 tbsp oil',
      'Rotis for serving'
    ],
    steps: [
      'Pressure cook chickpeas till soft.',
      'Heat oil, add onions till golden.',
      'Add tomatoes and cook.',
      'Add chole masala and turmeric.',
      'Add cooked chickpeas with water.',
      'Simmer for 15 minutes.',
      'Mash some chickpeas for thickness.',
      'Serve hot with rotis.'
    ],
    dietaryNeeds: ['vegetarian', 'protein-rich'],
    tags: ['filling', 'spicy'],
    nutritionTags: ['protein', 'fiber'],
    parentTips: [
      'Soak chickpeas overnight',
      'Rich in protein and fiber',
      'Can adjust spice level for kids'
    ],
    videoUrl: 'https://youtube.com/watch?v=chole-recipe'
  },
  {
    id: 'aloo-gobi',
    title: 'Aloo Gobi with Roti',
    image: 'src/assets/images/aloo-gobi.jpg',
    mealType: 'lunch',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '20',
    difficulty: 'easy',
    servings: 4,
    ingredients: [
      '2 potatoes, cubed',
      '1 small cauliflower, cut in florets',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      '1 tsp turmeric',
      '1 tsp cumin seeds',
      'Salt to taste',
      '3 tbsp oil'
    ],
    steps: [
      'Heat oil, add cumin seeds.',
      'Add onions, cook till soft.',
      'Add potatoes and cook for 5 minutes.',
      'Add cauliflower florets.',
      'Add tomatoes, turmeric, salt.',
      'Cover and cook till vegetables are tender.',
      'Stir occasionally.',
      'Serve with fresh rotis.'
    ],
    dietaryNeeds: ['vegetarian', 'gluten-free'],
    tags: ['healthy', 'traditional'],
    nutritionTags: ['vitamins', 'fiber'],
    parentTips: [
      'Cut vegetables in small pieces',
      'Cook covered to retain nutrients',
      'Kids love the mild flavors'
    ],
    videoUrl: 'https://youtube.com/watch?v=aloo-gobi'
  },
  {
    id: 'paneer-rice',
    title: 'Paneer Rice',
    image: 'src/assets/images/paneer-rice.jpg',
    mealType: 'lunch',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '20',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '1 cup rice',
      '150g paneer, cubed',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      '1 tsp garam masala',
      '1 tsp turmeric',
      'Salt to taste',
      '3 tbsp oil'
    ],
    steps: [
      'Cook rice and keep aside.',
      'Heat oil, lightly fry paneer cubes.',
      'Remove paneer and keep aside.',
      'Add onions to same oil.',
      'Add tomatoes and spices.',
      'Add cooked rice and paneer.',
      'Mix gently and cook for 2 minutes.',
      'Serve hot.'
    ],
    dietaryNeeds: ['vegetarian', 'protein-rich'],
    tags: ['protein', 'creamy'],
    nutritionTags: ['protein', 'calcium'],
    parentTips: [
      'Fry paneer lightly to keep soft',
      'Rich source of calcium',
      'Kids love paneer'
    ],
    videoUrl: 'https://youtube.com/watch?v=paneer-rice'
  },
  {
    id: 'chicken-rice',
    title: 'Chicken Rice',
    image: 'src/assets/images/chicken-rice.jpg',
    mealType: 'lunch',
    ageGroups: ['7-10'],
    prepTime: '15',
    cookTime: '25',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '1 cup basmati rice',
      '300g chicken, cut in pieces',
      '1 onion, sliced',
      '2 tomatoes, chopped',
      '1 tsp garam masala',
      '1 tsp turmeric',
      'Salt to taste',
      '3 tbsp oil'
    ],
    steps: [
      'Cook rice with whole spices.',
      'Cook chicken with salt and turmeric.',
      'Heat oil, add onions till golden.',
      'Add tomatoes and garam masala.',
      'Add cooked chicken.',
      'Layer rice over chicken.',
      'Cook on low heat for 10 minutes.',
      'Serve hot with raita.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'aromatic'],
    nutritionTags: ['protein', 'iron'],
    parentTips: [
      'Cook chicken thoroughly',
      'Rich in protein',
      'Kids love one-pot meals'
    ],
    videoUrl: 'https://youtube.com/watch?v=chicken-rice'
  },
  {
    id: 'fish-curry-rice',
    title: 'Fish Curry Rice',
    image: 'src/assets/images/fish-curry-rice.jpg',
    mealType: 'lunch',
    ageGroups: ['7-10'],
    prepTime: '15',
    cookTime: '20',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '1 cup rice',
      '300g fish, cut in pieces',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      '1 tbsp fish curry powder',
      '1 cup coconut milk',
      'Salt to taste',
      '3 tbsp oil'
    ],
    steps: [
      'Cook rice and keep aside.',
      'Marinate fish with turmeric and salt.',
      'Heat oil, fry fish lightly.',
      'Add onions, cook till soft.',
      'Add tomatoes and curry powder.',
      'Add coconut milk and fried fish.',
      'Simmer for 10 minutes.',
      'Serve with rice.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'coastal'],
    nutritionTags: ['protein', 'omega-3'],
    parentTips: [
      'Remove all fish bones',
      'Rich in healthy fats',
      'Good for brain development'
    ],
    videoUrl: 'https://youtube.com/watch?v=fish-curry'
  },
  {
    id: 'mutton-rice',
    title: 'Mutton Rice',
    image: 'src/assets/images/mutton-rice.jpg',
    mealType: 'lunch',
    ageGroups: ['7-10'],
    prepTime: '20',
    cookTime: '40',
    difficulty: 'hard',
    servings: 4,
    ingredients: [
      '1 cup basmati rice',
      '300g mutton, cut in pieces',
      '2 onions, sliced',
      '1 tbsp ginger-garlic paste',
      '1 tsp garam masala',
      '1 tsp turmeric',
      'Salt to taste',
      '4 tbsp oil'
    ],
    steps: [
      'Marinate mutton with spices for 30 minutes.',
      'Cook marinated mutton till tender.',
      'Cook rice separately with whole spices.',
      'Heat oil, fry onions till golden.',
      'Add cooked mutton to fried onions.',
      'Layer rice over mutton.',
      'Cook on low heat for 15 minutes.',
      'Serve hot with boiled egg.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'special'],
    nutritionTags: ['protein', 'iron'],
    parentTips: [
      'Cook mutton well',
      'Rich in iron and protein',
      'Special occasion meal'
    ],
    videoUrl: 'https://youtube.com/watch?v=mutton-rice'
  },
  {
    id: 'egg-curry-rice',
    title: 'Egg Curry Rice',
    image: 'src/assets/images/egg-curry-rice.jpg',
    mealType: 'lunch',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '20',
    difficulty: 'easy',
    servings: 4,
    ingredients: [
      '1 cup rice',
      '4 eggs',
      '2 onions, chopped',
      '3 tomatoes, chopped',
      '1 tsp garam masala',
      '1 tsp turmeric',
      'Salt to taste',
      '3 tbsp oil'
    ],
    steps: [
      'Cook rice and keep aside.',
      'Boil eggs and peel.',
      'Heat oil, add onions till golden.',
      'Add tomatoes and cook till soft.',
      'Add garam masala and turmeric.',
      'Add little water to make gravy.',
      'Add boiled eggs and simmer.',
      'Serve with rice.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'easy'],
    nutritionTags: ['protein', 'energy'],
    parentTips: [
      'Boil eggs properly',
      'Kids love eggs',
      'Quick protein source'
    ],
    videoUrl: 'https://youtube.com/watch?v=egg-curry'
  },

  // ==================== EVENING SNACK RECIPES (6 VEG + 4 NON-VEG) ====================
  {
    id: 'chana-chaat',
    title: 'Healthy Chana Chaat',
    image: 'src/assets/images/chana-chaat.jpg',
    mealType: 'evening-snack',
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
    id: 'banana-lassi',
    title: 'Banana Lassi',
    image: 'src/assets/images/banana-lassi.jpg',
    mealType: 'evening-snack',
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
  },
  {
    id: 'vegetable-sandwich',
    title: 'Grilled Vegetable Sandwich',
    image: 'src/assets/images/vegetable-sandwich.jpg',
    mealType: 'evening-snack',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '10',
    difficulty: 'easy',
    servings: 3,
    ingredients: [
      '6 bread slices',
      '1 cucumber, sliced',
      '1 tomato, sliced',
      '1 capsicum, sliced',
      'Butter',
      'Green chutney',
      'Salt and pepper',
      'Cheese slices (optional)'
    ],
    steps: [
      'Apply butter on bread slices.',
      'Spread green chutney on one side.',
      'Layer vegetables on bread.',
      'Sprinkle salt and pepper.',
      'Add cheese if using.',
      'Cover with another bread slice.',
      'Grill till golden brown.',
      'Cut and serve hot.'
    ],
    dietaryNeeds: ['vegetarian'],
    tags: ['crispy', 'colorful'],
    nutritionTags: ['vitamins', 'fiber'],
    parentTips: [
      'Use colorful vegetables',
      'Kids love grilled sandwiches',
      'Perfect after-school snack'
    ],
    videoUrl: 'https://youtube.com/watch?v=vegetable-sandwich'
  },
  {
    id: 'masala-corn',
    title: 'Masala Sweet Corn',
    image: 'src/assets/images/masala-corn.jpg',
    mealType: 'evening-snack',
    ageGroups: ['4-6', '7-10'],
    prepTime: '5',
    cookTime: '10',
    difficulty: 'easy',
    servings: 3,
    ingredients: [
      '2 cups sweet corn kernels',
      '1 onion, chopped',
      '1 tomato, chopped',
      '1 tsp chaat masala',
      'Lemon juice',
      'Salt to taste',
      '2 tbsp butter',
      'Coriander leaves'
    ],
    steps: [
      'Boil corn kernels till tender.',
      'Heat butter in pan.',
      'Add onions and cook till soft.',
      'Add tomatoes and corn.',
      'Add chaat masala and salt.',
      'Cook for 5 minutes.',
      'Add lemon juice.',
      'Garnish with coriander.'
    ],
    dietaryNeeds: ['vegetarian', 'gluten-free'],
    tags: ['sweet', 'crunchy'],
    nutritionTags: ['fiber', 'vitamins'],
    parentTips: [
      'Kids love sweet corn',
      'Can use frozen corn',
      'Naturally sweet and healthy'
    ],
    videoUrl: 'https://youtube.com/watch?v=masala-corn'
  },
  {
    id: 'aloo-tikki',
    title: 'Mini Aloo Tikki',
    image: 'src/assets/images/aloo-tikki.jpg',
    mealType: 'evening-snack',
    ageGroups: ['4-6', '7-10'],
    prepTime: '15',
    cookTime: '15',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '4 boiled potatoes, mashed',
      '1 onion, chopped fine',
      '1 tsp cumin seeds',
      '1 tsp garam masala',
      'Salt to taste',
      '2 tbsp cornflour',
      'Oil for shallow frying',
      'Green chutney'
    ],
    steps: [
      'Mix mashed potatoes with all spices.',
      'Add cornflour to bind.',
      'Shape into small round tikkis.',
      'Heat oil in pan.',
      'Shallow fry tikkis till golden.',
      'Cook both sides evenly.',
      'Serve hot with chutney.',
      'Best enjoyed immediately.'
    ],
    dietaryNeeds: ['vegetarian', 'gluten-free'],
    tags: ['crispy', 'traditional'],
    nutritionTags: ['energy', 'fiber'],
    parentTips: [
      'Make small sizes for kids',
      'Can be baked for healthier option',
      'Kids love crispy textures'
    ],
    videoUrl: 'https://youtube.com/watch?v=aloo-tikki'
  },
  {
    id: 'mango-kulfi',
    title: 'Homemade Mango Kulfi',
    image: 'src/assets/images/mango-kulfi.jpg',
    mealType: 'evening-snack',
    ageGroups: ['1-3', '4-6', '7-10'],
    prepTime: '10',
    cookTime: '240',
    difficulty: 'easy',
    servings: 4,
    ingredients: [
      '1 cup mango pulp',
      '1 cup condensed milk',
      '1/2 cup fresh cream',
      '2 tbsp sugar',
      'Chopped nuts',
      'Kulfi molds'
    ],
    steps: [
      'Mix mango pulp with condensed milk.',
      'Add cream and sugar.',
      'Whisk till smooth.',
      'Add chopped nuts.',
      'Pour into kulfi molds.',
      'Freeze for 4-5 hours.',
      'Unmold and serve.',
      'Perfect summer treat.'
    ],
    dietaryNeeds: ['vegetarian'],
    tags: ['sweet', 'cooling', 'summer'],
    nutritionTags: ['calcium', 'vitamins'],
    parentTips: [
      'Use ripe mangoes for best flavor',
      'Kids love homemade ice cream',
      'Healthier than store-bought'
    ],
    videoUrl: 'https://youtube.com/watch?v=mango-kulfi'
  },
  {
    id: 'chicken-tikka',
    title: 'Mini Chicken Tikka',
    image: 'src/assets/images/chicken-tikka.jpg',
    mealType: 'evening-snack',
    ageGroups: ['7-10'],
    prepTime: '30',
    cookTime: '15',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '300g chicken, cut in small cubes',
      '1/2 cup yogurt',
      '1 tsp garam masala',
      '1 tsp turmeric',
      '1 tbsp ginger-garlic paste',
      'Salt to taste',
      '2 tbsp oil',
      'Skewers'
    ],
    steps: [
      'Marinate chicken with yogurt and spices.',
      'Let it marinate for 30 minutes.',
      'Thread chicken on skewers.',
      'Heat oil in pan.',
      'Cook tikka turning frequently.',
      'Cook till done and slightly charred.',
      'Serve with onion rings.',
      'Best enjoyed hot.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'grilled'],
    nutritionTags: ['protein', 'iron'],
    parentTips: [
      'Cut chicken in small pieces',
      'Cook thoroughly',
      'Kids love grilled food'
    ],
    videoUrl: 'https://youtube.com/watch?v=chicken-tikka'
  },
  {
    id: 'fish-pakora',
    title: 'Fish Pakoras',
    image: 'src/assets/images/fish-pakora.jpg',
    mealType: 'evening-snack',
    ageGroups: ['7-10'],
    prepTime: '15',
    cookTime: '15',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '300g fish fillet, cut in strips',
      '1 cup gram flour',
      '1 tsp red chili powder',
      '1 tsp turmeric',
      'Salt to taste',
      'Water as needed',
      'Oil for deep frying'
    ],
    steps: [
      'Mix gram flour with spices.',
      'Add water to make thick batter.',
      'Marinate fish with salt and turmeric.',
      'Dip fish in batter.',
      'Heat oil for deep frying.',
      'Fry fish till golden and crispy.',
      'Drain on paper towels.',
      'Serve hot with lemon.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'crispy'],
    nutritionTags: ['protein', 'omega-3'],
    parentTips: [
      'Remove all bones carefully',
      'Fry in hot oil for crispiness',
      'Rich in healthy fats'
    ],
    videoUrl: 'https://youtube.com/watch?v=fish-pakora'
  },
  {
    id: 'egg-bhurji',
    title: 'Egg Bhurji Toast',
    image: 'src/assets/images/egg-bhurji.jpg',
    mealType: 'evening-snack',
    ageGroups: ['4-6', '7-10'],
    prepTime: '5',
    cookTime: '10',
    difficulty: 'easy',
    servings: 3,
    ingredients: [
      '4 eggs',
      '4 bread slices',
      '1 onion, chopped',
      '1 tomato, chopped',
      '1 green chili, chopped',
      'Salt and pepper',
      '2 tbsp oil',
      'Butter'
    ],
    steps: [
      'Beat eggs with salt and pepper.',
      'Heat oil, add onions.',
      'Add tomatoes and chili.',
      'Pour beaten eggs.',
      'Scramble till cooked.',
      'Toast bread slices.',
      'Serve bhurji over toast.',
      'Best enjoyed hot.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'quick'],
    nutritionTags: ['protein', 'energy'],
    parentTips: [
      'Dont overcook eggs',
      'Kids love scrambled eggs',
      'Quick protein snack'
    ],
    videoUrl: 'https://youtube.com/watch?v=egg-bhurji'
  },
  {
    id: 'mutton-kebab',
    title: 'Mini Mutton Kebabs',
    image: 'src/assets/images/mutton-kebab.jpg',
    mealType: 'evening-snack',
    ageGroups: ['7-10'],
    prepTime: '30',
    cookTime: '20',
    difficulty: 'hard',
    servings: 4,
    ingredients: [
      '300g minced mutton',
      '1 onion, chopped fine',
      '1 tbsp ginger-garlic paste',
      '1 tsp garam masala',
      '1 tsp red chili powder',
      'Salt to taste',
      '2 tbsp oil',
      'Skewers'
    ],
    steps: [
      'Mix minced mutton with all spices.',
      'Add chopped onions.',
      'Mix well and let marinate.',
      'Shape around skewers.',
      'Heat oil in pan.',
      'Cook kebabs turning frequently.',
      'Cook till done and browned.',
      'Serve with mint chutney.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'special'],
    nutritionTags: ['protein', 'iron'],
    parentTips: [
      'Mix mince well for binding',
      'Cook thoroughly',
      'Special occasion snack'
    ],
    videoUrl: 'https://youtube.com/watch?v=mutton-kebab'
  },

  // ==================== DINNER RECIPES (6 VEG + 4 NON-VEG) ====================
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
    id: 'vegetable-curry',
    title: 'Mixed Vegetable Curry',
    image: 'src/assets/images/vegetable-curry.jpg',
    mealType: 'dinner',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '20',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '2 cups mixed vegetables',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      '1 tsp garam masala',
      '1 tsp turmeric',
      '1 tsp coriander powder',
      'Salt to taste',
      '3 tbsp oil'
    ],
    steps: [
      'Heat oil, add onions till golden.',
      'Add tomatoes and cook till soft.',
      'Add all spices and cook.',
      'Add mixed vegetables.',
      'Add little water and cover.',
      'Cook till vegetables are tender.',
      'Garnish with coriander.',
      'Serve with rice or roti.'
    ],
    dietaryNeeds: ['vegetarian', 'gluten-free'],
    tags: ['healthy', 'colorful'],
    nutritionTags: ['vitamins', 'fiber'],
    parentTips: [
      'Use seasonal vegetables',
      'Cut vegetables in small pieces',
      'Rich source of vitamins'
    ],
    videoUrl: 'https://youtube.com/watch?v=vegetable-curry'
  },
  {
    id: 'dal-tadka',
    title: 'Dal Tadka with Rice',
    image: 'src/assets/images/dal-tadka.jpg',
    mealType: 'dinner',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '25',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '1 cup mixed dal',
      '1 cup rice',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      '1 tsp cumin seeds',
      '1 tsp turmeric',
      'Salt to taste',
      '3 tbsp ghee'
    ],
    steps: [
      'Cook dal with turmeric till soft.',
      'Cook rice separately.',
      'Heat ghee, add cumin seeds.',
      'Add onions, cook till golden.',
      'Add tomatoes and cook.',
      'Add cooked dal and mix.',
      'Simmer for 5 minutes.',
      'Serve over rice with ghee.'
    ],
    dietaryNeeds: ['vegetarian', 'protein-rich'],
    tags: ['protein', 'traditional'],
    nutritionTags: ['protein', 'iron'],
    parentTips: [
      'Cook dal till very soft',
      'Add ghee for better taste',
      'Rich in plant protein'
    ],
    videoUrl: 'https://youtube.com/watch?v=dal-tadka'
  },
  {
    id: 'chapati-curry',
    title: 'Chapati with Pumpkin Curry',
    image: 'src/assets/images/chapati-curry.jpg',
    mealType: 'dinner',
    ageGroups: ['4-6', '7-10'],
    prepTime: '15',
    cookTime: '20',
    difficulty: 'easy',
    servings: 4,
    ingredients: [
      '2 cups wheat flour',
      '2 cups pumpkin, cubed',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      '1 tsp turmeric',
      '1 tsp cumin seeds',
      'Salt to taste',
      '3 tbsp oil'
    ],
    steps: [
      'Make soft dough with flour.',
      'Heat oil, add cumin seeds.',
      'Add onions, cook till soft.',
      'Add tomatoes and spices.',
      'Add pumpkin cubes.',
      'Cook covered till tender.',
      'Roll and cook chapatis.',
      'Serve hot curry with chapatis.'
    ],
    dietaryNeeds: ['vegetarian', 'nutritious'],
    tags: ['healthy', 'sweet'],
    nutritionTags: ['vitamins', 'beta-carotene'],
    parentTips: [
      'Pumpkin is naturally sweet',
      'Rich in vitamin A',
      'Good for eye health'
    ],
    videoUrl: 'https://youtube.com/watch?v=pumpkin-curry'
  },
  {
    id: 'curd-rice',
    title: 'Curd Rice',
    image: 'src/assets/images/curd-rice.jpg',
    mealType: 'dinner',
    ageGroups: ['1-3', '4-6', '7-10'],
    prepTime: '5',
    cookTime: '15',
    difficulty: 'easy',
    servings: 3,
    ingredients: [
      '1 cup rice',
      '1 cup fresh curd',
      '1 tsp mustard seeds',
      '1 tsp urad dal',
      'Few curry leaves',
      'Salt to taste',
      '2 tbsp oil',
      'Coriander leaves'
    ],
    steps: [
      'Cook rice and let it cool.',
      'Mix curd with cooked rice.',
      'Add salt and mix well.',
      'Heat oil, add mustard seeds.',
      'Add urad dal and curry leaves.',
      'Pour tempering over curd rice.',
      'Mix gently.',
      'Garnish with coriander.'
    ],
    dietaryNeeds: ['vegetarian', 'probiotic'],
    tags: ['cooling', 'easy-digest'],
    nutritionTags: ['probiotics', 'calcium'],
    parentTips: [
      'Great for hot weather',
      'Easy to digest',
      'Good for gut health'
    ],
    videoUrl: 'https://youtube.com/watch?v=curd-rice'
  },
  {
    id: 'chicken-curry-rice',
    title: 'Chicken Curry with Rice',
    image: 'src/assets/images/chicken-curry-rice.jpg',
    mealType: 'dinner',
    ageGroups: ['7-10'],
    prepTime: '15',
    cookTime: '30',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '1 cup rice',
      '400g chicken, cut in pieces',
      '2 onions, chopped',
      '3 tomatoes, chopped',
      '1 tbsp ginger-garlic paste',
      '1 tsp garam masala',
      'Salt to taste',
      '4 tbsp oil'
    ],
    steps: [
      'Cook rice and keep aside.',
      'Heat oil, add onions till golden.',
      'Add ginger-garlic paste.',
      'Add chicken pieces and cook.',
      'Add tomatoes and spices.',
      'Add water and simmer till chicken is tender.',
      'Cook till gravy thickens.',
      'Serve hot with rice.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'hearty'],
    nutritionTags: ['protein', 'iron'],
    parentTips: [
      'Cook chicken thoroughly',
      'Rich source of protein',
      'Adjust spice level for kids'
    ],
    videoUrl: 'https://youtube.com/watch?v=chicken-curry'
  },
  {
    id: 'fish-rice-dinner',
    title: 'Fish Curry with Rice',
    image: 'src/assets/images/fish-rice-dinner.jpg',
    mealType: 'dinner',
    ageGroups: ['7-10'],
    prepTime: '15',
    cookTime: '25',
    difficulty: 'medium',
    servings: 4,
    ingredients: [
      '1 cup rice',
      '400g fish, cut in pieces',
      '1 onion, chopped',
      '2 tomatoes, chopped',
      '1 tbsp fish curry powder',
      '1 cup coconut milk',
      'Salt to taste',
      '3 tbsp oil'
    ],
    steps: [
      'Cook rice and keep aside.',
      'Marinate fish with turmeric and salt.',
      'Heat oil, fry fish lightly.',
      'Remove fish and keep aside.',
      'Add onions to same oil.',
      'Add tomatoes and curry powder.',
      'Add coconut milk and fried fish.',
      'Simmer till fish is cooked and serve with rice.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'coastal'],
    nutritionTags: ['protein', 'omega-3'],
    parentTips: [
      'Remove all fish bones carefully',
      'Rich in healthy fats',
      'Good for brain development'
    ],
    videoUrl: 'https://youtube.com/watch?v=fish-curry-dinner'
  },
  {
    id: 'egg-fried-rice',
    title: 'Egg Fried Rice',
    image: 'src/assets/images/egg-fried-rice.jpg',
    mealType: 'dinner',
    ageGroups: ['4-6', '7-10'],
    prepTime: '10',
    cookTime: '15',
    difficulty: 'easy',
    servings: 4,
    ingredients: [
      '2 cups cooked rice',
      '3 eggs',
      '1 onion, chopped',
      '1 carrot, diced',
      '1/2 cup green peas',
      'Soy sauce (1 tsp)',
      'Salt and pepper',
      '3 tbsp oil'
    ],
    steps: [
      'Beat eggs with salt and pepper.',
      'Heat oil, scramble eggs.',
      'Remove eggs and keep aside.',
      'Add vegetables to same pan.',
      'Cook till vegetables are soft.',
      'Add cooked rice and mix.',
      'Add scrambled eggs back.',
      'Mix well and serve hot.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'colorful'],
    nutritionTags: ['protein', 'vitamins'],
    parentTips: [
      'Use day-old rice for better texture',
      'Kids love colorful rice',
      'One-pot complete meal'
    ],
    videoUrl: 'https://youtube.com/watch?v=egg-fried-rice'
  },
  {
    id: 'mutton-curry-roti',
    title: 'Mutton Curry with Roti',
    image: 'src/assets/images/mutton-curry-roti.jpg',
    mealType: 'dinner',
    ageGroups: ['7-10'],
    prepTime: '20',
    cookTime: '45',
    difficulty: 'hard',
    servings: 4,
    ingredients: [
      '2 cups wheat flour',
      '400g mutton, cut in pieces',
      '2 onions, chopped',
      '3 tomatoes, chopped',
      '2 tbsp ginger-garlic paste',
      '1 tsp garam masala',
      'Salt to taste',
      '4 tbsp oil'
    ],
    steps: [
      'Make soft dough with flour.',
      'Marinate mutton with spices.',
      'Heat oil, add onions till golden.',
      'Add marinated mutton.',
      'Cook till mutton changes color.',
      'Add tomatoes and cook.',
      'Add water and cook till tender.',
      'Roll rotis and serve with curry.'
    ],
    dietaryNeeds: ['non-vegetarian', 'protein-rich'],
    tags: ['protein', 'special'],
    nutritionTags: ['protein', 'iron'],
    parentTips: [
      'Cook mutton till very tender',
      'Rich in iron and protein',
      'Special occasion dinner'
    ],
    videoUrl: 'https://youtube.com/watch?v=mutton-curry-roti'
  }
];
