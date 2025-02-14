/** Only place public configurations here. */
export const publicConfig = {
  BASE_ORIGIN: import.meta.env.PUBLIC_ENV__BASE_ORIGIN || "http://localhost:3000",
  /** Better Auth URL */
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL as string,
};
