import { publicConfig } from "@/config.public";
import { createAuthClient } from "better-auth/solid";
export const authClient = createAuthClient({
  baseURL: publicConfig.BETTER_AUTH_URL,
});
