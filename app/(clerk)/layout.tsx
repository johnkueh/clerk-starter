import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4">
      {children}
    </div>
  );
}
