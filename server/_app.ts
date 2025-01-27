import { Hono } from "hono";
import { csrf } from "hono/csrf";
import { authRouter } from "./modules/auth/auth.controller";
import { router } from "./trpc";

const app = new Hono();

app.use(csrf());

/**
 * The base router. Include all the routes here from `./routes/*`
 */
export const appRouter = router({
  auth: authRouter,
  // Extend other routers here.
});

export type AppRouter = typeof appRouter;
