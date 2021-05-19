import {
  homeController,
  createController,
  detailController,
  editController,
  boardCoreateController,
} from "../controllers/boardController";
import express from "express";

const boardRouter = express.Router();

boardRouter.get("/", homeController);
boardRouter.get("/create", createController);
boardRouter.get("/detail", detailController);
boardRouter.get("/edit", editController);

boardRouter.post("/detailBoard");
boardRouter.post("/createBoard", boardCoreateController);
boardRouter.post("/editBoard");

export default boardRouter;
