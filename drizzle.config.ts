import { type Config, defineConfig } from "drizzle-kit";

import { privateConfig as env } from "./config.private";

export default defineConfig({
  schema: "./server/db/schema",
  out: "./server/db/migrations",
  dialect: "turso",
  dbCredentials: {
    url: env.TURSO_DATABASE_URL,
    authToken: env.TURSO_AUTH_TOKEN,
  },
  tablesFilter: ["pzp_*"],
}) satisfies Config;
