
import React, { useEffect, useRef } from 'react';

interface MusicVisualizerProps {
  className?: string;
}

const MusicVisualizer: React.FC<MusicVisualizerProps> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setDimensions = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      }
    };
    
    setDimensions();
    window.addEventListener('resize', setDimensions);
    
    // Generate random data for visualization
    const barCount = 60;
    let bars: number[] = [];
    
    const initBars = () => {
      bars = [];
      for (let i = 0; i < barCount; i++) {
        bars.push(Math.random() * 0.5);
      }
    };
    
    initBars();
    
    // Animation loop
    let animationId: number;
    const animate = () => {
      if (!canvas || !ctx) return;
      
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      
      // Update bars
      for (let i = 0; i < bars.length; i++) {
        // Simulate smooth audio levels
        bars[i] += (Math.random() * 0.2 - 0.1);
        bars[i] = Math.max(0.1, Math.min(bars[i], 0.8));
        
        // Draw bar
        const barWidth = canvas.offsetWidth / barCount;
        const barHeight = bars[i] * canvas.offsetHeight;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, canvas.offsetHeight - barHeight, 0, canvas.offsetHeight);
        gradient.addColorStop(0, 'rgba(93, 63, 211, 0.7)');
        gradient.addColorStop(1, 'rgba(93, 63, 211, 0.1)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.roundRect(
          i * barWidth, 
          canvas.offsetHeight - barHeight, 
          barWidth - 1, 
          barHeight, 
          [2, 2, 0, 0]
        );
        ctx.fill();
      }
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', setDimensions);
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className={`w-full h-full opacity-30 ${className}`}
    />
  );
};

export default MusicVisualizer;
