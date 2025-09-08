import { router } from "../trpc";
import { projectRouter } from "./project";
import { userRouter } from "./user";

export const appRouter = router({
  user: userRouter,
  project: projectRouter,
});

export type AppRouter = typeof appRouter;
