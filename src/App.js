import React, {useState,useEffect} from 'react';
import { uuid } from 'uuidv4';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {

  const LOCALSTORAGEKEY = 'contacts';
  const [contacts,setContacts] = useState([]);

  const addContactHandler  = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact} ]);
  }

  const deleteContactHandler = (id) => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts(newContactList);
  }
  
  // retrieve data from local storage
  useEffect(()=>{
    const retrievedData = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY));
    setContacts(retrievedData);
  },[])

  // Set localstorage
  useEffect(()=>{
    localStorage.setItem(LOCALSTORAGEKEY,JSON.stringify(contacts));
  },[contacts])


  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler = { addContactHandler } />
      <ContactList contacts = { contacts} setContacts= { setContacts }  getContactId = { deleteContactHandler }/>
    </div>
  );
}

export default App;
