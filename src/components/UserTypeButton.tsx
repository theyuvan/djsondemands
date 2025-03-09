
import React from 'react';
import { Link } from 'react-router-dom';
import { Music, Building2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface UserTypeButtonProps {
  type: 'dj' | 'company';
  className?: string;
}

const UserTypeButton: React.FC<UserTypeButtonProps> = ({ type, className }) => {
  const isDJ = type === 'dj';
  
  const baseStyles = "relative group overflow-hidden flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all duration-500 ease-out";
  
  const variants = {
    dj: "bg-dj text-white hover:bg-dj-dark hover:scale-105 button-glow",
    company: "bg-company text-white hover:bg-company-dark hover:scale-105 company-button-glow"
  };
  
  return (
    <Link 
      to={isDJ ? "/dj-registration" : "/company-registration"} 
      className={cn(baseStyles, variants[type], className)}
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_ease-in-out]" />
      
      {isDJ ? (
        <Music className="w-5 h-5" />
      ) : (
        <Building2 className="w-5 h-5" />
      )}
      
      <span>
        {isDJ ? "Register as DJ" : "Register as Company"}
      </span>
      
      <span className="absolute top-0 right-0 px-2 py-1 text-xs font-normal bg-white/10 rounded-bl-lg">
        {isDJ ? "Artists" : "Clients"}
      </span>
    </Link>
  );
};

export default UserTypeButton;
