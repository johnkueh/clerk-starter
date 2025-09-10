"use client";

import { PropsWithChildren } from "react";
import { ClerkProvider as BaseClerkProvider } from "@clerk/nextjs";
import { shadcn } from "@clerk/themes";
import { getBaseUrl } from "@/lib/base-url";

export function ClerkProvider({ children }: PropsWithChildren) {
  return (
    <BaseClerkProvider
      appearance={{
        theme: shadcn,
        layout: {
          logoLinkUrl: getBaseUrl(),
          privacyPageUrl: `${getBaseUrl()}/privacy`,
          termsPageUrl: `${getBaseUrl()}/terms`,
        },
      }}
    >
      <style global jsx>{`
        .cl-cardBox {
          box-shadow: none !important;
        }

        /* Hide Clerk logo link */
        a[aria-label="Clerk logo"] {
          display: none !important;
        }

        .cl-footerPages {
          flex: 1;
          justify-content: center;
        }

        /* Hide p element that appears before Clerk logo (contains "Secured by") */
        a[aria-label="Clerk logo"] + p,
        p + a[aria-label="Clerk logo"] {
          display: none !important;
        }

        /* Also hide the p that's a sibling of the Clerk logo */
        a[aria-label="Clerk logo"] ~ p,
        p ~ a[aria-label="Clerk logo"] + *,
        p:has(+ a[aria-label="Clerk logo"]) {
          display: none !important;
        }
      `}</style>
      {children}
    </BaseClerkProvider>
  );
}
