import { router, orgProcedure } from "../trpc";

export const projectRouter = router({
  list: orgProcedure.query(async ({ ctx }) => {
    return ctx.db.project.findMany({
      where: {
        orgId: ctx.auth.orgId,
      },
    });
  }),
});
