import {Client} from "pg";

const db = new client({
    user : "username",
    host : "localhost",
});
db.connect();

db.query("SELECT * FROM  USERS " , (err , res)=>{
    db.end();
});