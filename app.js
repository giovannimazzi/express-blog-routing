const express = require("express");
const app = express();
const port = 3000;
const apiUrl = `http://localhost:${port}`;

const posts = require("./data/posts");

const postsRouter = require("./routers/posts");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({
    message: "Server del mio blog",
  });
});

app.get("/bacheca", (req, res) => {
  res.json({
    resultLength: posts.length,
    result: posts,
  });
});

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`Server listening on ${apiUrl}`);
});
