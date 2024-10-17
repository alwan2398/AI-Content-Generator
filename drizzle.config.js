import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./lib/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:Slszqcpjmw49@ep-shiny-mode-a5zvdkb7.us-east-2.aws.neon.tech/neondb?sslmode=require",
  },
});
