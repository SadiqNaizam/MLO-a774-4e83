import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  /** Content for the left section, typically branding or imagery. */
  leftContent: React.ReactNode;
  /** Content for the right section, typically a form or main interaction area. */
  rightContent: React.ReactNode;
  /** Optional className to apply to the root element of the layout. */
  className?: string;
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({
  leftContent,
  rightContent,
  className,
}) => {
  return (
    <div 
      className={cn(
        'min-h-screen grid grid-cols-1', // Default to single column for mobile
        // On larger screens, switch to a two-column grid.
        // The left column (1fr) is flexible, the right column has a responsive max-width.
        'lg:grid-cols-[1fr_minmax(auto,520px)]',
        'xl:grid-cols-[1fr_minmax(auto,560px)]',
        '2xl:grid-cols-[1fr_minmax(auto,600px)]',
        className
      )}
    >
      {/* Left Section: Visible on larger screens (lg and up) */}
      <div className="hidden lg:flex flex-col items-center justify-center p-8 bg-muted">
        {/* 
          This section is intended for branding or decorative imagery.
          `bg-muted` provides a standard themed background; specific visuals
          (e.g., Ascendion logo and curved design elements from the image)
          should be passed via the `leftContent` prop.
          It occupies the first fraction (1fr) of available space on large screens.
          `flex-col` is used to ensure proper alignment if `leftContent` has intrinsic dimensions.
        */}
        <div className="w-full h-full flex items-center justify-center">
          {leftContent}
        </div>
      </div>

      {/* Right Section: Contains the main interactive content, e.g., login form */}
      <div className="flex flex-col items-center justify-center bg-background p-6 sm:p-8 md:p-10 lg:p-12">
        {/*
          This section hosts the primary application content, such as a login form.
          On mobile (`grid-cols-1`), it occupies the full width of the screen.
          On larger screens, it becomes the right-hand column with a defined maximum width
          (controlled by `minmax` in the `grid-cols` definition).
          `bg-background` (typically white or a very light theme color) serves as the base.
          Responsive padding (`p-6` to `p-12`) ensures adequate spacing around `rightContent`.
          The `rightContent` itself (e.g., LoginForm) is expected to manage its own internal layout
          and maximum width (e.g., `max-w-md` for a form card).
        */}
        {rightContent}
      </div>
    </div>
  );
};

export default MainAppLayout;
