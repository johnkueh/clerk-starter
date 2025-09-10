import { initTRPC, TRPCError } from "@trpc/server";
import { cache } from "react";
import superjson from "superjson";
import { headers } from "next/headers";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/prisma/client";

export const createTRPCContext = cache(async (opts?: { headers?: Headers }) => {
  // Get headers - either from options or from Next.js
  const h = opts?.headers ?? (await headers());
  const db = prisma;

  // Initialize services with dependency injection

  // Base services (no dependencies)

  return {
    headers: h,
    auth: await auth(),
    db,
  };
});

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;
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
