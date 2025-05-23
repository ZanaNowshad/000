'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@zaibuld/ui';
import { motion } from 'framer-motion';
import { Code, Terminal, Cpu, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'AI-Powered Code Generation',
    description: 'Generate code with GPT-4 Turbo, enhanced with LangChain.js for chain-of-thought reasoning and anti-hallucination guardrails.',
    icon: <Code className="h-8 w-8 text-primary-600" />,
  },
  {
    title: 'In-Browser Development Environment',
    description: 'Full-featured IDE with Monaco Editor, LSP support, and an integrated terminal powered by WebContainers.',
    icon: <Terminal className="h-8 w-8 text-primary-600" />,
  },
  {
    title: 'Real-Time Collaboration',
    description: 'Work together in real-time with WebSocket/Redis Pub/Sub for instant updates and notifications.',
    icon: <Zap className="h-8 w-8 text-primary-600" />,
  },
  {
    title: 'Advanced Project Orchestration',
    description: 'Manage complex projects with XState state machines and intelligent workflow automation.',
    icon: <Cpu className="h-8 w-8 text-primary-600" />,
  },
];

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !headingRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });

    tl.fromTo(
      headingRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5 }
    );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <div
          ref={headingRef}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-gray-600">
            ZAIBuilD combines cutting-edge technologies to provide a seamless development experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card animated>
                <CardHeader>
                  <div className="mb-4">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Additional content can be added here */}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}