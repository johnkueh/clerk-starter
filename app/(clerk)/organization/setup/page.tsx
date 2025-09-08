import { TaskChooseOrganization } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <TaskChooseOrganization redirectUrlComplete="/dashboard" />
    </div>
  );
}
