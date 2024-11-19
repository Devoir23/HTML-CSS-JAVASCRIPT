import React from 'react';
import ContactCard from './ContactCard';

function ContactList({ contacts }) {
  return (
    <div>
      {/* Map through the contacts array and pass each contact as props */}
      {contacts.map(contact => (
        <ContactCard 
          key={contact.id} // Unique key for React rendering
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
        />
      ))}
    </div>
  );
}

export default ContactList;
