import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {

  const [contacts,setContacts] = useState([]);

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts = { contacts} setContacts= { setContacts } />
    </div>
  );
}

export default App;
