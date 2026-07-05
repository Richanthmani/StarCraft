import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
// Allow requests from the Replit dev domain and any deployed domain; fall back to open for local dev
const allowedOrigins = process.env["REPLIT_DEV_DOMAIN"]
  ? [
      `https://${process.env["REPLIT_DEV_DOMAIN"]}`,
      ...(process.env["REPLIT_DOMAINS"] ? process.env["REPLIT_DOMAINS"].split(",") : []),
    ]
  : true; // open in environments without REPLIT_DEV_DOMAIN

app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json({ limit: "32kb" }));
app.use(express.urlencoded({ extended: true, limit: "32kb" }));

app.use("/api", router);

export default app;
