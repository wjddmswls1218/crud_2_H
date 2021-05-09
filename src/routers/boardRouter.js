import {
  homeController,
  createController,
  detailController,
  editController,
} from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get("/", homeController);
boardRouter.get("/create", createController);
boardRouter.get("/detail", detailController);
boardRouter.get("/edit", editController);

export default boardRouter;
