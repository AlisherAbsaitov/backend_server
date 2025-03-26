import express from "express";
import { v4 as uuidv4 } from "uuid";
let router = express.Router();
let data = [];

let newBookId = 0;
router.post("/", (req, res) => {
  let { name, price } = req.body;
  if (!name || !price) {
    return res.status(404).json("Malumot qo'shilmadi");
  }
  let book = { id: uuidv4(), name, price };
  data.push(book);
  res.status(200).json(book);
});

router.get("/", (req, res) => {
  res.status(200).json(data);
});

router.put("/:id", (req, res) => {
  let { name, price } = req.body;
  let id = req.params.id;
  let findBook = data.find((book) => book.id == id);
  if (!findBook) {
    return res.status(404).json("Ma'lumot almashtirlmadi");
  }
  if (name) findBook.name = name;
  if (price) findBook.price = price;
  res.status(200).json(findBook);
});

router.delete("/:id", (req, res) => {
  let id = req.params.id;

  let idBook = data.findIndex((val) => val.id == id);
  console.log(idBook);

  if (idBook == -1) {
    return res.status(404).json("Ma'lumot o'chirlmadi");
  }
  data.splice(id, 1);
  res.status(200).json("Malumot o'chirildi");
});

export default router;
