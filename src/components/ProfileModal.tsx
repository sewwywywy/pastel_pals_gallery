
import React, { useEffect, useRef } from 'react';
import { X, Instagram, Twitter, Music, Play, Pause } from 'lucide-react';

interface ProfileModalProps {
  person: {
    id: string;
    name: string;
    image: string;
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
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);

  useEffect(() => {
    if (isOpen && person?.song && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(console.error);
    } else if (!isOpen && audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }, [isOpen, person]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(console.error);
      }
    }
  };

  if (!isOpen || !person) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
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
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Name */}
        <h2 className="text-2xl font-poppins font-semibold text-center text-gray-800 mb-4">
          {person.name}
        </h2>
        
        {/* Description */}
        <p className="text-gray-600 font-poppins text-center mb-6 leading-relaxed">
          {person.description}
        </p>
        
        {/* Social media icons */}
        <div className="flex justify-center space-x-4 mb-6">
          {person.social.instagram && (
            <a
              href={person.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white hover:scale-110 transition-transform shadow-lg"
            >
              <Instagram size={20} />
            </a>
          )}
          {person.social.twitter && (
            <a
              href={person.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-blue-500 text-white hover:scale-110 transition-transform shadow-lg"
            >
              <Twitter size={20} />
            </a>
          )}
        </div>
        
        {/* Music control */}
        {person.song && (
          <div className="flex justify-center">
            <button
              onClick={toggleMusic}
              className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:scale-105 transition-transform shadow-lg"
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              <Music size={16} />
              <span className="text-sm font-medium">
                {isPlaying ? 'Pause' : 'Play'} Music
              </span>
            </button>
            <audio ref={audioRef} loop>
              <source src={person.song} type="audio/mpeg" />
            </audio>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileModal;
