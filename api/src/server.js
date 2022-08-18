import express from "express";
import bp from "body-parser";
import morgan from "morgan";
import crosswordRouter from "./resources/crossword/crossword.router.js";

const app = express();

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan("dev"));

app.use("/api/crossword", crosswordRouter);

app.get("/", (req, res) => {
  res.json({ message: "hello there" });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running`);
});
