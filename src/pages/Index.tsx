
import React, { useState, useEffect, useRef } from 'react';
import ProfileCard from '../components/ProfileCard';
import ProfileModal from '../components/ProfileModal';
import BackgroundGradient from '../components/BackgroundGradient';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  const [selectedPerson, setSelectedPerson] = useState<string | null>(null);
  const [showCards, setShowCards] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const audioRef = useRef<HTMLAudioElement>(null);

  const fullText = "Welcome to our world...";

  useEffect(() => {
    // Auto-play background music
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.play().catch(console.error);
    }

    // Typewriter effect
    let i = 0;
    const typewriterTimer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typewriterTimer);
        setTimeout(() => {
          setTypewriterText('');
          setShowCards(true);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(typewriterTimer);
  }, []);

  const people = [
    {
      id: 'silvano',
      name: 'Silvano',
      image: '/lovable-uploads/cb5355a0-d85e-4a88-9610-27decac6d65b.png',
      modalImage: '/lovable-uploads/2f538077-06eb-40c6-8c1e-e44ea067c226.png',
      description: 'Hiiii, It\'s me lols',
      color: '#10b981',
      gradient: 'green',
      social: {
        instagram: 'https://www.instagram.com/silvano_bol/',
        twitter: '#',
      },
      song: '#'
    },
    {
      id: 'sienna',
      name: 'Sienna',
      image: '/lovable-uploads/122ae658-b10a-4581-a39d-ff57e5faee64.png',
      modalImage: '/lovable-uploads/00bd5cf5-081a-4047-ae93-49a0dcdbdf0f.png',
      description: 'The kindest person you\'ll ever meet. Funny and pretty combo, and lights up every room she steps into.',
      color: '#f472b6',
      gradient: 'pink',
      social: {
        instagram: 'https://www.instagram.com/tangsienna/',
        twitter: '#',
      },
      song: '#'
    },
    {
      id: 'monicah',
      name: 'Monicah',
      image: '/lovable-uploads/8e92d7ec-0255-4858-9862-8b6d16b32890.png',
      modalImage: '/lovable-uploads/24ceb71d-3f66-4f74-a3bc-0bbf8c590ab9.png',
      description: 'Fierce and empathetic. A pillar you can always turn to, always there when you need her, unless her phone is confiscated.',
      color: '#60a5fa',
      gradient: 'blue',
      social: {
        instagram: 'https://www.instagram.com/monicahanyegah/',
        twitter: '#',
      },
      song: '#'
    },
    {
      id: 'lenore',
      name: 'Lenore',
      image: '/lovable-uploads/f8fa4e22-9fd2-4887-a970-aa72bd9058ff.png',
      modalImage: '/lovable-uploads/4a44c677-c730-4ba5-8863-412985e9a0b2.png',
      description: 'Smart and pretty asf. Super witty, and balances smarts and stupidity while being effortlessly hilarious. Lowk deppresed.',
      color: '#ef4444',
      gradient: 'red',
      social: {
        instagram: 'https://www.instagram.com/lenorewilsonn/',
        twitter: '#',
      },
      song: '#'
    },
    {
      id: 'alyssa',
      name: 'Alyssa',
      image: '/lovable-uploads/1d3eda8f-3be2-4aae-ba6f-80afeca9aa99.png',
      modalImage: '/lovable-uploads/b81bdee5-1790-435e-b789-270e364726c8.png',
      description: 'Kawai shawty. She don\'t play about two things, her GPA, and her friends. Super silly and down to earth.',
      color: '#fda4af',
      gradient: 'blush',
      social: {
        instagram: 'https://www.instagram.com/alyssa._nguyen/',
        twitter: '#',
      },
      song: '#'
    }
  ];

  const selectedPersonData = selectedPerson ? people.find(p => p.id === selectedPerson) : null;

  return (
    <div className="min-h-screen relative overflow-hidden font-helvetica">
      {/* Dark blue gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 -z-20" />
      
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
      
      {/* Background audio */}
      <audio ref={audioRef} loop>
        <source src="https://files.catbox.moe/zo2b7t.wav" type="audio/wav" />
      </audio>

      {/* Main content */}
      <div className="container mx-auto px-6 py-16 relative z-10">
        {/* Typewriter text */}
        {!showCards && (
          <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-4xl md:text-6xl font-mono text-white">
              {typewriterText}
              <span className="animate-pulse">|</span>
            </h1>
          </div>
        )}

        {/* Profiles grid */}
        {showCards && (
          <div className="min-h-screen flex flex-col justify-center items-center">
            {/* Top row - 2 circles */}
            <div className="flex justify-center items-center gap-12 mb-8">
              {people.slice(0, 2).map((person, index) => (
                <ProfileCard
                  key={person.id}
                  person={person}
                  onClick={() => setSelectedPerson(person.id)}
                  delay={index * 300}
                />
              ))}
            </div>
            
            {/* Bottom row - 3 circles */}
            <div className="flex justify-center items-center gap-12">
              {people.slice(2, 5).map((person, index) => (
                <ProfileCard
                  key={person.id}
                  person={person}
                  onClick={() => setSelectedPerson(person.id)}
                  delay={(index + 2) * 300}
                />
              ))}
            </div>
          </div>
        )}
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
