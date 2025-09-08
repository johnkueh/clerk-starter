"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PropsWithChildren } from "react";

type SecondaryNavProps = {
  navLinks: {
    href: string;
    label: string;
  }[];
};

export function SecondaryNav({ navLinks }: SecondaryNavProps) {
  const pathname = usePathname();
  return (
    <div className="px-6 border-b border-gray-200">
      <nav className="flex gap-6">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <SecondaryNavLink
              key={link.href}
              href={link.href}
              active={isActive}
            >
              {link.label}
            </SecondaryNavLink>
          );
        })}
      </nav>
    </div>
  );
}

type SecondaryNavLinkProps = {
  href: string;
  active?: boolean;
};

function SecondaryNavLink({
  href,
  children,
  active,
}: PropsWithChildren<SecondaryNavLinkProps>) {
  return (
    <Link
      href={href}
      className={cn(
        "py-3 text-sm text-gray-500 hover:text-gray-700",
        active && "text-gray-700 border-blue-500 border-b-1"
      )}
    >
      {children}
    </Link>
  );
}
