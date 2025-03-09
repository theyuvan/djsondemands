
import React from 'react';
import AudioWave from './AudioWave';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  showText = true,
  textClassName
}) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-primary/20">
        <div className="absolute inset-0 rounded-lg bg-primary/20 animate-pulse-slow" />
        <AudioWave className="transform scale-90" barCount={5} />
      </div>
      
      {showText && (
        <div className={cn("font-display font-bold text-xl leading-none", textClassName)}>
          <span className="text-white">DJ</span>
          <span className="text-primary">OnDemand</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
