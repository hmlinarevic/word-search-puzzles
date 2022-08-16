import express from 'express'
import bp from 'body-parser'
import morgan from 'morgan'

const app = express()

app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "hello" });
});

app.listen(process.env.PORT ?? 8080, () => {
  console.log(`Server is running`);
});
