import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@/app/(clerk)/clerk-provider";
import { TRPCQueryProvider } from "./(trpc)/query-provider";

export const metadata: Metadata = {
  title: "Hello World",
  description: "A simple hello world app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
