import { headers } from "next/headers";
import { auth } from "@clerk/nextjs/server";
import { prisma } from "@/prisma/client";

export async function createTRPCContext(opts?: { headers?: Headers }) {
  // Get headers - either from options or from Next.js
  const h = opts?.headers ?? (await headers());
  const db = prisma;

  return {
    headers: h,
    auth: await auth(),
    db,
  };
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
