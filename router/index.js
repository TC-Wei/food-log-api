import express from "express";
const router = express.Router();

const foods = [
  { id: 1, date: "2026-10-10", name: "蛋餅", meal: "早餐" },
  { id: 2, date: "2026-10-10", name: "拉麵", meal: "晚餐" },
];
router.post("/", (req, res) => {
  const { date, name, meal } = req.body;
  if (!name) {
    return res.status(400).send({ message: "找不到名字" });
  }
  const newFood = {
    id: foods.length + 1,
    date: date,
    name: name,
    meal: meal,
  };
  foods.push(newFood);
  res.status(201).json(newFood);
});
router.delete("/:id", function (req, res) {
  const id = Number(req.params.id);
  const index = foods.findIndex((item) => item.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "查無此id" });
  }
  foods.splice(index, 1);
  res.status(200).json({ message: "已刪除" });
});

router.get("/", function (req, res) {
  res.json(foods);
});

export default router;
