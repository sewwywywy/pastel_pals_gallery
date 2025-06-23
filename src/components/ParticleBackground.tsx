
import React from 'react';

const ParticleBackground: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: i * 400,
    duration: 6000 + (i * 300),
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-5">
      {particles.map((particle) => {
        const sizes = [8, 12, 16, 20];
        const colors = ['rgba(255, 255, 255, 0.1)', 'rgba(168, 85, 247, 0.2)', 'rgba(59, 130, 246, 0.2)', 'rgba(236, 72, 153, 0.2)'];
        const positions = [
          `${Math.random() * 100}%`,
          `${Math.random() * 100}%`
        ];
        
        return (
          <div
            key={particle.id}
            className="absolute opacity-60"
            style={{
              left: positions[0],
              top: positions[1],
              animation: `float ${particle.duration}ms ease-in-out infinite`,
              animationDelay: `${particle.delay}ms`,
            }}
          >
            <div
              className="rounded-full"
              style={{
                width: `${sizes[particle.id % sizes.length]}px`,
                height: `${sizes[particle.id % sizes.length]}px`,
                backgroundColor: colors[particle.id % colors.length],
                animation: `twinkle 3s ease-in-out infinite`,
                animationDelay: `${particle.delay + 1000}ms`,
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ParticleBackground;
