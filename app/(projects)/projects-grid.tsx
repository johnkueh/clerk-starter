"use client";

import { api } from "@/app/(trpc)/query-client";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

export function ProjectsGrid() {
  const { data: projects, error } = api.project.list.useQuery();

  if (error) return <div>Error: {error.message}</div>;
  if (!projects)
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <Skeleton className="aspect-video rounded-md" />
        <Skeleton className="aspect-video rounded-md" />
        <Skeleton className="aspect-video rounded-md" />
      </div>
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
      <Link
        href="/projects/new"
        className="aspect-video rounded-md flex items-center justify-center bg-gray-100 text-gray-500 text-sm hover:text-gray-700 cursor-pointer"
      >
        Create Project
      </Link>
      {projects.map((project) => (
        <div
          className="aspect-video rounded-md flex items-center justify-center bg-gray-100 text-gray-500 text-sm hover:text-gray-700 cursor-pointer"
          key={project.id}
        >
          {project.name}
        </div>
      ))}
    </div>
  );
}
