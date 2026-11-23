import foodsRouter from "./router/index.js";
import express from "express";
const app = express();

app.use("/foods", foodsRouter);

app.get("/*err", function (req, res) {
  res.status(404).send("error");
});
app.listen(3000, () => {
  console.log("3000");
});
