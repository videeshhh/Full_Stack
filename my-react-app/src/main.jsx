import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById("root"));

const userName = "Videesh";
const userSecondName = "sharma";

root.render(
    <div>
        <h1>My list</h1>
        <ul>
            <li>hello</li>
            <li>My list</li>
            <li>Welcome to my react app</li>
            <li>{userName}</li>
            <li>{`${userName} ${userSecondName}`}</li>
        </ul>
    </div>
);
