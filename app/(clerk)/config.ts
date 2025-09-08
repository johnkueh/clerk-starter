export const clerkConfig = {
  protectedRoutes: [
    "/projects(.*)",
    // Add other protected routes here
  ],
  redirectAfterOrganizationChanged: "/dashboard",
};
