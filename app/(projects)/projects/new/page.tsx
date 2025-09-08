import { ArrowLeft, ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { CreateProjectForm } from "./create-project-form";

export default async function NewProjectPage() {
  return (
    <main className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <Link
          className="mb-2 text-gray-500 hover:text-gray-700 text-sm flex items-center gap-2"
          href="/projects"
        >
          <ArrowLeftIcon size={16} /> Back
        </Link>
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">New project</h1>
        </div>
        <CreateProjectForm />
      </div>
    </main>
  );
}
