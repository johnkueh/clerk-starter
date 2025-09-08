import { TaskChooseOrganization } from "@clerk/nextjs";
import { clerkConfig } from "../../config";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TaskChooseOrganization
        redirectUrlComplete={clerkConfig.redirectAfterOrganizationChanged}
      />
    </div>
  );
}
