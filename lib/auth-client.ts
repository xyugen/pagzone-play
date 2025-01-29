import { privateConfig } from "@/config.private";
import { createAuthClient } from "better-auth/solid";
export const authClient = createAuthClient({
  baseURL: privateConfig.BETTER_AUTH_URL,
});
