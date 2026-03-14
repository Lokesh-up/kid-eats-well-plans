export interface Recipe {
  id: string;
  title: string;
  image: string;
  mealType: string;
  ageGroups: string[];

  prepTime: number;
  cookTime: number;

  difficulty: 'easy' | 'medium' | 'hard';

  servings: number;

  ingredients: string[];
  steps: string[];

  dietaryNeeds: string[];
  tags: string[];
  nutritionTags: string[];

  parentTips: string[];

  videoUrl?: string;
}
export const recipesData: Recipe[] = [
  {
id: "poha",
title: "Simple Poha",
image: "/images/poha.jpg",
mealType: "breakfast",
ageGroups: ["4-6","7-10"],
prepTime: 5,
cookTime: 10,
difficulty: "easy",
servings: 3,
ingredients: [
"2 cups poha",
"1 onion chopped",
"1 potato diced",
"1 tsp mustard seeds",
"1 tsp turmeric",
"salt",
"2 tbsp oil"
],
steps: [
"Wash poha and drain",
"Heat oil and add mustard seeds",
"Add onion and potato",
"Cook until soft",
"Add turmeric and salt",
"Add poha and mix",
"Cook for 2 minutes"
],
dietaryNeeds:["vegetarian"],
tags:["quick","budget"],
nutritionTags:["energy"],
parentTips:["Add peanuts for extra crunch"]
},

{
id:"upma",
title:"Rava Upma",
image:"/images/upma.jpg",
mealType:"breakfast",
ageGroups:["4-6","7-10"],
prepTime:5,
cookTime:15,
difficulty:"easy",
servings:4,
ingredients:[
"1 cup rava",
"1 onion chopped",
"1 tsp mustard seeds",
"2 green chillies",
"2 cups water",
"salt",
"2 tbsp oil"
],
steps:[
"Roast rava lightly",
"Heat oil add mustard seeds",
"Add onion and chilli",
"Add water and salt",
"Add rava slowly",
"Cook until thick"
],
dietaryNeeds:["vegetarian"],
tags:["healthy"],
nutritionTags:["fiber"],
parentTips:["Add vegetables for more nutrition"]
},

{
id:"banana-pancake",
title:"Banana Pancakes",
image:"/images/banana-pancake.jpg",
mealType:"breakfast",
ageGroups:["1-3","4-6","7-10"],
prepTime:5,
cookTime:10,
difficulty:"easy",
servings:2,
ingredients:[
"2 bananas",
"1 cup flour",
"1 egg",
"1/2 cup milk",
"1 tsp baking powder"
],
steps:[
"Mash bananas",
"Mix flour baking powder",
"Add egg and milk",
"Make batter",
"Cook pancakes on pan"
],
dietaryNeeds:["vegetarian"],
tags:["sweet"],
nutritionTags:["potassium"],
parentTips:["Use ripe bananas"]
},

{
id:"besan-chilla",
title:"Besan Chilla",
image:"/images/besan-chilla.jpg",
mealType:"breakfast",
ageGroups:["4-6","7-10"],
prepTime:10,
cookTime:15,
difficulty:"easy",
servings:3,
ingredients:[
"1 cup besan",
"1 onion chopped",
"1 tomato chopped",
"1 green chilli",
"salt",
"water"
],
steps:[
"Mix besan with water",
"Add vegetables",
"Heat pan with oil",
"Pour batter",
"Cook both sides"
],
dietaryNeeds:["vegetarian"],
tags:["protein"],
nutritionTags:["protein"],
parentTips:["Add grated carrot"]
},

{
id:"dalia-kheer",
title:"Sweet Dalia Kheer",
image:"/images/dalia-kheer.jpg",
mealType:"breakfast",
ageGroups:["1-3","4-6","7-10"],
prepTime:5,
cookTime:20,
difficulty:"easy",
servings:4,
ingredients:[
"1/2 cup dalia",
"2 cups milk",
"3 tbsp jaggery",
"cardamom powder",
"almonds"
],
steps:[
"Roast dalia",
"Add milk and cook",
"Add jaggery",
"Cook until thick",
"Garnish almonds"
],
dietaryNeeds:["vegetarian"],
tags:["sweet"],
nutritionTags:["calcium"],
parentTips:["Good for kids growth"]
},

{
id:"aloo-paratha",
title:"Aloo Paratha",
image:"/images/aloo-paratha.jpg",
mealType:"breakfast",
ageGroups:["4-6","7-10"],
prepTime:15,
cookTime:20,
difficulty:"medium",
servings:4,
ingredients:[
"2 cups wheat flour",
"3 potatoes boiled",
"1 tsp cumin",
"salt",
"ghee"
],
steps:[
"Make dough",
"Prepare potato filling",
"Roll paratha",
"Cook on tawa",
"Serve with curd"
],
dietaryNeeds:["vegetarian"],
tags:["traditional"],
nutritionTags:["energy"],
parentTips:["Kids love potato filling"]
},

{
id:"sabudana-khichdi",
title:"Sabudana Khichdi",
image:"/images/sabudana-khichdi.jpg",
mealType:"breakfast",
ageGroups:["4-6","7-10"],
prepTime:20,
cookTime:15,
difficulty:"medium",
servings:3,
ingredients:[
"1 cup sabudana",
"2 potatoes",
"1/2 cup peanuts",
"1 tsp cumin",
"salt"
],
steps:[
"Soak sabudana",
"Cook potatoes",
"Add cumin seeds",
"Add sabudana",
"Cook 5 minutes"
],
dietaryNeeds:["vegetarian"],
tags:["fasting"],
nutritionTags:["energy"],
parentTips:["Soak sabudana well"]
},

{
id:"fruit-chaat",
title:"Fruit Chaat",
image:"/images/fruit-chaat.jpg",
mealType:"snack",
ageGroups:["1-3","4-6","7-10"],
prepTime:5,
cookTime:0,
difficulty:"easy",
servings:2,
ingredients:[
"apple",
"banana",
"grapes",
"orange",
"chaat masala"
],
steps:[
"Cut fruits",
"Mix fruits",
"Add masala",
"Serve fresh"
],
dietaryNeeds:["vegetarian","vegan"],
tags:["healthy"],
nutritionTags:["vitamins"],
parentTips:["Use seasonal fruits"]
},

{
id:"dal-chawal",
title:"Dal Chawal",
image:"/images/dal-chawal.jpg",
mealType:"lunch",
ageGroups:["1-3","4-6","7-10"],
prepTime:5,
cookTime:20,
difficulty:"easy",
servings:4,
ingredients:[
"1 cup rice",
"1/2 cup dal",
"1 onion",
"2 tomatoes",
"turmeric",
"salt"
],
steps:[
"Cook rice",
"Boil dal",
"Cook onion tomato",
"Add spices",
"Serve with rice"
],
dietaryNeeds:["vegetarian"],
tags:["comfort"],
nutritionTags:["protein"],
parentTips:["Add ghee for taste"]
},

{
id:"rajma-chawal",
title:"Rajma Chawal",
image:"/images/rajma-chawal.jpg",
mealType:"lunch",
ageGroups:["4-6","7-10"],
prepTime:10,
cookTime:30,
difficulty:"medium",
servings:4,
ingredients:[
"1 cup rajma",
"1 onion",
"2 tomatoes",
"garam masala",
"rice"
],
steps:[
"Soak rajma overnight",
"Cook rajma",
"Prepare masala",
"Mix rajma with masala",
"Serve with rice"
],
dietaryNeeds:["vegetarian"],
tags:["protein"],
nutritionTags:["iron"],
parentTips:["Soak beans well"]
},

{
id:"vegetable-pulao",
title:"Vegetable Pulao",
image:"/images/vegetable-pulao.jpg",
mealType:"lunch",
ageGroups:["4-6","7-10"],
prepTime:10,
cookTime:20,
difficulty:"medium",
servings:4,
ingredients:[
"1 cup rice",
"mixed vegetables",
"onion",
"garam masala",
"ghee"
],
steps:[
"Heat ghee",
"Add spices",
"Add vegetables",
"Add rice",
"Add water",
"Cook"
],
dietaryNeeds:["vegetarian"],
tags:["healthy"],
nutritionTags:["fiber"],
parentTips:["Use colorful vegetables"]
},

{
id:"roti-sabzi",
title:"Roti Sabzi",
image:"/images/roti-sabzi.jpg",
mealType:"lunch",
ageGroups:["4-6","7-10"],
prepTime:10,
cookTime:20,
difficulty:"easy",
servings:4,
ingredients:[
"2 cups wheat flour",
"2 potatoes",
"1 onion",
"2 tomatoes",
"turmeric"
],
steps:[
"Make dough",
"Cook potato sabzi",
"Cook rotis",
"Serve together"
],
dietaryNeeds:["vegetarian"],
tags:["budget"],
nutritionTags:["energy"],
parentTips:["Healthy home meal"]
}
]