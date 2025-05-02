
import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Clock } from 'lucide-react';

interface MealCardProps {
  id: string;
  title: string;
  image: string;
  mealType: string;
  prepTime: string;
  tags: string[];
  onClick?: () => void;
}

const MealCard = ({ id, title, image, mealType, prepTime, tags, onClick }: MealCardProps) => {
  return (
    <Card 
      className="overflow-hidden rounded-xl shadow-md border-none meal-card-hover transition-all duration-200 hover:shadow-lg"
      onClick={onClick}
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <Badge className="absolute top-3 left-3 bg-primary">{mealType}</Badge>
      </div>
      <div className="p-4">
        <h3 className="font-bold mb-2 text-lg line-clamp-2">{title}</h3>
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <Clock size={14} className="mr-1" />
          <span>{prepTime}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="bg-accent text-accent-foreground">
              {tag.replace(/-/g, ' ')}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="outline" className="bg-background">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </Card>
  );
};

export default MealCard;
