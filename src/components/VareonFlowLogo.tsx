import React from 'react';

interface VareonFlowLogoProps {
  className?: string;
}

const VareonFlowLogo: React.FC<VareonFlowLogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <div className="relative">
      <svg
        viewBox="0 0 40 40"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="50%" stopColor="#00BCD4" />
            <stop offset="100%" stopColor="#0097A7" />
          </linearGradient>
        </defs>
        
        {/* Main V shape with flowing curves */}
        <path
          d="M8 8 C12 8, 16 12, 18 16 L20 20 L22 16 C24 12, 28 8, 32 8 C30 10, 26 14, 24 18 L20 28 L16 18 C14 14, 10 10, 8 8 Z"
          fill="url(#logoGradient)"
        />
        
        {/* Additional flowing element */}
        <path
          d="M10 10 C14 10, 18 14, 20 18 C22 14, 26 10, 30 10"
          stroke="url(#logoGradient)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
          opacity="0.6"
        />
      </svg>
      
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-cyan-400 blur-lg opacity-20 animate-pulse -z-10"></div>
    </div>
  );
};

export default VareonFlowLogo;