import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//middleware for accepting connection from various origins to db
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" })); //middleware for accepting json
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //to get params from url
app.use(express.static("public"));
app.use(cookieParser());
export { app };
