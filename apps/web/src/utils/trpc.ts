import { createTRPCReact } from '@trpc/react-query';
import { type AppRouter } from '@zaibuld/api';

export const trpc = createTRPCReact<AppRouter>();