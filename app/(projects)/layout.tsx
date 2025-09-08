import { PrimaryNav } from "@/components/navigation/primary-nav";
import { SecondaryNav } from "@/components/navigation/secondary-nav";
import { PropsWithChildren } from "react";
import { OrganizationDropdown } from "../(clerk)/organization-dropdown";
import { UserDropdown } from "../(clerk)/user-dropdown";

export default function ProjectsLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <header>
        <PrimaryNav>
          <OrganizationDropdown />
          <UserDropdown />
        </PrimaryNav>
        <SecondaryNav
          navLinks={[
            { href: "/projects", label: "Projects" },
            { href: "/team", label: "Team" },
          ]}
        />
      </header>
      {children}
    </div>
  );
}
