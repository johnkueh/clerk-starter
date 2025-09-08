import { UserDropdown } from "../(clerk)/user-dropdown";
import Link from "next/link";
import { OrganizationDropdown } from "../(clerk)/organization-dropdown";

export default async function DashboardPage() {
  return (
    <div className="min-h-screen">
      <header className="bg-gray-50">
        <div className="h-14 flex items-center justify-between px-6 border-b border-gray-200">
          <OrganizationDropdown />
          <UserDropdown />
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-gray-200">
          <nav className="flex gap-6">
            <Link
              href="/dashboard"
              className="py-3 text-sm text-gray-700 hover:text-gray-700 border-b-1 border-blue-500"
            >
              Projects
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Title with Environment Badge */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
          </div>
        </div>
      </main>
    </div>
  );
}
