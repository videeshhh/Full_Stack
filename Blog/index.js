import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const blogs = [];
let nextId = 1;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/" , (req, res)=>{
    const isSuccess = req.query.success === 'true';
    res.render("index.ejs", { showSuccessMessage: isSuccess })
});

app.post("/submit" , (req, res)=>{
    blogs.push({
        id : nextId++,
        title: req.body.title,
        text: req.body.text
    });
    res.render("success.ejs");
        
}); 

app.get("/blogs" , (req, res)=>{
    res.render("blogs.ejs", { blogs });
});

app.listen(port , ()=>{
    console.log(`Server started on ${port}`);
});

