
import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

interface ProfileCardProps {
  person: {
    id: string;
    name: string;
    image: string;
    color: string;
  };
  onClick: () => void;
  delay?: number;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ person, onClick, delay = 0 }) => {
  return (
    <div
      className="relative group cursor-pointer animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
      onClick={onClick}
    >
      {/* Decorative sparkles */}
      <Sparkles 
        size={14} 
        className="absolute -top-3 -right-2 text-yellow-300 animate-twinkle opacity-70"
        style={{ animationDelay: `${delay + 500}ms` }}
      />
      <Heart 
        size={12} 
        className="absolute -top-2 -left-3 text-pink-300 animate-twinkle opacity-60"
        style={{ animationDelay: `${delay + 1000}ms` }}
      />
      
      {/* Profile circle */}
      <div className="relative">
        <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        {/* Glow effect on hover */}
        <div 
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"
          style={{ backgroundColor: person.color }}
        />
      </div>
      
      {/* Name label */}
      <div className="mt-4 text-center">
        <h3 className="text-lg md:text-xl font-poppins font-medium text-gray-700 transition-all duration-300 group-hover:text-gray-800 group-hover:scale-105">
          {person.name}
        </h3>
      </div>
    </div>
  );
};

export default ProfileCard;
