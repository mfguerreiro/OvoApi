import { DataSource } from "typeorm";

export const connection = new DataSource({
  url: process.env.DATABASE_URL,
  type: "postgres",
  entities: [`${__dirname}/../**/*.entity.{ts,js}`],
  ssl: {
    rejectUnauthorized: false,
  },
  logging: true,
  synchronize: true,
});
