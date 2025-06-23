
import React from 'react';
import { X, Instagram, Heart } from 'lucide-react';

interface ProfileModalProps {
  person: {
    id: string;
    name: string;
    image: string;
    modalImage?: string;
    description: string;
    color: string;
    gradient: string;
    social: {
      instagram?: string;
      twitter?: string;
    };
    song?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ person, isOpen, onClose }) => {
  if (!isOpen || !person) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={20} className="text-gray-500" />
        </button>
        
        {/* Profile image */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={person.modalImage || person.image}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Name */}
        <h2 className="text-2xl font-mono font-semibold text-center text-gray-800 mb-4">
          {person.name}
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 font-mono text-center mb-6 leading-relaxed">
          {person.description}
        </p>
        
        {/* Cute Instagram link */}
        {person.social.instagram && (
          <div className="flex justify-center">
            <a
              href={person.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              <Heart size={16} className="group-hover:animate-pulse" />
              <Instagram size={18} />
              <span className="text-sm font-mono font-medium">
                Follow me! ✨
              </span>
              <Heart size={16} className="group-hover:animate-pulse" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileModal;
