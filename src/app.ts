import cors from "cors";
import express from "express";
import { router } from "./router";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export { app };
