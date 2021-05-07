const express = require("express");
const app = express();
const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hello node app FROM CONTAINER !! KUY");
});

app.listen(PORT, () => {
  console.log("App is running at port: " + PORT);
});
