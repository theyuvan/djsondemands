
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';

const Index: React.FC = () => {
  // Add page transition effect
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);
  
  return (
    <main className="min-h-screen">
      <HeroSection />
    </main>
  );
};

export default Index;
