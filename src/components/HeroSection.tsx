
import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import MusicVisualizer from './MusicVisualizer';
import UserTypeButton from './UserTypeButton';
import Logo from './Logo';
import AudioWave from './AudioWave';

const HeroSection: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden px-6 md:px-8 py-24 flex flex-col items-center justify-center">
      {/* Background music visualizer */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        <MusicVisualizer />
      </div>
      
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      
      {/* Logo at the top */}
      <div className="absolute top-8 left-8 z-10">
        <Logo />
      </div>
      
      {/* Hero content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 animate-on-scroll opacity-0">
          <AudioWave barCount={3} />
          <span className="text-sm font-medium text-white/80">The #1 Platform for DJs</span>
        </div>
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-glow animate-on-scroll opacity-0"
        >
          <span className="block">Premium DJ Service</span>
          <span className="text-primary">On Demand</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-on-scroll opacity-0">
          Connect with top DJs or find premium gigs on the most advanced platform 
          designed for professional music artists and event organizers.
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 animate-on-scroll opacity-0">
          <UserTypeButton type="dj" />
          <UserTypeButton type="company" />
        </div>
        
        <div className="mt-12 animate-on-scroll opacity-0">
          <button className="flex items-center gap-2 mx-auto text-white/60 hover:text-white transition-colors group">
            <span>Learn how it works</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Bottom decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
