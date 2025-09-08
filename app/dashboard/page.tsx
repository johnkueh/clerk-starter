import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserDropdown } from "../(clerk)/user-dropdown";
import { OrganizationDropdown } from "../(clerk)/organization-dropdown";

export default async function DashboardPage() {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId) {
    redirect("/login");
  }

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
        <p className="text-lg mb-8">
          Welcome {user?.firstName || user?.emailAddresses[0]?.emailAddress}!
        </p>

        <div className="bg-card rounded-lg p-6 shadow-sm border">
          <h2 className="text-2xl font-semibold mb-4">Your Profile</h2>
          <div className="space-y-2">
            <p>
              <strong>Name:</strong> {user?.fullName || "Not set"}
            </p>
            <p>
              <strong>Email:</strong> {user?.emailAddresses[0]?.emailAddress}
            </p>
            <p>
              <strong>User ID:</strong> {userId}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <SignOutButton>
            <Button variant="outline">Sign Out</Button>
          </SignOutButton>
        </div>
      </div>
    </div>
  );
}
