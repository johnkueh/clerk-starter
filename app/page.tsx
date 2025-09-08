import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our App</h1>

      <div className="flex gap-4">
        <SignedOut>
          <Link href="/login">
            <Button>Sign In</Button>
          </Link>
        </SignedOut>

        <SignedIn>
          <Link href="/dashboard">
            <Button>Go to Dashboard</Button>
          </Link>
        </SignedIn>
      </div>
    </div>
  );
}
