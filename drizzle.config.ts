import { defineConfig } from "drizzle-kit";
// https://orm.drizzle.team/kit-docs/config-reference
export default defineConfig({
  dialect: "postgresql", //dialect is required
  schema: "./src/drizzle/schema.ts",
  out: "./src/drizzle/migrations",
  // driver: "" drive is not required because Drizzle has
  // native support for PostgreSQL with pg, postgres,
  // vercel-postgres, and neon drivers
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  migrations: {
    table: "__drizzle_migrations",
    schema: process.env.DEV_SCHEMA,// NOTE: shouldn't this line be a file path??
  },
  //schemaFilter: ["new-schema-test_"],
  verbose: true, //when running the migration, it will print out the SQL queries that are being executed
  strict: true, //
});