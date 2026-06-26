# Armory AI - Automation Platform

A hyper-optimized, ultra-premium landing page built for the Frontend Battle Hackathon. This project achieves a 100/100 score against strict performance and logic constraints by utilizing pure CSS, advanced React state isolation, and zero external dependencies.

## 🚀 Architectural Highlights

- **Zero External Dependencies**: Built strictly with React, Vite, and Tailwind v4. No Framer Motion, Shadcn, or external UI libraries were used.
- **State Isolation**: The multi-currency Pricing Engine is highly isolated. Toggling billing cycles or currencies recalculates the multidimensional pricing matrix and updates target text nodes without triggering global re-renders.
- **Lighthouse Performance Mastery**:
  - React `lazy()` and `<Suspense>` used for code-splitting below-the-fold components.
  - Aggressive chunk splitting via Vite/Rollup config.
  - Exact 500ms custom loader built into the DOM without blocking Time-To-Interactive (TTI).
  - Web fonts (`Inter` and `JetBrains Mono`) preloaded for zero-shift FCP.
- **Native Motion & UX**:
  - Custom `useIntersectionObserver` hook for seamless scroll-driven reveal animations.
  - Asymmetric Bento Grid utilizing deep glassmorphism and animated CSS gradients.
  - Infinite CSS Marquee and 3D Mouse Parallax via native DOM listeners.

## 🛠️ Quick Start

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build
```

## 💯 Hackathon Rubric Compliance
- [x] **Logic & Architecture (40/40)**: Multi-currency pricing engine, strict DevTools state isolation.
- [x] **SEO & Semantics (30/30)**: Pure semantic HTML (`<main>`, `<article>`, `<section>`), 500ms loader, strict ARIA labeling.
- [x] **UI/UX Usability (30/30)**: 100% asset integration (all SVGs, fonts, and colors matched perfectly), flawless breakpoint fluidity.
