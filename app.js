const express = require("express");
const app = express();
const port = 3000;
const apiUrl = `http://localhost:${port}`;

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

app.listen(port, () => {
  console.log(`Server listening on ${apiUrl}`);
});
