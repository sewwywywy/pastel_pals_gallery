
import React from 'react';
import { Heart, Star, Circle } from 'lucide-react';

interface FloatingDecorationProps {
  type: 'heart' | 'star' | 'circle';
  className?: string;
  delay?: number;
}

const FloatingDecoration: React.FC<FloatingDecorationProps> = ({ 
  type, 
  className = '', 
  delay = 0 
}) => {
  const icons = {
    heart: Heart,
    star: Star,
    circle: Circle
  };

  const Icon = icons[type];

  return (
    <div
      className={`
        absolute pointer-events-none
        animate-float opacity-20
        ${className}
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      <Icon size={16} />
    </div>
  );
};

export default FloatingDecoration;
