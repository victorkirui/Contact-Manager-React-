import React from 'react';
import ContactCard from './ContactCard';

function ContactList({contacts}) {

    return (
        <div className="ui called list">

            <ContactCard contacts={contacts}/>

        </div>
    )
}

export default ContactList;
