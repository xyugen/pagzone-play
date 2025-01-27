import { createClient, type Client } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

import { privateConfig } from "@/config.private";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  client: Client | undefined;
};

export const client =
  globalForDb.client ??
  createClient({
    url: privateConfig.TURSO_DATABASE_URL,
    authToken: privateConfig.TURSO_AUTH_TOKEN,
  });
if (privateConfig.NODE_ENV !== "production") globalForDb.client = client;

export const db = drizzle(client, { schema });

export * from "drizzle-orm";
