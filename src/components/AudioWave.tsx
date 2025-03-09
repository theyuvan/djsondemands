
import React from 'react';
import { cn } from '@/lib/utils';

interface AudioWaveProps {
  className?: string;
  barCount?: number;
  active?: boolean;
}

const AudioWave: React.FC<AudioWaveProps> = ({ 
  className, 
  barCount = 9,
  active = true
}) => {
  return (
    <div className={cn("flex items-center gap-[2px] h-4", className)}>
      {[...Array(barCount)].map((_, index) => (
        <div
          key={index}
          className={cn(
            "w-[3px] rounded-sm bg-primary transition-all duration-300",
            active ? "animate-wave" : "h-1 opacity-50",
          )}
          style={{
            animationDelay: `${index * 0.1}s`,
            height: active ? `${Math.max(4, Math.min(16, (index % 3 + 1) * 6))}px` : undefined
          }}
        />
      ))}
    </div>
  );
};

export default AudioWave;
