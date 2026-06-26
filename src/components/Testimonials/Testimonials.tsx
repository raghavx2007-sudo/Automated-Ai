export const Testimonials = () => {
  const reviews = [
    { name: "Sarah Chen", role: "CTO, Vertex Labs", content: "The reliability of Armory is unmatched. We've migrated our entire neural pipeline to their edge nodes with zero downtime.", rating: 5 },
    { name: "Michael Chang", role: "VP Eng, FlowState AI", content: "Instead of building our own agent logic from scratch, we used Armory. We went from a prototype to a global production launch in weeks.", rating: 5 },
    { name: "Elena Rodriguez", role: "Lead Architect, Neural Sync", content: "The observability tools allow us to monitor agent accuracy in real-time. It has become a vital part of our model evaluation workflow.", rating: 5 },
    { name: "David Kim", role: "Director of AI, Sentinel Ops", content: "The node-based builder is a game changer for our team. Even our non-technical stakeholders can now help map out complex agent behaviors.", rating: 5 }
  ];

  // Duplicate for infinite scroll effect
  const marqueeItems = [...reviews, ...reviews];

  return (
    <section id="testimonials" className="py-24 overflow-hidden relative z-10 bg-oceanic-noir border-y border-nocturnal-expedition/30 shadow-[inset_0_20px_40px_rgba(0,0,0,0.5)]">
      <div className="absolute inset-0 bg-oceanic-noir z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-arctic-powder mb-4">Trusted by the pioneers</h2>
        <p className="text-mystic-mint text-lg">From high-growth startups to enterprise research labs, Armory is the chosen infrastructure.</p>
      </div>

      <div className="relative z-10 w-full flex overflow-hidden mask-edges">
        <div className="flex animate-marquee hover:[animation-play-state:paused] gap-6 w-[200%]">
          {marqueeItems.map((review, i) => (
            <article key={i} className="flex-shrink-0 w-80 md:w-96 bg-nocturnal-expedition/10 backdrop-blur-sm border border-nocturnal-expedition/40 p-8 rounded-xl transition-colors duration-300 hover:bg-nocturnal-expedition/20">
              <div className="flex items-center gap-1 mb-6 text-forsythia">
                {[...Array(review.rating)].map((_, j) => (
                  <svg key={j} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-arctic-powder font-sans text-sm leading-relaxed mb-8 h-20">"{review.content}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-nocturnal-expedition to-mystic-mint flex items-center justify-center font-mono font-bold text-oceanic-noir">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold text-arctic-powder">{review.name}</h4>
                  <p className="text-xs text-mystic-mint/80">{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      {/* Required CSS for Marquee in global or here */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};
