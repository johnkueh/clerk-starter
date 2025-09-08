"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { OrganizationSwitcher, useOrganization } from "@clerk/nextjs";

export function OrganizationDropdown() {
  const { isLoaded } = useOrganization();
  if (!isLoaded) {
    return (
      <div className="flex items-center gap-2">
        <Skeleton className="bg-gray-200 w-[28px] h-[28px] rounded-sm" />
        <Skeleton className="bg-gray-200 w-20 h-[28px] rounded-md" />
      </div>
    );
  }

  return (
    <OrganizationSwitcher
      afterCreateOrganizationUrl="/dashboard"
      afterSelectOrganizationUrl="/dashboard"
      afterLeaveOrganizationUrl="/dashboard"
      appearance={{
        elements: {
          organizationSwitcherTrigger: {
            paddingLeft: 0,
          },
          organizationPreviewMainIdentifier: {
            fontSize: 14,
          },
          avatarBox: {
            width: 28,
            height: 28,
          },
        },
      }}
    />
  );
}
