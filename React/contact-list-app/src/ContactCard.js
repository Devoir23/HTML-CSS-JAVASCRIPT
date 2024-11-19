// child component- contact card 

import React from 'react'

function ContactCard({name, phone, email}){
  return (
    <div style={{
      border: '2px solid #ccc', 
      borderRadius: '5px', 
      padding: '10px', 
      margin: '10p x0', 
      boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
    }}>
        <h2>{name}</h2>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Email: </strong> {email}</p>
    </div>
  );
}

export default ContactCard;
