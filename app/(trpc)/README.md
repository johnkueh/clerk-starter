# Add tRPC to Next.js App Router

---

## =� Quick Start

This project includes a pre-configured tRPC setup with Clerk authentication. Follow these steps to use tRPC in your app.

## 1. Installation

Install the required tRPC packages:

```bash
pnpm add @trpc/server @trpc/client @trpc/react-query @trpc/next @tanstack/react-query
```

## Core Setup

### Wrap your app with TRPCQueryProvider (`app/layout.tsx`)

```typescript
import { TRPCQueryProvider } from "./(trpc)/query-provider";
import { ClerkProvider } from "@/app/(clerk)/clerk-provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <TRPCQueryProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </TRPCQueryProvider>
    </ClerkProvider>
  );
}
```

## Authentication Context

The tRPC context automatically includes Clerk authentication:

```typescript
// In any protected procedure, you have access to:
authedProcedure.query(({ ctx }) => {
  const userId = ctx.auth.userId;
  const orgId = ctx.auth.orgId;
  const orgRole = ctx.auth.orgRole;
  // ... use auth data
});
```
