import React, { useState, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff, X as ClearIcon, ArrowRight } from 'lucide-react';

interface FormFieldsProps {
  className?: string;
  onSubmit: (data: { email?: string; password?: string; keepSignedIn?: boolean }) => void;
}

export const FormFields: React.FC<FormFieldsProps> = ({ className, onSubmit }) => {
  const [email, setEmail] = useState<string>('michaelscott@ascendion.com');
  const [password, setPassword] = useState<string>('************');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [keepSignedIn, setKeepSignedIn] = useState<boolean>(true);

  const togglePasswordVisibility = useCallback(() => {
    setShowPassword(prev => !prev);
  }, []);

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);

  const handlePasswordChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, []);
  
  const handleClearEmail = useCallback(() => {
    setEmail('');
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ email, password, keepSignedIn });
  };

  return (
    <form onSubmit={handleSubmit} className={cn('space-y-6', className)}>
      <div className="space-y-2">
        <Label htmlFor="email" className="text-xs font-medium text-primaryText">
          Username or Email <span className="text-destructive">*</span>
        </Label>
        <div className="relative">
          <Input 
            type="email" 
            id="email" 
            value={email} 
            onChange={handleEmailChange} 
            className="h-10 rounded-md border-input bg-background text-primaryText focus-visible:ring-ring"
            required 
          />
          {email && (
            <Button 
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 text-muted-foreground hover:text-primaryText"
              onClick={handleClearEmail}
            >
              <ClearIcon className="h-4 w-4" />
            </Button>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" className="text-xs font-medium text-primaryText">
          Password <span className="text-destructive">*</span>
        </Label>
        <div className="relative">
          <Input 
            type={showPassword ? 'text' : 'password'} 
            id="password" 
            value={password} 
            onChange={handlePasswordChange} 
            className="h-10 rounded-md border-input bg-background text-primaryText focus-visible:ring-ring"
            required 
          />
          <Button 
            type="button"
            variant="ghost" 
            size="icon"
            className="absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 text-muted-foreground hover:text-primaryText"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="keep-signed-in" 
            checked={keepSignedIn} 
            onCheckedChange={(checked) => setKeepSignedIn(checked as boolean)}
            className="h-4 w-4 rounded border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
          />
          <Label htmlFor="keep-signed-in" className="text-xs font-medium text-primaryText">
            Keep me signed in
          </Label>
        </div>
        <a href="#" className="text-xs font-medium text-primaryText hover:underline">
          Forgot password?
        </a>
      </div>
      
      {/* The primary sign-in button is moved to ActionButtons but submit is handled here */}
      {/* This hidden button allows form submission via Enter key */}
      <button type="submit" className="hidden" aria-hidden="true">Submit</button>
    </form>
  );
};
