import LinkIcon from '../../assets/link.svg';
import LinkSolidIcon from '../../assets/link-solid.svg';
import ChevronUp from '../../assets/chevron-up.svg';

export const Footer = () => {
  return (
    <footer className="border-t border-nocturnal-expedition/40 bg-oceanic-noir pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2 space-y-6">
            <h3 className="font-mono text-2xl font-bold text-arctic-powder">armory</h3>
            <p className="text-mystic-mint/80 max-w-sm text-sm">
              Get smarter about AI systems. Weekly insights on automation, AI workflows, and real builds. No fluff, just what works.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="jane@armory.com" 
                className="bg-nocturnal-expedition/10 border border-nocturnal-expedition/50 text-arctic-powder px-4 py-2 rounded-md focus:outline-none focus:border-forsythia/50 transition-colors w-64 font-sans text-sm"
              />
              <button className="bg-arctic-powder text-oceanic-noir px-4 py-2 rounded-md font-mono font-medium hover:bg-mystic-mint transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-arctic-powder font-mono font-semibold">Product</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Testimonials'].map(link => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="group flex items-center gap-2 text-mystic-mint/70 hover:text-forsythia transition-colors text-sm font-sans focus-visible:ring-2 focus-visible:ring-forsythia rounded-sm outline-none">
                    <img src={LinkIcon} alt="" className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" loading="lazy" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-arctic-powder font-semibold mb-6 text-sm">Company</h4>
            <ul className="space-y-3">
              {['About Us', 'Contact Us', 'Book A Call'].map(link => (
                <li key={link}>
                  <a href="#" className="group flex items-center gap-2 text-mystic-mint/70 hover:text-forsythia transition-colors text-sm font-sans focus-visible:ring-2 focus-visible:ring-forsythia rounded-sm outline-none">
                    <img src={LinkSolidIcon} alt="" className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" loading="lazy" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-nocturnal-expedition/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-mystic-mint/50 text-xs font-sans">&copy; 2026 Armory AI. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-mystic-mint/50 hover:text-arctic-powder transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
            </a>
            <a href="#" className="text-mystic-mint/50 hover:text-arctic-powder transition-colors focus-visible:ring-2 focus-visible:ring-forsythia rounded-sm outline-none p-1">
              <span className="sr-only">GitHub</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
            </a>
            <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="p-1.5 bg-nocturnal-expedition/20 hover:bg-nocturnal-expedition/40 rounded-md transition-colors focus-visible:ring-2 focus-visible:ring-forsythia outline-none ml-4" aria-label="Back to top">
              <img src={ChevronUp} alt="" aria-hidden="true" className="w-5 h-5" loading="lazy" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
