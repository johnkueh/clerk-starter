import { headers } from "next/headers";
import { auth } from "@clerk/nextjs/server";

export async function createTRPCContext(opts?: { headers?: Headers }) {
  // Get headers - either from options or from Next.js
  const h = opts?.headers ?? (await headers());

  return {
    headers: h,
    auth: await auth(),
  };
}

export type Context = Awaited<ReturnType<typeof createTRPCContext>>;
