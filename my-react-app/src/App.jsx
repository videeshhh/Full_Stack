import React from "react";
import contacts from "./contacts";
import Card from "./card";

function createCard(contact){
    return <Card 
                key={contact.id}
                id={contact.id}
                name={contact.name}/*here contact.name says that take name from contacts and save it under name using contact.name*/
                img={contact.imgURL}
                phone={contact.phone}
                email={contact.email}
            />                
}

function App(){
    return (
        <div>
            <h1 className="heading">My contacts</h1>
            {contacts.map(createCard)}
        </div>
    )
}

export default App;