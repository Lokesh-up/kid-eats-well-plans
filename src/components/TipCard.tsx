
import React from 'react';
import { Card } from './ui/card';
import { Link } from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

interface TipCardProps {
  id: string;
  title: string;
  excerpt: string;
  authorName: string;
  authorImage: string;
  image: string;
}

const TipCard = ({ id, title, excerpt, authorName, authorImage, image }: TipCardProps) => {
  return (
    <Link to={`/tips/${id}`}>
      <Card className="overflow-hidden border-none shadow-md rounded-xl hover:shadow-lg transition-all duration-200 group">
        <div>
          <img 
            src={image || `https://images.unsplash.com/photo-${id || '1498050108023-c5249f4df085'}`} 
            alt={title} 
            className="w-full h-48 object-cover" 
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085";
            }}
          />
        </div>
        <div className="p-5">
          <h3 className="font-bold mb-2 text-lg group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center">
            <Avatar className="w-8 h-8 mr-2">
              <AvatarImage 
                src={authorImage || `https://images.unsplash.com/photo-1492321936769-b49830bc1d1e`}
                alt={authorName} 
              />
              <AvatarFallback>{authorName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">{authorName}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default TipCard;
