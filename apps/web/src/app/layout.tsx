import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { TRPCProvider } from '@/providers/trpc-provider';
import { Navbar, Footer } from '@/components/layout';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
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