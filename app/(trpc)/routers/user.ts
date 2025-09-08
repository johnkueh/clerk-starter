import { router, protectedProcedure } from "../trpc";

export const userRouter = router({
  currentSession: protectedProcedure.query(async ({ ctx }) => {
    return {
      id: ctx.auth.userId,
      orgId: ctx.auth.orgId,
    };
  }),
});
