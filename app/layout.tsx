import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@/app/(clerk)/clerk-provider";
import { TRPCProvider } from "./(trpc)/react";

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
      <TRPCProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </TRPCProvider>
    </ClerkProvider>
  );
}
