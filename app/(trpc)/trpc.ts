import { initTRPC, TRPCError } from "@trpc/server";
import { createTRPCContext } from "./context";

export { createTRPCContext };
export type { Context } from "./context";

export const t = initTRPC.context<typeof createTRPCContext>().create();

export const router = t.router;

const enforceUserIsAuthed = t.middleware(({ ctx, next }) => {
  if (!ctx.auth?.isAuthenticated) {
    throw new TRPCError({ code: "UNAUTHORIZED" });
  }
  return next();
});

// Anyone can access this procedure
export const publicProcedure = t.procedure;
// Only authenticated users can access this procedure
export const protectedProcedure = t.procedure.use(enforceUserIsAuthed);
