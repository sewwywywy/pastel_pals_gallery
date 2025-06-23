
import React from 'react';

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
      {/* Profile circle */}
      <div className="relative">
        <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-3 border-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl">
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
      <div className="mt-3 text-center">
        <h3 className="text-sm md:text-base font-mono font-medium text-white transition-all duration-300 group-hover:text-gray-200 group-hover:scale-105">
          {person.name}
        </h3>
      </div>
    </div>
  );
};

export default ProfileCard;
