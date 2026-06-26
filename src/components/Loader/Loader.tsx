import { useEffect, useState } from 'react';

export const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade out at 350ms
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 350);

    // Completely unmount at exactly 500ms
    const unmountTimer = setTimeout(() => {
      setIsVisible(false);
    }, 500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-oceanic-noir transition-opacity duration-150 ease-out ${isFading ? 'opacity-0' : 'opacity-100'}`}
      role="status"
      aria-label="Loading application"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute w-16 h-16 border-4 border-nocturnal-expedition rounded-full"></div>
        <div className="absolute w-16 h-16 border-4 border-forsythia rounded-full border-t-transparent animate-spin"></div>
        <div className="w-6 h-6 bg-forsythia rounded-sm rotate-45 animate-pulse"></div>
      </div>
      <p className="mt-8 font-mono text-mystic-mint/60 tracking-widest text-sm animate-pulse uppercase">
        Initializing Workspace...
      </p>
    </div>
  );
};
