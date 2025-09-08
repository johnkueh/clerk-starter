import { initTRPC, TRPCError } from "@trpc/server";
import { createTRPCContext } from "./context";

export { createTRPCContext };
export type { Context } from "./context";

export const t = initTRPC.context<typeof createTRPCContext>().create();

export const router = t.router;

// Anyone can access this procedure
export const publicProcedure = t.procedure;

// Only authenticated users can access this procedure
export const authedProcedure = t.procedure.use(
  t.middleware(({ ctx, next }) => {
    if (!ctx.auth?.isAuthenticated) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }
    return next();
  })
);

// Only authenticated users with organization can access this procedure
export const orgProcedure = authedProcedure.use(
  t.middleware(({ ctx, next }) => {
    if (!ctx.auth?.orgId) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return next({
      ctx: {
        ...ctx,
        auth: {
          ...ctx.auth,
          orgId: ctx.auth.orgId,
        },
      },
    });
  })
);
