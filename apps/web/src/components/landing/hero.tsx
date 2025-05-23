'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@zaibuld/ui';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const layerOneRef = useRef<HTMLDivElement>(null);
  const layerTwoRef = useRef<HTMLDivElement>(null);
  const layerThreeRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    // Parallax effect for layers
    tl.to(layerOneRef.current, { y: 100, ease: 'none' }, 0);
    tl.to(layerTwoRef.current, { y: 200, ease: 'none' }, 0);
    tl.to(layerThreeRef.current, { y: 300, ease: 'none' }, 0);
    tl.to(textRef.current, { y: -50, ease: 'none' }, 0);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-indigo-900 to-purple-900"
    >
      {/* Parallax Layers */}
      <div
        ref={layerOneRef}
        className="absolute inset-0 z-10 opacity-20"
        style={{
          backgroundImage: 'url(/images/grid.svg)',
          backgroundSize: '50px 50px',
        }}
      />
      <div
        ref={layerTwoRef}
        className="absolute inset-0 z-20 opacity-30"
        style={{
          backgroundImage: 'url(/images/dots.svg)',
          backgroundSize: '20px 20px',
        }}
      />
      <div
        ref={layerThreeRef}
        className="absolute inset-0 z-30 opacity-10"
        style={{
          backgroundImage: 'url(/images/circuit.svg)',
          backgroundSize: 'cover',
        }}
      />

      {/* Content */}
      <div className="relative z-40 flex h-full w-full items-center justify-center px-4">
        <div
          ref={textRef}
          className="max-w-4xl text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 text-5xl font-bold text-white md:text-7xl"
          >
            ZAIBuilD
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-xl text-gray-200 md:text-2xl"
          >
            Next-generation, AI-driven full-stack IDE and orchestration platform
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-center"
          >
            <Button size="lg" animated>
              Get Started
            </Button>
            <Button size="lg" variant="outline" animated>
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}