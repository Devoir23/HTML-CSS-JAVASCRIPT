import React from "react";
import ContactCard from "./ContactCard";

function ContactList({ contacts }){
    return(
        <div>
            {
                // callback function - Arrow function - single parameter
                contacts.map(contact =>(
                    <ContactCard
                        key={contact.id}
                        name={contact.name}
                        phone={contact.phone}
                        email={contact.email}
                    />
                ))
            }
        </div>
    );
}

export default ContactList;