"use client";

import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { PropsWithChildren, useState } from "react";
import { makeQueryClient } from "./query-client";
import superjson from "superjson";
import { AppRouter } from "./routers";
import { getBaseUrl } from "@/lib/base-url";

export const api = createTRPCReact<AppRouter>();

let clientQueryClientSingleton: QueryClient;
function getQueryClient() {
  // For server create new client
  if (typeof window === "undefined") return makeQueryClient();
  return (clientQueryClientSingleton ??= makeQueryClient());
}

function getUrl() {
  // need to change for deploy url
  return `${getBaseUrl()}/api/trpc`;
}

export function TRPCProvider(props: PropsWithChildren) {
  const queryClient = getQueryClient();
  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        httpBatchLink({
          transformer: superjson,
          url: getUrl(),
          headers: async () => {
            // On the server (RSC/SSR), forward incoming headers (esp. Cookie)
            try {
              const { headers: nextHeaders } = await import("next/headers");
              const headers = await nextHeaders();
              const h = new Headers(headers);
              h.set(
                "x-trpc-source",
                typeof window === "undefined" ? "rsc" : "browser"
              );
              return Object.fromEntries(h.entries());
            } catch {
              // On the client, nothing special
              return { "x-trpc-source": "browser" };
            }
          },
        }),
      ],
    })
  );

  return (
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </api.Provider>
  );
}
