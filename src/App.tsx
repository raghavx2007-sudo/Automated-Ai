import React, { Suspense } from 'react';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { Footer } from './components/Footer/Footer';

// Lazy load components below the fold for maximum Lighthouse performance
const Features = React.lazy(() => import('./components/Features/Features').then(module => ({ default: module.Features })));
const Pricing = React.lazy(() => import('./components/Pricing/Pricing').then(module => ({ default: module.Pricing })));
const Testimonials = React.lazy(() => import('./components/Testimonials/Testimonials').then(module => ({ default: module.Testimonials })));
import { Loader } from './components/Loader/Loader';

export default function App() {
  return (
    <div className="min-h-screen bg-oceanic-noir text-arctic-powder selection:bg-forsythia/30 font-sans">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="w-8 h-8 border-2 border-forsythia border-t-transparent rounded-full animate-spin"></div></div>}>
          <Features />
        </Suspense>
        
        <Suspense fallback={<div className="h-96 flex items-center justify-center"><div className="w-8 h-8 border-2 border-forsythia border-t-transparent rounded-full animate-spin"></div></div>}>
          <Pricing />
        </Suspense>

        <Suspense fallback={<div className="h-40 flex items-center justify-center"><div className="w-8 h-8 border-2 border-forsythia border-t-transparent rounded-full animate-spin"></div></div>}>
          <Testimonials />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
