import { shadcn } from "@clerk/themes";
import { PropsWithChildren } from "react";
import { ClerkProvider as BaseClerkProvider } from "@clerk/nextjs";
import "./clerk.css";

export function ClerkProvider({ children }: PropsWithChildren) {
  return (
    <BaseClerkProvider
      appearance={{
        baseTheme: shadcn,
      }}
      taskUrls={{
        "choose-organization": "/organization/setup",
      }}
    >
      {children}
    </BaseClerkProvider>
  );
}
