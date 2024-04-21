var express = require("express");
var moment = require("moment");
var app = express();

app.get("/home", (req, res) => {
  var date = moment().format("LL");
  console.log("Date is :", date);
  res.send("Heyyy Heloow");
});

app.listen(3006);
