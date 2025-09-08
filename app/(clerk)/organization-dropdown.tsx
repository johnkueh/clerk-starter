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

export function OrganizationDropdown() {
  const { organization } = useOrganization();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="justify-between min-w-[150px] max-w-[200px]"
        >
          <span className="truncate mr-1">{organization?.name}</span>
          <ChevronDown className="h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[200px]">
        <DropdownMenuLabel className="font-normal">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{organization?.name}</span>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link
            href="/organization/settings"
            className="flex items-center gap-2"
          >
            <SettingsIcon className="w-4 h-4" />
            Organization settings
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/organization/switch" className="flex items-center gap-2">
            <ChevronsUpDownIcon className="w-4 h-4" />
            Switch organization
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
