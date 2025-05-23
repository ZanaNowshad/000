import { FetchCreateContextFnOptions } from '@trpc/server/adapters/fetch';

interface CreateContextOptions {
  session?: null;
}

export const createInnerTRPCContext = (opts: CreateContextOptions) => {
  return {
    session: opts.session,
  };
};

export const createTRPCContext = async (opts: FetchCreateContextFnOptions) => {
  return {
    req: opts.req,
    resHeaders: opts.resHeaders,
    session: null,
  };
};

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
