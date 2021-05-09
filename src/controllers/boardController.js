import Board from "../model/Board";
import dotnev from "dotenv";
dotnev.config();

export const homeController = async (req, res) => {
  try {
    const result = await Board.find().sort({ created: -1 });

    res.render("home", { BoardList: result });
  } catch (e) {
    console.log(e);
    res.render("home", { BoardList: [] });
  }
};

export const detailController = async (req, res) => {
  const {
    query: { id },
  } = req;
  try {
    const result = await Board.findOne({ _id: id });

    res.render("detail", { data: result, dev: IS_DEV });
    console.log(result);
  } catch (e) {
    console.log(e);
    homeController(req, res);
  }
};

export const createController = (req, res) => {
  res.render("create");
};

export const editController = (req, res) => {
  res.render("edit");
};
