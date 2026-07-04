const fs = require("fs");

// fs.writeFile("message.txt" , "Hello from here" , (err) =>{
//     if(err) throw err;
//     console.log("File has been created");
//     });

// fs.readFile("./message.txt"  , "utf-8", (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

import { randomSuperhero } from "superheroes";
const name = randomSuperhero();

