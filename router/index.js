import express from "express";
const router = express.Router();

const foods = [
  { id: 1, date: "2026-10-10", name: "蛋餅", meal: "早餐" },
  { id: 2, date: "2026-10-10", name: "拉麵", meal: "晚餐" },
];
router.get("/", function (req, res) {
  res.json(foods);
});

export default router;
