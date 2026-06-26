import { useEffect, useRef } from 'react';
import ChevronRight from '../../assets/chevron-right.svg';
import ChevronLeft from '../../assets/chevron-left.svg';
import ArrowPath from '../../assets/arrow-path.svg';

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 40; // Increased parallax intensity
      const y = (clientY / window.innerHeight - 0.5) * 40;
      heroRef.current.style.setProperty('--mouse-x', `${x}px`);
      heroRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden px-6 selection:bg-forsythia/30"
    >
      {/* Premium Ambient Background (Mesh Gradient effect) */}
      <div className="absolute inset-0 bg-oceanic-noir z-0 overflow-hidden">
        {/* Decorative Grid Lines with mask */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#114C5A_1px,transparent_1px),linear-gradient(to_bottom,#114C5A_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>

        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-nocturnal-expedition/40 rounded-full blur-[120px] mix-blend-screen animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-forsythia/10 rounded-full blur-[140px] mix-blend-screen animate-blob-delayed"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] bg-nocturnal-expedition/30 rounded-full blur-[160px] mix-blend-screen animate-blob-delayed-long"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center w-full transition-transform duration-100 ease-out" style={{ transform: 'translate(var(--mouse-x), var(--mouse-y))' }}>
        
        {/* Premium Typography */}
        <h1 className="text-6xl md:text-8xl lg:text-[7rem] font-mono font-bold tracking-tighter mb-8 leading-[0.9] animate-slide-up">
          <span className="block text-arctic-powder drop-shadow-2xl">Power your</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-br from-arctic-powder via-mystic-mint to-nocturnal-expedition drop-shadow-2xl">future with</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-deep-saffron drop-shadow-[0_0_40px_rgba(255,200,1,0.4)]">
            AI
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-mystic-mint/90 mb-12 max-w-2xl font-sans animate-slide-up leading-relaxed" style={{ animationDelay: '150ms', opacity: 0, animationFillMode: 'forwards' }}>
          Deploy custom enterprise agents and automate complex workflows. Scale your intelligence with Armory today.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6 animate-slide-up" style={{ animationDelay: '300ms', opacity: 0, animationFillMode: 'forwards' }}>
          <button className="group relative flex items-center justify-center gap-2 bg-arctic-powder text-oceanic-noir font-mono font-semibold px-8 py-4 rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,200,1,0.5)] active:scale-95 w-full sm:w-auto focus-visible:ring-2 focus-visible:ring-forsythia outline-none">
            <span className="relative z-10">Build A Workflow</span>
            <img src={ChevronRight} alt="" className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-r from-forsythia to-deep-saffron opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"></div>
          </button>
          
          <button className="group relative flex items-center justify-center gap-2 glass-panel text-arctic-powder font-sans font-medium px-8 py-4 rounded-lg transition-all duration-300 hover:bg-nocturnal-expedition/40 hover:border-mystic-mint/30 w-full sm:w-auto focus-visible:ring-2 focus-visible:ring-forsythia outline-none">
            <img src={ChevronLeft} alt="" className="w-4 h-4 opacity-70 group-hover:-translate-x-1 transition-transform duration-300" aria-hidden="true" loading="lazy" />
            <span>Explore Custom Agents</span>
          </button>
        </div>

        {/* Dashboard Preview Glass Panel */}
        <div className="mt-24 w-full max-w-5xl glass-panel rounded-2xl p-6 md:p-10 relative transform perspective-1000 rotate-x-[2deg] transition-all duration-[600ms] hover:rotate-x-0 animate-slide-up" style={{ animationDelay: '450ms', opacity: 0, animationFillMode: 'forwards' }}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-forsythia/70 to-transparent shadow-[0_0_20px_rgba(255,200,1,0.8)]"></div>
          
          <div className="flex gap-2 mb-8">
            <div className="w-3 h-3 rounded-full bg-nocturnal-expedition shadow-inner"></div>
            <div className="w-3 h-3 rounded-full bg-nocturnal-expedition shadow-inner"></div>
            <div className="w-3 h-3 rounded-full bg-nocturnal-expedition shadow-inner"></div>
          </div>
          
          <div className="absolute top-4 right-4">
            <img src={ArrowPath} alt="Syncing data" className="w-5 h-5 opacity-40 animate-spin-slow" loading="lazy" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="h-40 rounded-xl bg-oceanic-noir/50 border border-nocturnal-expedition/30 flex items-center justify-center group relative overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent to-nocturnal-expedition/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               <div className="w-12 h-12 rounded-full bg-forsythia/10 border border-forsythia/30 group-hover:scale-110 group-hover:bg-forsythia/20 transition-all duration-500 shadow-[0_0_30px_rgba(255,200,1,0.1)] flex items-center justify-center relative z-10">
                 <div className="w-4 h-4 bg-forsythia rounded-sm rotate-45 group-hover:rotate-90 transition-transform duration-500 shadow-[0_0_15px_rgba(255,200,1,0.8)]"></div>
               </div>
            </div>
            <div className="h-40 rounded-xl bg-oceanic-noir/50 border border-nocturnal-expedition/30 md:col-span-3 relative overflow-hidden flex flex-col justify-end p-6 group">
               <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-forsythia via-deep-saffron to-nocturnal-expedition"></div>
               
               {/* Animated fake data bars */}
               <div className="space-y-4 w-full">
                 <div className="h-2 bg-nocturnal-expedition/40 rounded-full w-1/4 relative overflow-hidden">
                   <div className="absolute inset-y-0 left-0 bg-forsythia w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-[1500ms] ease-out"></div>
                 </div>
                 <div className="h-2 bg-nocturnal-expedition/40 rounded-full w-full relative overflow-hidden">
                   <div className="absolute inset-y-0 left-0 bg-mystic-mint w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-[2000ms] ease-out" style={{ transitionDelay: '100ms' }}></div>
                 </div>
                 <div className="h-2 bg-nocturnal-expedition/40 rounded-full w-2/3 relative overflow-hidden">
                   <div className="absolute inset-y-0 left-0 bg-deep-saffron w-full -translate-x-full group-hover:translate-x-0 transition-transform duration-[1200ms] ease-out" style={{ transitionDelay: '200ms' }}></div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
