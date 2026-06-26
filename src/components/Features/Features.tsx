import { useState } from 'react';
import { features } from '../../data/features';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import ChevronDown from '../../assets/chevron-down.svg';

export const Features = () => {
  const isMobile = useBreakpoint(768);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [ref, isVisible] = useIntersectionObserver();

  // Asymmetric Grid layout rules for the 4 items
  const gridClasses = [
    "md:col-span-4 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-2 md:row-span-1",
    "md:col-span-4 md:row-span-1",
  ];

  return (
    <section ref={ref} id="features" className={`py-32 px-6 max-w-7xl mx-auto relative z-20 transition-all duration-[800ms] ${isVisible ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-16 blur-sm'}`}>
      <div className="mb-20 text-center md:text-left flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-6xl font-mono font-bold text-arctic-powder tracking-tight mb-6 leading-tight">
            Neural engines, <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-forsythia to-deep-saffron">unleashed.</span>
          </h2>
          <p className="text-mystic-mint/90 text-lg leading-relaxed">
            Seamlessly connect your custom data to GPT-4, Claude 3, and Perplexity. 
            Build agents that don't just process, they fundamentally understand your business.
          </p>
        </div>
      </div>

      <div className={`grid gap-6 transition-all duration-500 ${isMobile ? 'grid-cols-1' : 'grid-cols-6'}`}>
        {features.map((feature, index) => {
          const isActive = activeIndex === index;
          const colSpan = isMobile ? '' : gridClasses[index];
          
          return (
            <div 
              key={feature.id}
              className={`
                group relative flex flex-col overflow-hidden rounded-2xl cursor-pointer
                ${isMobile 
                  ? 'border border-nocturnal-expedition/40 bg-oceanic-noir' 
                  : `glass-panel glass-panel-hover ${colSpan}`
                }
                ${!isMobile && isActive ? 'ring-1 ring-forsythia/40 shadow-[0_0_30px_rgba(255,200,1,0.15)]' : ''}
              `}
              onMouseEnter={() => !isMobile && setActiveIndex(index)}
              onClick={() => isMobile && setActiveIndex(isActive ? -1 : index)}
            >
              {/* Premium Inner Glow */}
              {!isMobile && (
                <div className="absolute inset-0 bg-gradient-to-br from-forsythia/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>
              )}

              <div className="p-8 flex flex-col h-full relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-nocturnal-expedition to-oceanic-noir border border-nocturnal-expedition/60 group-hover:border-forsythia/40 transition-all duration-300 shadow-inner">
                    <img src={`/src/assets/${feature.icon}`} alt="" className="w-7 h-7 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,200,1,0.6)] transition-all duration-300" />
                  </div>
                  
                  {isMobile && (
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${isActive ? 'bg-forsythia/10' : 'bg-nocturnal-expedition/20'}`}>
                      <img 
                        src={ChevronDown} 
                        alt="" 
                        className={`w-4 h-4 transition-transform duration-[400ms] ${isActive ? 'rotate-180 text-forsythia' : 'text-mystic-mint'}`} 
                      />
                    </div>
                  )}
                </div>

                <h3 className="text-2xl font-mono font-semibold text-arctic-powder mb-3 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-arctic-powder group-hover:to-mystic-mint transition-all duration-300">{feature.title}</h3>
                
                <div 
                  className={`
                    text-mystic-mint/80 text-base leading-relaxed transition-all duration-[400ms] overflow-hidden
                    ${isMobile ? (isActive ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0 m-0') : 'max-h-40 opacity-100 mt-auto'}
                  `}
                >
                  {feature.description}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
