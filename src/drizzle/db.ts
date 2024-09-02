import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

const postgresClient = postgres(process.env.DATABASE_URL as string);
export const db = drizzle(postgresClient);