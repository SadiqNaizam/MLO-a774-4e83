import React from 'react';
import { FormTitle } from './FormTitle';
import { FormFields } from './FormFields';
import { ActionButtons } from './ActionButtons';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface LoginFormProps {
  className?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
  const handleSignIn = (data: unknown) => {
    // In a real app, you'd handle form submission here, e.g., API call
    console.log('Sign In data:', data);
    alert('Sign In Clicked! Check console for data.');
  };

  const handleLoginWithCompany = () => {
    console.log('Login with company clicked');
    alert('Login with Company Clicked!');
  };

  return (
    <Card className={cn('w-full max-w-md bg-card p-8 shadow-lg rounded-xl', className)}>
      <CardContent className="p-0 space-y-8">
        <FormTitle />
        <FormFields onSubmit={handleSignIn} />
        <ActionButtons 
          onSignIn={() => { /* This will be triggered by FormFields' submit */ }}
          onLoginWithCompany={handleLoginWithCompany} 
        />
      </CardContent>
    </Card>
  );
};

export default LoginForm;
