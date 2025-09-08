import { PropsWithChildren } from "react";

export function PrimaryNav({ children }: PropsWithChildren) {
  return (
    <div className="h-14 bg-gray-50 flex items-center justify-between px-6 border-b border-gray-200">
      {children}
    </div>
  );
}
