import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const blogs = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/" , (req,res)=>{
    res.render("index.ejs");
});

app.post("/submit" , (res,req)=>{
        const blog = {
        title: req.body.title,
        text: req.body.text
    };
    blogs.push(blog);
    res.redirect("/");
});

app.listen(port , ()=>{
    console.log(`Server started on ${port}`);
});