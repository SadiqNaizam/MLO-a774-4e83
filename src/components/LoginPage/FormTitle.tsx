import React from 'react';
import { cn } from '@/lib/utils';

interface FormTitleProps {
  className?: string;
}

export const FormTitle: React.FC<FormTitleProps> = ({ className }) => {
  return (
    <div className={cn('text-center', className)}>
      <h1 className="text-3xl font-bold text-primaryText">
        Get Started
      </h1>
      <p className="mt-2 text-sm text-secondaryText">
        Sign In to Your Account
      </p>
    </div>
  );
};
