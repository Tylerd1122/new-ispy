import React from 'react';

interface GlitchTextProps {
  children: React.ReactNode;
  className?: string;
}

const GlitchText = ({ children, className = '' }: GlitchTextProps) => {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute top-0 left-0 text-pink-500 opacity-70 animate-glitch-1">{children}</span>
      <span className="absolute top-0 left-0 text-cyan-400 opacity-70 animate-glitch-2">{children}</span>
      <span className="relative text-white">{children}</span>
    </div>
  );
};

export default GlitchText;