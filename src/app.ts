import cors from "cors";
import express from "express";
import { router } from "./router";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/.netlify/functions/api", router);

export { app };
