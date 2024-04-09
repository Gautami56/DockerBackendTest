var express = require("express");
var app = express();

app.get("/home", (req, res) => {
  res.send("Heyyy Heloow");
});

app.listen(3006);
