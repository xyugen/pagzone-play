import { publicConfig } from "@/config.public";
import { adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/solid";
export const authClient = createAuthClient({
  baseURL: publicConfig.BETTER_AUTH_URL,
  plugins: [adminClient()],
});
