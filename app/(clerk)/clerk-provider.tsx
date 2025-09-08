import { PropsWithChildren } from "react";
import { ClerkProvider as BaseClerkProvider } from "@clerk/nextjs";

export function ClerkProvider({ children }: PropsWithChildren) {
  return (
    <BaseClerkProvider
      taskUrls={{
        "choose-organization": "/organization/setup",
      }}
    >
      {children}
    </BaseClerkProvider>
  );
}
