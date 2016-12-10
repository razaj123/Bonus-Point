const express = require("express")

var app = express();
var staticFiles = __dirname + "/public";

app
  .use(express.static(staticFiles))
  .get("/test",(req,res) => {
    console.log("refreshed!!!");
    res.send("hello world");
  })
  .listen(3000);
