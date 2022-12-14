import express from "express";
import "reflect-metadata";
import "dotenv/config";
import { dataSource } from "../typeorm/connection";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

dataSource
  .initialize()
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.error("Database connection error: ", err.message);
  });

app.listen(process.env.PORT, () =>
  console.log(`Server is working on ${process.env.PORT} port`)
);
