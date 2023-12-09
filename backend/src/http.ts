import express from "express";
import http from "http";
import cors from "cors";

import { routes } from "./routes/routes";

const app = express();

app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(routes);

const httpServer = http.createServer(app);

export { httpServer };