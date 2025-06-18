import React from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import LoginForm from '@/components/LoginPage/LoginForm';

// Define the props for LeftBrandingSection if any are needed in the future.
// For now, it's a static component.
// interface LeftBrandingSectionProps {}

const LeftBrandingSection: React.FC = () => {
  return (
    // Using Tailwind's bg-slate-100 for a very light gray, to align with a professional, clean aesthetic.
    // The provided MainAppLayout uses bg-muted for its left section, which is similar.
    // This component's background will be rendered within that slot.
    <div className="w-full h-full flex flex-col justify-between p-10 md:p-12 lg:p-16 bg-slate-100 text-slate-800 relative overflow-hidden">
      
      {/* Decorative subtle gradient shapes for a modern feel */}
      {/* These are positioned absolutely and will be behind the content. */}
      {/* Tailwind's 'animate-pulse' is used for a subtle animation. Arbitrary values for animation-delay. */}
      <div className="absolute top-[-50px] left-[-50px] w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-sky-200 via-blue-200 to-indigo-200 opacity-40 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 md:w-[500px] md:h-[500px] bg-gradient-to-tl from-pink-200 via-purple-200 to-fuchsia-200 opacity-30 rounded-full filter blur-3xl animate-pulse [animation-delay:2s]"></div>

      {/* Content container, ensuring it's above decorative elements with z-index */}
      <div className="relative z-10 flex flex-col h-full">
        <header>
          <span className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">ASCENDION</span>
          {/* Sub-branding text as shown in some corporate logos */}
          <p className="text-xs md:text-sm text-slate-600 -mt-0.5 md:-mt-0">ALWAYS ASCENDING</p>
        </header>

        <main className="my-auto">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-700 leading-tight mb-4">
            Innovate.
            <br />
            Transform.
            <br />
            Succeed.
          </h1>
          <p className="text-base md:text-lg text-slate-500 max-w-md">
            Securely access your personalized Ascendion experience and unlock new possibilities.
          </p>
        </main>

        <footer className="mt-auto">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Ascendion. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};

// The main page component for the login screen.
// It uses MainAppLayout to structure the page into two main sections.
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout
      leftContent={<LeftBrandingSection />}
      rightContent={<LoginForm />}
      // The MainAppLayout handles overall grid structure, padding, and background for sections.
      // Specific styling for LoginForm is handled within the LoginForm component itself (e.g., as a Card).
    />
  );
};

export default IndexPage;
