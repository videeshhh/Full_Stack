import React from "react";

function Greeting(){
    let greeting;
    const date = new Date();
    const currentTime = date.getHours();
    const style = {
    color: "",
    };

    if(currentTime < 12 ){
    greeting = "Good morning";
    style.color = "red";
    } else if(currentTime < 18 ){
        greeting = "good afternoon";
        style.color = "green";
    } else {
        greeting = "good night";
        style.color = "blue";
    }

    return <h1 className="heading" 
    style={style}>
        {greeting}
    </h1>
}

export default Greeting;