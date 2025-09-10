import { createTRPCRouter } from "../init";
import { projectRouter } from "./project";
import { userRouter } from "./user";

export const appRouter = createTRPCRouter({
  user: userRouter,
  project: projectRouter,
});

export type AppRouter = typeof appRouter;
