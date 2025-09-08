import Link from "next/link";
import { UserDropdown } from "../(clerk)/user-dropdown";
import { OrganizationDropdown } from "../(clerk)/organization-dropdown";
import { api } from "../(trpc)/query-client";
import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import CurrentUser from "./current-session";

export default async function DashboardPage() {
  return (
    <div className="min-h-screen p-4">
      <nav className="flex justify-between items-center">
        <Link href="/">Home</Link>
        <div className="flex items-center gap-2">
          <OrganizationDropdown />
          <UserDropdown />
        </div>
      </nav>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <CurrentUser />
        <div className="mt-8">
          <SignOutButton>
            <Button variant="outline">Sign Out</Button>
          </SignOutButton>
        </div>
      </div>
    </div>
  );
}
