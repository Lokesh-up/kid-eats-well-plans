
import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Link } from 'react-router-dom';

interface MealCardProps {
  id: string;
  title: string;
  image: string;
  mealType: string;
  prepTime: string;
  tags: string[];
}

const MealCard = ({ id, title, image, mealType, prepTime, tags }: MealCardProps) => {
  return (
    <Link to={`/recipes/${id}`}>
      <Card className="overflow-hidden rounded-xl shadow-md border-none meal-card-hover">
        <div className="relative">
          <img src={image} alt={title} className="w-full h-48 object-cover" />
          <Badge className="absolute top-3 left-3 bg-primary">{mealType}</Badge>
        </div>
        <div className="p-4">
          <h3 className="font-bold mb-2 text-lg">{title}</h3>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <span>{prepTime}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-kid-yellow text-gray-700">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default MealCard;
