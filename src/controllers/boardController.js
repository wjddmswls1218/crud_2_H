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

export const boardCoreateController = async (req, res) => {
  const {
    body: { title, author, desc },
  } = req;

  try {
    const D = new Date();
    let year = D.getFullYear();
    let month = D.getMonth() + 1;
    let date = D.getUTCDate();

    month = month < 10 ? `0${month}` : month;
    date = date < 10 ? `0${date}` : date;

    const result = await Board.create({
      title: title,
      description: desc,
      author: author,
      created: resutlDate,
    });
    homeController(req, res);
  } catch (e) {
    console.log(error);
    homeController(req, res);
  }
};

export const editController = async (req, res) => {};

export const detailBoardController = async (req, res) => {};

export const editBoardController = (req, res) => {};
