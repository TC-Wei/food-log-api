import express from "express";

const app = express();
const foods = [
  { id: 1, date: "2026-10-10", name: "蛋餅", meal: "早餐" },
  { id: 2, date: "2026-10-10", name: "拉麵", meal: "晚餐" },
];

app.get("/", function (req, res) {
  res.send("hello world");
});
app.get("/foods", function (req, res) {
  res.json(foods);
});
app.get("/*err", function (req, res) {
  res.send("error");
});
app.listen(3000, () => {
  console.log("12");
});
