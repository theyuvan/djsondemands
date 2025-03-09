
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';

const Index: React.FC = () => {
  // Add page transition effect
  useEffect(() => {
    document.body.classList.add('animate-fade-in');
    
    // Force any animations to complete immediately
    setTimeout(() => {
      document.querySelectorAll('.opacity-0').forEach(el => {
        el.classList.remove('opacity-0');
      });
    }, 100);
    
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
