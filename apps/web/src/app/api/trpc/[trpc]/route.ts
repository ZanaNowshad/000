import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { appRouter } from '@zaibuld/api';

export const runtime = 'edge';

function createContext() {
  return {};
}

export async function GET(req: Request) {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
  });
}

export async function POST(req: Request) {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext,
  });
}