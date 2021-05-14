import express from "express";
import path from "path";
import helmet from "helmet";
import morgan from "morgan";
import bodyParser from "body-parser";
import connect from "../db";
import boardRouter from "./routers/boardRouter";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 7000;

app.set("view engine", "pug");

app.use(morgan(`dev`));
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/assets")));
connect();

app.use("/", boardRouter);

app.listen(PORT, () => {
  console.log(` 🐳 ${PORT} Server Start`);
});
