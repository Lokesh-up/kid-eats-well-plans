
import { TipCategory } from "@/pages/TipsPage";

export interface Tip {
  id: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorImage: string;
  image: string;
  category: TipCategory;
  content?: string;
  readTime?: string;
  ageGroup?: string;
}

export const categorizedTips: Record<TipCategory, Tip[]> = {
  "nutrition-basics": [
    {
      id: "nb-1",
      title: "Essential Nutrients Every Growing Child Needs",
      excerpt: "Learn which nutrients are critical for your child's development and how to include them in everyday meals.",
      authorName: "Dr. Lisa Chen",
      authorImage: "/placeholder.svg",
      image: "/placeholder.svg",
      category: "nutrition-basics",
      readTime: "4 min read",
      ageGroup: "All ages"
    },
    {
      id: "nb-2",
      title: "Understanding Portion Sizes for Kids",
      excerpt: "How much should your child actually be eating? Get age-appropriate portion guidance from pediatric experts.",
      authorName: "Sarah Johnson, RD",
      authorImage: "/placeholder.svg",
      image: "/placeholder.svg",
      category: "nutrition-basics",
      readTime: "3 min read",
      ageGroup: "Ages 1-10"
    },
    {
      id: "nb-3",
      title: "Natural vs. Added Sugars: What Parents Need to Know",
      excerpt: "Learn the difference between natural and added sugars and how to minimize unnecessary sugar in your child's diet.",
      authorName: "Dr. Michael Brown",
      authorImage: "/placeholder.svg",
      image: "/placeholder.svg",
      category: "nutrition-basics",
      readTime: "5 min read",
      ageGroup: "All ages"
    }
  ],
  "meal-planning": [
    {
      id: "mp-1",
      title: "Weekly Meal Prep in Under an Hour",
      excerpt: "Transform your weekday routine with this efficient meal prep strategy designed for busy parents.",
      authorName: "Emma Roberts",
      authorImage: "/placeholder.svg",
      image: "/placeholder.svg",
      category: "meal-planning",
      readTime: "6 min read",
      ageGroup: "All ages"
    },
    {
      id: "mp-2",
      title: "Create a Kid-Friendly Meal Planning Routine",
      excerpt: "Involve your children in the meal planning process with these fun and educational activities.",
      authorName: "David Wilson",
      authorImage: "/placeholder.svg",
      image: "/placeholder.svg",
      category: "meal-planning",
      readTime: "4 min read",
      ageGroup: "Ages 4-10"
    }
  ],
  "picky-eating": [
    {
      id: "pe-1",
      title: "10 Tricks to Get Your Child to Try New Foods",
      excerpt: "Tested strategies from parents and pediatricians to help expand your child's palate without the mealtime battles.",
      authorName: "Jennifer Lee",
      authorImage: "/placeholder.svg",
      image: "/placeholder.svg",
      category: "picky-eating",
      readTime: "5 min read",
      ageGroup: "Ages 2-7"
    },
    {
      id: "pe-2",
      title: "The Psychology Behind Picky Eating",
      excerpt: "Understanding why children become selective eaters and how to address the underlying causes.",
      authorName: "Dr. Robert Taylor",
      authorImage: "/placeholder.svg",
      image: "/placeholder.svg",
      category: "picky-eating",
      readTime: "7 min read",
      ageGroup: "All ages"
    }
  ],
  "lunchbox-ideas": [
    {
      id: "lb-1",
      title: "No-Sandwich Lunch Ideas Kids Love",
      excerpt: "Break out of the sandwich rut with these creative, nutritious lunch ideas that kids actually eat.",
      authorName: "Michelle Parker",
      authorImage: "/placeholder.svg",
      image: "/placeholder.svg",
      category: "lunchbox-ideas",
      readTime: "4 min read",
      ageGroup: "Ages 3-10"
    }
  ],
  "time-saving": [
    {
      id: "ts-1",
      title: "5 Kitchen Gadgets That Actually Save Parents Time",
      excerpt: "Worthwhile investments that make healthy meal prep faster and easier for busy families.",
      authorName: "Chris Thompson",
      authorImage: "/placeholder.svg",
      image: "/placeholder.svg",
      category: "time-saving",
      readTime: "3 min read",
      ageGroup: "All ages"
    }
  ],
  "feeding-by-age": [
    {
      id: "fa-1",
      title: "Transitioning from Purees to Table Food",
      excerpt: "How to safely and confidently introduce solid foods to your baby and toddler.",
      authorName: "Dr. Anna Lopez",
      authorImage: "/placeholder.svg",
      image: "/placeholder.svg",
      category: "feeding-by-age",
      readTime: "6 min read",
      ageGroup: "Ages 1-3"
    }
  ],
  "mindful-eating": [
    {
      id: "me-1",
      title: "Teaching Kids to Recognize Hunger and Fullness Cues",
      excerpt: "Help your child develop a healthy relationship with food by teaching mindful eating practices early.",
      authorName: "Dr. Sarah Miller",
      authorImage: "/placeholder.svg",
      image: "/placeholder.svg",
      category: "mindful-eating",
      readTime: "5 min read",
      ageGroup: "Ages 3-10"
    }
  ]
};

export const quickTips: string[] = [
  "Freeze leftover smoothies in popsicle molds for nutritious snacks.",
  "Use cookie cutters to make fruits, vegetables, and sandwiches more appealing.",
  "Keep a container of washed, cut veggies at eye level in your fridge for easy snacking.",
  "Involve kids in meal prep to increase their interest in trying new foods.",
  "Add pureed vegetables to sauces, soups, and baked goods for extra nutrition.",
  "Establish a 'try one bite' rule instead of forcing kids to clean their plates.",
  "Batch cook and freeze individual portions for quick heat-and-eat meals.",
  "Use divided plates to maintain food separation for kids who don't like foods touching."
];
