import { router, authedProcedure } from "../trpc";

export const userRouter = router({
  currentSession: authedProcedure.query(async ({ ctx }) => {
    return {
      id: ctx.auth.userId,
      orgId: ctx.auth.orgId,
    };
  }),
});
