
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Logo from '@/components/Logo';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen hero-gradient flex flex-col items-center justify-center p-6">
      {/* Logo at the top */}
      <div className="absolute top-8 left-8">
        <Logo />
      </div>
      
      <div className="glass-card p-8 rounded-2xl max-w-md w-full text-center">
        <h1 className="text-6xl font-display font-bold mb-2 text-glow">404</h1>
        <p className="text-xl text-white/80 mb-6">This track doesn't exist</p>
        
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />
        
        <Link to="/" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to homepage</span>
        </Link>
      </div>
      
      {/* Background gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default NotFound;
