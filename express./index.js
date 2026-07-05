import express from "express";
const app = express();
const port = 3000;

app.get("/" , (req, res)=> {
    res.send("<h1>Hello World</h1>");
});

app.post("/register" , (req, res)=> {
    res.sendStatus(201);
});

app.put("/user/videesh" , (req, res)=> {
    res.sendStatus(200);
});

app.patch("/user/videesh" , (req, res)=> {
    res.sendStatus(200);
});

app.delete("/user/videesh" , (req, res)=> {
    res.sendStatus(200);
});

app.listen(port , ()=> {
    console.log("App running on port 3000");
});

