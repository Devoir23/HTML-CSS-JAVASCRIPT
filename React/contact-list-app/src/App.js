import React from "react";
// import ContactCard from "./ContactCard";  
import ContactList from "./ContactList";

function App(){
  
  // context(contacts) -> array of contact obejcts
  const contacts = [
    { id: 1, name: 'Kartavya', phone: '123-456-7890', email: 'kartavya@example.com'},
    { id: 2, name: 'Alice', phone: '987-654-3210', email: 'alice@example.com'},
  ];
  return(
    <div>
      <h1>Contact List</h1>
      {/* using child component */}
      <ContactList
        contacts={contacts}
      />

    </div>
  );
}

export default App;