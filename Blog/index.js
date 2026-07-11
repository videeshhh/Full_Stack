//importing required packages
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import bodyParser from "body-parser";

//all the variables and constants
const app = express();
const port = 3000;
const blogs = [];
let nextId = 1;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//MIDDLEWARES
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//body parser to get content from body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); 

//defines where static files are stored
app.use(express.static(path.join(__dirname, "public")));

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

//delete request to delete a blog
app.post("/delete", (req, res) => {
    const id = Number(req.body.id);

    const index = blogs.findIndex(blog => blog.id === id);

    if (index !== -1) {
        blogs.splice(index, 1);
        return res.sendStatus(200);
    }

    res.sendStatus(404);
});

//this get method loads the blogs.ejs where the blogs will be displayed
app.get("/blogs" , (req, res)=>{
    res.render("blogs.ejs", { blogs });
});

//running server on port
if (process.env.NODE_ENV !== "production") {
    app.listen(port , ()=>{
        console.log(`Server started on ${port}`);
    });
}

export default app;
