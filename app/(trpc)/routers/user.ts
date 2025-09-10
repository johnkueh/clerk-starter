import { createTRPCRouter, authedProcedure } from "../init";

export const userRouter = createTRPCRouter({
  currentSession: authedProcedure.query(async ({ ctx }) => {
    return {
      id: ctx.auth.userId,
      orgId: ctx.auth.orgId,
    };
  }),
});
