
import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const ParticleBackground: React.FC = () => {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    type: i % 3 === 0 ? 'heart' : 'sparkle',
    delay: i * 800,
    duration: 4000 + (i * 200),
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {particles.map((particle) => {
        const Icon = particle.type === 'heart' ? Heart : Sparkles;
        const colors = ['text-pink-300', 'text-yellow-300', 'text-purple-300', 'text-blue-300'];
        const positions = [
          'top-1/4 left-1/4',
          'top-1/3 right-1/4',
          'top-2/3 left-1/3',
          'bottom-1/4 right-1/3',
          'top-1/2 left-1/6',
          'bottom-1/3 left-2/3',
        ];
        
        return (
          <div
            key={particle.id}
            className={`absolute ${positions[particle.id % positions.length]} opacity-30`}
            style={{
              animation: `float ${particle.duration}ms ease-in-out infinite`,
              animationDelay: `${particle.delay}ms`,
            }}
          >
            <Icon 
              size={16 + (particle.id % 3) * 4} 
              className={`${colors[particle.id % colors.length]} animate-twinkle`}
              style={{ animationDelay: `${particle.delay + 500}ms` }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ParticleBackground;
