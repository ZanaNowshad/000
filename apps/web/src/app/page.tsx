import { Hero, Features } from '@/components/landing';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Features />
    </main>
  );
}