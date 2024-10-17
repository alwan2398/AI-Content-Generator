import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

// Pastikan environment variable ada dan benar
if (!process.env.NEXT_PUBLIC_DRIZZLE_DB_URL) {
  throw new Error(
    "Environment variable NEXT_PUBLIC_DRIZZLE_DB_URL is not defined"
  );
}

// Inisialisasi klien Neon
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);

// Inisialisasi Drizzle ORM dengan klien Neon
const db = drizzle(sql);

export { db };
