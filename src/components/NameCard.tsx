
import React from 'react';
import { Heart, Star } from 'lucide-react';

interface NameCardProps {
  name: string;
  color: 'blush' | 'lavender' | 'mint';
  delay?: number;
}

const NameCard: React.FC<NameCardProps> = ({ name, color, delay = 0 }) => {
  const colorClasses = {
    blush: 'bg-gradient-to-br from-blush-50 to-blush-100 border-blush-200 shadow-blush-200/20',
    lavender: 'bg-gradient-to-br from-lavender-50 to-lavender-100 border-lavender-200 shadow-lavender-200/20',
    mint: 'bg-gradient-to-br from-mint-50 to-mint-100 border-mint-200 shadow-mint-200/20'
  };

  const iconColors = {
    blush: 'text-blush-300',
    lavender: 'text-lavender-300',
    mint: 'text-mint-300'
  };

  return (
    <div
      className={`
        relative group cursor-pointer
        animate-fade-in-up
        transition-all duration-300 ease-out
        hover:animate-gentle-bounce
        hover:shadow-xl hover:shadow-${color}-200/30
        transform hover:scale-105
      `}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Decorative elements */}
      <Heart 
        size={12} 
        className={`absolute -top-2 -left-2 ${iconColors[color]} animate-twinkle opacity-60`}
        style={{ animationDelay: `${delay + 500}ms` }}
      />
      <Star 
        size={10} 
        className={`absolute -top-1 -right-1 ${iconColors[color]} animate-twinkle opacity-40`}
        style={{ animationDelay: `${delay + 1000}ms` }}
      />
      
      {/* Main card */}
      <div
        className={`
          ${colorClasses[color]}
          px-8 py-6 rounded-2xl border-2
          shadow-lg backdrop-blur-sm
          transition-all duration-300
          group-hover:border-${color}-300
        `}
      >
        <h3 className={`
          text-2xl md:text-3xl font-poppins font-medium
          text-gray-700 text-center
          transition-all duration-300
          group-hover:text-gray-800
          group-hover:scale-110
        `}>
          {name}
        </h3>
      </div>
      
      {/* Bottom decorative element */}
      <div className={`
        absolute -bottom-1 left-1/2 transform -translate-x-1/2
        w-4 h-1 bg-${color}-200 rounded-full opacity-60
        transition-all duration-300
        group-hover:w-8 group-hover:bg-${color}-300
      `} />
    </div>
  );
};

export default NameCard;
