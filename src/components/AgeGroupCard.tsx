
import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface AgeGroupCardProps {
  ageRange: string;
  description: string;
  bgColor: string;
  icon: string;
}

const AgeGroupCard = ({ ageRange, description, bgColor, icon }: AgeGroupCardProps) => {
  // Default icon if missing
  const defaultIcon = "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
  
  return (
    <Card className={`p-6 ${bgColor} rounded-xl border-none shadow-md h-full flex flex-col meal-card-hover`}>
      <div className="flex items-center mb-4">
        <div className="bg-white p-3 rounded-full mr-3">
          <img 
            src={icon || defaultIcon} 
            alt={`${ageRange} icon`} 
            className="w-8 h-8"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = defaultIcon;
            }}
          />
        </div>
        <h3 className="text-lg font-bold">{ageRange} years</h3>
      </div>
      <p className="text-gray-700 mb-5 flex-grow">{description}</p>
      <Link to={`/meal-plans/${ageRange.toLowerCase().replace('–', '-')}`}>
        <Button className="w-full">View Meal Plans</Button>
      </Link>
    </Card>
  );
};

export default AgeGroupCard;
