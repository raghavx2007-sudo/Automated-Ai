import React, { useState, useMemo, useCallback } from 'react';
import type { Currency, BillingCycle, PlanTier } from '../../data/pricingMatrix';
import { getPlanDetails } from '../../utils/pricingEngine';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import ChevronRight from '../../assets/chevron-right.svg';
import ChevronUpSolid from '../../assets/chevron-up-solid.svg';

const PlanFeatureList = React.memo(({ features }: { features: string[] }) => (
  <ul className="mt-8 space-y-4 flex-1">
    {features.map((feature, idx) => (
      <li key={idx} className="flex items-start gap-3 text-mystic-mint/80 text-base">
        <div className="w-5 h-5 rounded-full bg-forsythia/10 flex items-center justify-center shrink-0 mt-0.5 border border-forsythia/20 shadow-[0_0_8px_rgba(255,200,1,0.2)]">
          <svg className="w-3 h-3 text-forsythia" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <span>{feature}</span>
      </li>
    ))}
  </ul>
));
PlanFeatureList.displayName = 'PlanFeatureList';

const PriceText = React.memo(({ formattedPrice, isAnnualDiscount, billing }: { formattedPrice: string; isAnnualDiscount: boolean; billing: BillingCycle }) => (
  <div className="mt-6 h-24">
    <div className="flex items-baseline gap-1">
      <span className="text-5xl font-mono font-bold text-arctic-powder tracking-tight">{formattedPrice}</span>
      <span className="text-mystic-mint/60 font-sans text-lg">/ {billing === 'monthly' ? 'mo' : 'yr'}</span>
    </div>
    {isAnnualDiscount && (
      <div className="inline-flex items-center gap-1 mt-3 px-3 py-1 bg-deep-saffron/10 border border-deep-saffron/20 rounded-full">
        <img src={ChevronUpSolid} alt="" className="w-3 h-3 text-deep-saffron" aria-hidden="true" loading="lazy" />
        <p className="text-deep-saffron text-sm font-semibold tracking-wide">Save 16% annually</p>
      </div>
    )}
  </div>
));
PriceText.displayName = 'PriceText';

const PlanCard = React.memo(({ 
  tier, 
  currency, 
  billing 
}: { 
  tier: PlanTier; 
  currency: Currency; 
  billing: BillingCycle; 
}) => {
  const { data, formattedPrice, isAnnualDiscount } = useMemo(
    () => getPlanDetails(tier, currency, billing),
    [tier, currency, billing]
  );

  const isPro = tier === 'pro';

  return (
    <article className={`relative flex flex-col rounded-3xl transition-all duration-[500ms]
      ${isPro 
        ? 'scale-105 z-10 shadow-[0_30px_60px_rgba(17,76,90,0.4)]' 
        : 'hover:-translate-y-2'
      }
    `}>
      {/* Spinning Gradient Border Effect for Pro */}
      {isPro && (
        <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none -m-[1px]">
          <div className="absolute inset-[-100%] animate-gradient-border opacity-70" style={{
            background: 'conic-gradient(from 0deg, transparent 0 340deg, #FFC801 360deg)'
          }}></div>
        </div>
      )}

      {/* Card Inner Content */}
      <div className={`relative flex flex-col p-10 h-full rounded-3xl
        ${isPro 
          ? 'bg-nocturnal-expedition/95 backdrop-blur-xl border border-transparent' 
          : 'glass-panel'
        }
      `}>
        {isPro && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-gradient-to-r from-forsythia to-deep-saffron text-oceanic-noir text-xs font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(255,200,1,0.5)]">
            Most Popular
          </div>
        )}
        
        <h3 className="text-2xl font-mono font-bold text-arctic-powder">{data.name}</h3>
        
        <PriceText formattedPrice={formattedPrice} isAnnualDiscount={isAnnualDiscount} billing={billing} />
        
        <button className={`mt-8 w-full group relative flex justify-center items-center gap-2 font-mono font-medium px-6 py-4 rounded-xl overflow-hidden transition-all duration-300 focus-visible:ring-2 focus-visible:ring-forsythia outline-none
          ${isPro 
            ? 'bg-arctic-powder text-oceanic-noir hover:scale-[1.02] shadow-[0_0_20px_rgba(255,200,1,0.3)] hover:shadow-[0_0_30px_rgba(255,200,1,0.5)]' 
            : 'bg-transparent text-arctic-powder border border-nocturnal-expedition hover:bg-nocturnal-expedition/30'
          }
        `}>
          <span className="relative z-10">Get Started</span>
          <img src={ChevronRight} alt="" className={`w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1 ${!isPro && 'opacity-70'}`} loading="lazy" />
          {isPro && <div className="absolute inset-0 bg-gradient-to-r from-forsythia to-deep-saffron opacity-0 group-hover:opacity-20 transition-opacity duration-300 z-0"></div>}
        </button>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-nocturnal-expedition/50 to-transparent my-8"></div>

        <PlanFeatureList features={data.features} />
      </div>
    </article>
  );
});
PlanCard.displayName = 'PlanCard';

export const Pricing = () => {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [billing, setBilling] = useState<BillingCycle>('annual');

  const handleCurrencyChange = useCallback((c: Currency) => setCurrency(c), []);
  const handleBillingChange = useCallback((b: BillingCycle) => setBilling(b), []);

  const tiers: PlanTier[] = useMemo(() => ['starter', 'pro', 'enterprise'], []);
  const currencies: Currency[] = useMemo(() => ['USD', 'EUR', 'INR'], []);
  
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section ref={ref} id="pricing" className={`py-40 px-6 max-w-7xl mx-auto relative z-10 transition-all duration-[1000ms] ease-out ${isVisible ? 'opacity-100 translate-y-0 filter-none' : 'opacity-0 translate-y-24 blur-md'}`}>
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-mono font-bold text-arctic-powder mb-6 tracking-tight">
          Built for <span className="text-transparent bg-clip-text bg-gradient-to-br from-mystic-mint to-nocturnal-expedition">scale.</span>
        </h2>
        <p className="text-mystic-mint/90 max-w-2xl mx-auto text-lg md:text-xl mb-12">
          Transparent pricing for organizations of all sizes. No hidden fees, just raw compute power.
        </p>

        {/* Toggles Container */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {/* Billing Toggle */}
          <div className="flex items-center p-1.5 bg-oceanic-noir/50 border border-nocturnal-expedition/50 rounded-xl backdrop-blur-md shadow-inner">
            <button
              onClick={() => handleBillingChange('monthly')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${billing === 'monthly' ? 'bg-nocturnal-expedition/80 text-arctic-powder shadow-md' : 'text-mystic-mint hover:text-arctic-powder'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => handleBillingChange('annual')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${billing === 'annual' ? 'bg-nocturnal-expedition/80 text-arctic-powder shadow-md' : 'text-mystic-mint hover:text-arctic-powder'}`}
            >
              Annually <span className="text-deep-saffron ml-1.5 text-xs bg-deep-saffron/10 px-2 py-0.5 rounded-full">Save 16%</span>
            </button>
          </div>

          {/* Currency Selector */}
          <div className="flex gap-2">
            {currencies.map(c => (
              <button
                key={c}
                onClick={() => handleCurrencyChange(c)}
                className={`px-4 py-2.5 rounded-xl text-sm font-mono font-bold transition-all duration-300 border ${currency === c ? 'bg-nocturnal-expedition/30 border-forsythia/50 text-forsythia shadow-[0_0_15px_rgba(255,200,1,0.1)]' : 'bg-oceanic-noir/50 border-nocturnal-expedition/40 text-mystic-mint hover:text-arctic-powder hover:border-mystic-mint/40 backdrop-blur-md'}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center max-w-6xl mx-auto pt-8">
        {tiers.map(tier => (
          <PlanCard 
            key={tier} 
            tier={tier} 
            currency={currency} 
            billing={billing} 
          />
        ))}
      </div>
    </section>
  );
};
