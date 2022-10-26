import { DataSource } from "typeorm";

export const connection = new DataSource({
  type: "postgres",
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT as unknown as number,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  entities: ["src/**/*.entity.ts"],
  ssl: {
    rejectUnauthorized: false,
  },
  logging: true,
  synchronize: true,
});
