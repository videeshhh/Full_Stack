import express from "express";

const app = express();
const port = 3000;

let type = "a weekday";
let adv = "its a time to work hard";

app.get("/" , (req , res)=>{
    const today = new Date();
    const day = today.getDay();

    if(day === 0 || day ===6){
        type = "the weekend";
        adv = "its time to have fun"; 
    }

    res.render("index.ejs" , {
        dayType : type ,
        advice : adv,
    });
})

app.listen(port , ()=>{
    console.log(`Sevre started on port ${port}`)
})