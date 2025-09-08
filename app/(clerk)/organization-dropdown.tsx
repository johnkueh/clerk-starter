"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { OrganizationSwitcher, useOrganization } from "@clerk/nextjs";
import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";

export function OrganizationDropdown() {
  const { isLoaded, organization } = useOrganization();
  const organizationId = organization?.id;
  const queryClient = useQueryClient();
  const prevOrgIdRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    // Only run after initial load is complete
    if (!isLoaded) return;

    // Check if organization actually changed
    if (prevOrgIdRef.current !== undefined && prevOrgIdRef.current !== organizationId) {
      // Clear all queries when switching organizations
      // This ensures a clean slate for the new organization context
      queryClient.resetQueries();
    }

    // Update the ref for next comparison
    prevOrgIdRef.current = organizationId;
  }, [organizationId, isLoaded, queryClient]);

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
            paddingLeft: 4,
          },
          organizationPreviewMainIdentifier: {
            fontSize: 14,
          },
          avatarBox: {
            width: 24,
            height: 24,
          },
        },
      }}
    />
  );
}
