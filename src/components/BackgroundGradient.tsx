
import React from 'react';

interface BackgroundGradientProps {
  gradient: string;
  isActive: boolean;
}

const BackgroundGradient: React.FC<BackgroundGradientProps> = ({ gradient, isActive }) => {
  const gradients = {
    green: 'from-emerald-200 via-green-100 to-teal-200',
    pink: 'from-pink-200 via-rose-100 to-pink-300',
    blue: 'from-blue-200 via-sky-100 to-cyan-200',
    red: 'from-red-200 via-pink-100 to-rose-300',
    blush: 'from-rose-200 via-pink-50 to-blush-200',
    default: 'from-blush-50 via-white to-lavender-50'
  };

  return (
    <div 
      className={`
        fixed inset-0 transition-opacity duration-1000 ease-in-out -z-10
        bg-gradient-to-br ${gradients[gradient as keyof typeof gradients] || gradients.default}
        ${isActive ? 'opacity-100' : 'opacity-0'}
      `}
    />
  );
};

export default BackgroundGradient;
