export const clerkConfig = {
  protectedRoutes: [
    // Add all protected routes here
    "/dashboard(.*)",
    "/projects(.*)",
  ],
  redirectAfterOrganizationChanged: "/dashboard",
};
