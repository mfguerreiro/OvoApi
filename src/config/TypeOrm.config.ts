import { DataSource } from "typeorm";

export const connection = new DataSource({
  url: process.env.DATABASE_URL,
  type: "postgres",
  entities: ["src/**/*.entity.ts"],
  ssl: {
    rejectUnauthorized: false,
  },
  logging: true,
  synchronize: true,
});
