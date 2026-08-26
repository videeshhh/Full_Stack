import ReactDOM from 'react-dom/client';
import List from './list';

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

const root1 = ReactDOM.createRoot(document.getElementById("list"));

root1.render(<div>
    <h1>My list</h1>
    <List />
    </div>)
