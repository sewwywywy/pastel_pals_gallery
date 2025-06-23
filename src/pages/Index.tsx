
import React from 'react';
import NameCard from '../components/NameCard';
import FloatingDecoration from '../components/FloatingDecoration';

const Index = () => {
  const names = [
    { name: 'Silvano', color: 'blush' as const },
    { name: 'Sienna', color: 'lavender' as const },
    { name: 'Monicah', color: 'mint' as const },
    { name: 'Alyssa', color: 'blush' as const },
    { name: 'Lenore', color: 'lavender' as const },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blush-50 via-white to-lavender-50 font-poppins relative overflow-hidden">
      {/* Floating decorative elements */}
      <FloatingDecoration 
        type="heart" 
        className="top-20 left-10 text-blush-300" 
        delay={1000}
      />
      <FloatingDecoration 
        type="star" 
        className="top-32 right-16 text-lavender-300" 
        delay={2000}
      />
      <FloatingDecoration 
        type="circle" 
        className="top-64 left-1/4 text-mint-300" 
        delay={3000}
      />
      <FloatingDecoration 
        type="heart" 
        className="bottom-32 right-10 text-blush-300" 
        delay={4000}
      />
      <FloatingDecoration 
        type="star" 
        className="bottom-48 left-12 text-lavender-300" 
        delay={5000}
      />
      <FloatingDecoration 
        type="circle" 
        className="top-48 right-1/4 text-mint-300" 
        delay={1500}
      />

      {/* Main content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-poppins font-light text-gray-700 mb-4">
            Beautiful
            <span className="block font-medium bg-gradient-to-r from-blush-400 via-lavender-400 to-mint-400 bg-clip-text text-transparent">
              Names
            </span>
          </h1>
          <p className="text-lg text-gray-500 font-light max-w-md mx-auto">
            A collection of lovely names presented with care and beauty
          </p>
        </div>

        {/* Names grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {names.map((nameObj, index) => (
            <div key={nameObj.name} className="flex justify-center">
              <NameCard
                name={nameObj.name}
                color={nameObj.color}
                delay={index * 200}
              />
            </div>
          ))}
        </div>

        {/* Bottom decorative section */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: '1200ms' }}>
          <div className="flex justify-center items-center space-x-4 text-gray-400">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-blush-200"></div>
            <span className="text-sm font-poppins font-light">✨</span>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-lavender-200"></div>
          </div>
        </div>
      </div>

      {/* Background gradient orbs for extra visual appeal */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blush-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-lavender-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-mint-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
};

export default Index;
