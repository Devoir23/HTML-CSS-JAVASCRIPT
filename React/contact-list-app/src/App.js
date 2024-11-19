import React from "react";
import ContactCard from "./ContactCard";  

function App(){
  return(
    <div>
      <ContactCard
        name="Kartavya"
        phone="123-456-7890"
        email="kartavya@gmail.com"
      />
    </div>
  );
}

export default App;