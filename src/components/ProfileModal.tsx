
import React from 'react';
import { X, Instagram } from 'lucide-react';

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
        
        {/* Instagram link */}
        {person.social.instagram && (
          <div className="flex justify-center">
            <a
              href={person.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-black hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Instagram size={24} className="text-white" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileModal;
