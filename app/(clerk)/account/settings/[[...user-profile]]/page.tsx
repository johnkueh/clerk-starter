import { UserProfile } from "@clerk/nextjs";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4">
      <div className="flex flex-col gap-4 items-center">
        <Link
          className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-2"
          href="/dashboard"
        >
          <ArrowLeftIcon size={14} /> Back to dashboard
        </Link>
        <UserProfile />
      </div>
    </div>
  );
}
