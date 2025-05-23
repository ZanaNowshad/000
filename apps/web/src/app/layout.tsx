import type { Metadata } from 'next';
import './globals.css';
import { TRPCProvider } from '@/providers/trpc-provider';
import { Navbar, Footer } from '@/components/layout';

export const metadata: Metadata = {
  title: 'ZAIBuilD - AI-driven Full-Stack IDE',
  description: 'Next-generation, AI-driven full-stack IDE and orchestration platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans">
        <TRPCProvider>
          <Navbar />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </TRPCProvider>
      </body>
    </html>
  );
}