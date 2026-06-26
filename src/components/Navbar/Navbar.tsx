import { useState } from 'react';
import SearchIcon from '../../assets/search.svg';
import XMarkIcon from '../../assets/x-mark.svg';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ['Features', 'Pricing', 'Testimonials'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-oceanic-noir/80 backdrop-blur-md border-b border-nocturnal-expedition/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer focus-visible:ring-2 focus-visible:ring-forsythia rounded-md" tabIndex={0}>
          <div className="w-6 h-6 bg-forsythia rounded-sm rotate-45 transform transition-transform duration-180 group-hover:rotate-90"></div>
          <span className="font-mono text-xl font-bold tracking-tighter text-arctic-powder">
            armory
          </span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-mystic-mint/80 hover:text-arctic-powder transition-colors duration-180 relative group focus-visible:ring-2 focus-visible:ring-forsythia rounded-sm outline-none px-1"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-forsythia transition-all duration-180 group-hover:w-full"></span>
            </a>
          ))}
          <button aria-label="Search" className="text-mystic-mint hover:text-arctic-powder transition-colors focus-visible:ring-2 focus-visible:ring-forsythia rounded-md p-1 outline-none">
            <img src={SearchIcon} alt="Search" className="w-5 h-5" width="20" height="20" loading="lazy" />
          </button>
        </nav>

        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-md hover:bg-nocturnal-expedition/30 transition-colors duration-180 focus-visible:ring-2 focus-visible:ring-forsythia outline-none"
          aria-label={menuOpen ? "Close Navigation" : "Open Navigation"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <img src={XMarkIcon} alt="Close Menu" className="w-6 h-6" width="24" height="24" loading="lazy" />
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="w-5 h-0.5 bg-arctic-powder block"></span>
              <span className="w-5 h-0.5 bg-arctic-powder block"></span>
            </div>
          )}
        </button>
      </div>
    </header>
  );
};
