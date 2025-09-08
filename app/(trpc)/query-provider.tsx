"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, TRPCClientError } from "@trpc/client";
import { useState } from "react";
import { api } from "./query-client";

export function TRPCQueryProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: (failureCount, error) => {
              // Don't retry on authorization errors
              if (
                error instanceof TRPCClientError &&
                error.data?.code === "UNAUTHORIZED"
              ) {
                return false;
              }
              // Default retry logic for other errors (max 3 retries)
              return failureCount < 3;
            },
          },
          mutations: {
            retry: false, // Typically don't retry mutations
          },
        },
      })
  );

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        httpBatchLink({
          url: "/api/trpc",
        }),
      ],
    })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {children}
      </api.Provider>
    </QueryClientProvider>
  );
}
