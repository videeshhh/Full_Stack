import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

const date = new Date();
const currentTime = date.getHours();

let greeting;
let style = {
    color : ""
}

if(currentTime<12){
    greeting = "Good Morning";
    style.color = "red";
} else if(currentTime < 18){
    greeting = "Good Afternoon";
    style.color = "green";
} else {
    greeting = "Good Night";
    style.color = "blue";
}


root.render(<h1 style={style}>{greeting}</h1>);
