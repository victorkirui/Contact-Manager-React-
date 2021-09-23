import React from 'react';
import ContactCard from './ContactCard';

function ContactList(props) {

    const deleteContactHandler = (id) => {
            props.getContactId(id);
    }

    const renderContactList = props.contacts.map(contact => {
        return <ContactCard contact={contact} clickHandler= { deleteContactHandler } />
    })

    return (
        <div className="ui called list">
            { renderContactList }
        </div>
    )
}

export default ContactList;
