import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({extended: true}));

function bandNameGenerator(req, res , next){
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.post("/submit", (req , res)=>{
  console.log();
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
