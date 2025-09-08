"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth, useOrganization, useUser } from "@clerk/nextjs";
import {
  ChevronDown,
  SettingsIcon,
  Users,
  ChevronsUpDownIcon,
  Plus,
  LogOutIcon,
} from "lucide-react";
import Link from "next/link";

export function UserDropdown() {
  const { user, isLoaded } = useUser();
  const { signOut } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {user.hasImage && (
          <img className="w-8 h-8 rounded-full" src={user.imageUrl} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[200px]">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col gap-1">
            {user.fullName && (
              <p className="text-sm font-medium leading-none">
                {user.fullName}
              </p>
            )}
            <p className="text-xs leading-none text-stone-500">
              {user.primaryEmailAddress?.emailAddress}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/account/settings" className="flex items-center gap-2">
            <SettingsIcon className="w-4 h-4" />
            Account settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => signOut()}
          className="text-red-600 focus:text-red-600 flex items-center gap-2"
        >
          <LogOutIcon className="w-4 h-4" />
          Sign out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
