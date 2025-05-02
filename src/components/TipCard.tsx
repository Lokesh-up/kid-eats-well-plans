
import React from 'react';
import { Card } from './ui/card';
import { Link } from 'react-router-dom';

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
          <img src={image} alt={title} className="w-full h-48 object-cover" />
        </div>
        <div className="p-5">
          <h3 className="font-bold mb-2 text-lg group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>
          <div className="flex items-center">
            <img src={authorImage} alt={authorName} className="w-8 h-8 rounded-full mr-2" />
            <span className="text-sm text-gray-600">{authorName}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default TipCard;
