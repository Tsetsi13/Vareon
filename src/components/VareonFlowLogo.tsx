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
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="50%" stopColor="#0EA5E9" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
        </defs>
        
        {/* Main V shape */}
        <path
          d="M8 8 L20 28 L32 8"
          stroke="url(#logoGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Flow lines */}
        <path
          d="M6 12 Q15 18 24 12"
          stroke="url(#flowGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.7"
        />
        <path
          d="M10 16 Q18 20 26 16"
          stroke="url(#flowGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.5"
        />
        <path
          d="M14 20 Q20 22 26 20"
          stroke="url(#flowGradient)"
          strokeWidth="1"
          strokeLinecap="round"
          fill="none"
          opacity="0.4"
        />
        
        {/* Accent dots */}
        <circle cx="12" cy="14" r="1.5" fill="#00D4FF" opacity="0.8" />
        <circle cx="28" cy="18" r="1" fill="#10B981" opacity="0.6" />
      </svg>
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-30 animate-pulse -z-10"></div>
    </div>
  );
};

export default VareonFlowLogo;