import { createTRPCRouter, orgProcedure } from "../init";
import { z } from "zod/v4";

export const projectRouter = createTRPCRouter({
  list: orgProcedure.query(async ({ ctx }) => {
    return ctx.db.project.findMany({
      where: {
        orgId: ctx.auth.orgId,
      },
    });
  }),
  create: orgProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.project.create({
        data: {
          name: input.name,
          orgId: ctx.auth.orgId,
        },
      });
    }),
});
