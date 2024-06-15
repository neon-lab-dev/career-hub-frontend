"use client"

import React, { ReactNode } from 'react';

interface ButtonProps {
  variant: 'applied' | 'rejected' | 'hired' | 'interview';
  onClick?: () => void;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  const baseStyles = 'px-4 pb-[10px] pt-2 rounded-[100px]  font-semibold';

  const variantStyles = {
    applied: 'bg-secondary-50 text-secondary-600',
    rejected: 'bg-primary-25 text-primary-650',
    hired: 'bg-success-50 text-success-100',
    interview: 'bg-secondary-20 text-secondary-25',
  };

  const buttonClass = `${baseStyles} ${variantStyles[variant]}`;

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
};

export default Button;
