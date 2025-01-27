import { publicProcedure, router } from "@/server/trpc";

export const authRouter = router({
  users: publicProcedure.query(async ({}) => {
    return {
      users: ["user1", "user2", "user3"],
    };
  }),
});
