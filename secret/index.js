import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));
const pass = "bete";

app.use(bodyParser.urlencoded({ extended: true }));

function checkAnswer(req, res, next) {
  req.userIsAuthorised = req.body.password === pass;
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", checkAnswer, (req, res) => {
  if (req.userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.send(`
      <h1>NAH YOURE WRONG!</h1>
      <p>Redirecting in <span id="t">3</span> seconds...</p>

      <script>
        let t = 3;
        const timer = setInterval(() => {
          document.getElementById("t").textContent = --t;

          if (t === 0) {
            clearInterval(timer);
            location.href = "/";
          }
        }, 1000);
      </script>
    `);
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});