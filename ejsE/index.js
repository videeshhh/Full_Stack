import express from "express";

const app = express();
const port = 3000;

app.get("/", (req , res)=>{
    const data = {
        title : "EJS tag",
        seconds : new Date().getSeconds(),
        items : ["apple" , "banana" , "cherry"],
        htmlContent: "<em>This is some text</em><br>"
    };
    res.render("index.ejs" , data);
})

app.listen(port , ()=>{
    console.log("Server started on port 3000");
});