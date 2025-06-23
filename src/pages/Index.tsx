
import React, { useState } from 'react';
import ProfileCard from '../components/ProfileCard';
import ProfileModal from '../components/ProfileModal';
import BackgroundGradient from '../components/BackgroundGradient';
import ParticleBackground from '../components/ParticleBackground';
import FloatingDecoration from '../components/FloatingDecoration';

const Index = () => {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);

  const people = [
    {
      id: 'silvano',
      name: 'Silvano',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=face',
      description: 'A dreamy soul with a passion for nature and fresh perspectives. Always finding beauty in the simple moments of life.',
      color: '#10b981',
      gradient: 'green',
      social: {
        instagram: '#',
        twitter: '#',
      },
      song: '#'
    },
    {
      id: 'sienna',
      name: 'Sienna',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop&crop=face',
      description: 'Bubbly and bright, bringing joy wherever she goes. Her infectious laughter lights up every room.',
      color: '#f472b6',
      gradient: 'pink',
      social: {
        instagram: '#',
        twitter: '#',
      },
      song: '#'
    },
    {
      id: 'monicah',
      name: 'Monicah',
      image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop&crop=face',
      description: 'Calm and collected with a bright spirit. She brings peace and wisdom to every conversation.',
      color: '#60a5fa',
      gradient: 'blue',
      social: {
        instagram: '#',
        twitter: '#',
      },
      song: '#'
    },
    {
      id: 'lenore',
      name: 'Lenore',
      image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&crop=face',
      description: 'Bold and stylish with a contemporary edge. She fearlessly expresses her unique vision of the world.',
      color: '#ef4444',
      gradient: 'red',
      social: {
        instagram: '#',
        twitter: '#',
      },
      song: '#'
    },
    {
      id: 'alyssa',
      name: 'Alyssa',
      image: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=400&fit=crop&crop=face',
      description: 'Soft and gentle like a blooming rose. Her kind heart and nurturing spirit touch everyone she meets.',
      color: '#fda4af',
      gradient: 'blush',
      social: {
        instagram: '#',
        twitter: '#',
      },
      song: '#'
    }
  ];

  const selectedPersonData = selectedPerson ? people.find(p => p.id === selectedPerson) : null;

  return (
    <div className="min-h-screen relative overflow-hidden font-poppins">
      {/* Default background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blush-50 via-white to-lavender-50 -z-20" />
      
      {/* Dynamic backgrounds */}
      {people.map((person) => (
        <BackgroundGradient
          key={person.id}
          gradient={person.gradient}
          isActive={selectedPerson === person.id}
        />
      ))}
      
      {/* Particle background */}
      <ParticleBackground />
      
      {/* Floating decorations */}
      <FloatingDecoration 
        type="heart" 
        className="top-20 left-10 text-pink-300" 
        delay={1000}
      />
      <FloatingDecoration 
        type="star" 
        className="top-32 right-16 text-yellow-300" 
        delay={2000}
      />
      <FloatingDecoration 
        type="heart" 
        className="bottom-32 right-10 text-purple-300" 
        delay={3000}
      />
      <FloatingDecoration 
        type="star" 
        className="bottom-48 left-12 text-blue-300" 
        delay={4000}
      />

      {/* Main content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-poppins font-light text-gray-700 mb-4">
            Meet Our
            <span className="block font-medium bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Amazing Team
            </span>
          </h1>
          <p className="text-lg text-gray-500 font-light max-w-md mx-auto">
            Click on any profile to learn more about our wonderful people
          </p>
        </div>

        {/* Profiles grid */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-4xl mx-auto">
          {people.map((person, index) => (
            <ProfileCard
              key={person.id}
              person={person}
              onClick={() => setSelectedPerson(person.id)}
              delay={index * 200}
            />
          ))}
        </div>

        {/* Bottom decorative section */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
          <div className="flex justify-center items-center space-x-4 text-gray-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-pink-200"></div>
            <span className="text-sm font-poppins font-light">✨</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-purple-200"></div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      <ProfileModal
        person={selectedPersonData}
        isOpen={!!selectedPerson}
        onClose={() => setSelectedPerson(null)}
      />
    </div>
  );
};

export default Index;
