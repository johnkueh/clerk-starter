"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { UserButton, useUser } from "@clerk/nextjs";

export function UserDropdown() {
  const { isLoaded } = useUser();
  if (!isLoaded) {
    return <Skeleton className="bg-gray-200 w-8 h-8 rounded-full" />;
  }

  return <UserButton />;
}
