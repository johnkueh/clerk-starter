import { Suspense } from "react";
import { ProjectsGrid, ProjectsGridLoading } from "../projects-grid";

export default async function ProjectsPage() {
  return (
    <main className="px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
        </div>
        <Suspense fallback={<ProjectsGridLoading />}>
          <ProjectsGrid />
        </Suspense>
      </div>
    </main>
  );
}
