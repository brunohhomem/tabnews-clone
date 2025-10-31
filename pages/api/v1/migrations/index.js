import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migrations(request, response) {
  if (request.method === "GET") {
    const migrations = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      dir: join("infra", "migrations"),
      migrationsTable: "pgmigrations",
      direction: "up",
      verbose: true,
      dryRun: true,
    });

    response.status(200).json(migrations);
  }

  if (request.method === "POST") {
    const migrations = await migrationRunner({
      databaseUrl: process.env.DATABASE_URL,
      dir: join("infra", "migrations"),
      migrationsTable: "pgmigrations",
      direction: "up",
      verbose: true,
      dryRun: false,
    });

    response.status(200).json(migrations);
  }

  response.status(405).end();
}
