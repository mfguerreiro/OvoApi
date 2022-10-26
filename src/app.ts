import cors from "cors";
import express from "express";
import { router } from "./router";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import { connection } from "./config/TypeOrm.config";

const app = express();

connection
  .initialize()
  .then(() => {
    console.log("✅🖴 Conexão com banco de dados iniciada. ");
  })
  .catch((err) => {
    console.log("❌🖴 Erro ao conectar ao banco de dados: ", err);
  });

app.use(express.json());
app.use(cors());
app.use(router);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { app };
