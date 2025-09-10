import { createTRPCContext } from "@/app/(trpc)/init";
import { appRouter } from "@/app/(trpc)/routers";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: appRouter,
    createContext: () => createTRPCContext({ headers: req.headers }),
  });
}

export { handler as GET, handler as POST };
