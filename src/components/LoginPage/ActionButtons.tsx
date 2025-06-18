import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ActionButtonsProps {
  className?: string;
  onSignIn: () => void; // This prop might not be directly used if form submission is handled by FormFields
  onLoginWithCompany: () => void;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ className, onSignIn, onLoginWithCompany }) => {
  return (
    <div className={cn('space-y-6', className)}>
      <Button 
        type="submit" // This makes it trigger the form submit in FormFields
        form="login-form-fields" // Associate with FormFields form if IDs were used, otherwise it implicitly submits parent form
        className="w-full h-10 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md font-semibold"
        onClick={onSignIn} // Retained for potential direct click handling, though form submit is primary
      >
        Sign In <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            OR
          </span>
        </div>
      </div>

      <Button 
        variant="secondary"
        type="button"
        className="w-full h-10 bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md font-semibold"
        onClick={onLoginWithCompany}
      >
        Login with company
      </Button>

      <p className="text-center text-xs text-secondaryText">
        Still have trouble signing in?{' '}
        <a href="#" className="font-medium text-primaryText hover:underline">
          Click Here
        </a>
      </p>
    </div>
  );
};
