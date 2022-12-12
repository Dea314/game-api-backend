import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import tracker from "./middlewares/tracker.js";
import characterRouter from "./routes/characterRouter.js";
import errorHandler from "./middlewares/errorHandler.js";
import rateLimiting from "./middlewares/rateLimiting.js";
import connectDB from "./db/db-index.js";

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

const port = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
  const morgan = await import("morgan");
  app.use(morgan.default("dev"));
}

app.use(cors({ origin: "*", methods: ["GET"] }));
app.use(cookieParser());
app.set("trust proxy", true);
app.use(rateLimiting());

app.use(tracker);
app.use("/playground", characterRouter);
app.use("*", (req, res) => res.sendStatus(404));
app.use(errorHandler);

app.listen(port, () => console.log(`Server running at:${port}`));
