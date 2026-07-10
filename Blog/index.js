//importing required packages
import express from "express";
import bodyParser from "body-parser";

//all the variables and constants
const app = express();
const port = 3000;
const blogs = [];
let nextId = 1;

//MIDDLEWARES

//body parser to get content from body
app.use(bodyParser.urlencoded({ extended: true }));

//defines where static files are stored
app.use(express.static("public"));

//Main page or landing page
app.get("/" , (req, res)=>{
    const isSuccess = req.query.success === 'true';
    res.render("index.ejs", { showSuccessMessage: isSuccess })
});

//Saving the blog in the Blog empty array
app.post("/submit" , (req, res)=>{
    blogs.push({
        id : nextId++,
        title: req.body.title,
        text: req.body.text
    });
    //redirect to the succes page showing that blog is saved successfulyy
    res.render("success.ejs");
        
}); 

//this get method loads the blogs.ejs where the blogs will be displayed
app.get("/blogs" , (req, res)=>{
    res.render("blogs.ejs", { blogs });
});

//running server on port
app.listen(port , ()=>{
    console.log(`Server started on ${port}`);
});

