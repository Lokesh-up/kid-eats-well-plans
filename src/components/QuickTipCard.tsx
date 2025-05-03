
import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star } from 'lucide-react';

interface QuickTipCardProps {
  tip: string;
}

const QuickTipCard = ({ tip }: QuickTipCardProps) => {
  return (
    <Card className="border-none shadow-sm bg-white">
      <CardContent className="flex items-start p-4">
        <Star size={18} className="text-primary mr-2 mt-1 flex-shrink-0" />
        <p className="text-sm text-gray-700">{tip || "Quick tip for healthy eating with kids."}</p>
      </CardContent>
    </Card>
  );
};

export default QuickTipCard;
