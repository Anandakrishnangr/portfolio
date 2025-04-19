import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = '',
  onClick,
}) => {
  return (
    <button
      rel="noopener noreferrer"
      onClick={onClick}
      className={`
        px-7 py-1 rounded-md transition-all duration-300
        text-white bg-gradient-to-r from-primary via-text-secondary to-primary
        border border-primary
        shadow-[0_0_35px_10px_rgba(0,238,255,0.5)]
        animate-borderPulse
        hover:bg-white hover:text-black
        hover:shadow-[0_0_45px_15px_rgba(0,238,255,0.6)]
        ${className}
      `}
    >
      {children}
    </button>
  );
};
