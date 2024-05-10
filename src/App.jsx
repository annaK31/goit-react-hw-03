import { useState, useEffect } from 'react'
import './App.css'
import SearchBox from './components/SearchBox'
import ContactForm from './components/ContactForm/ContactForm'
import ContactList from './components/ContackList/ContactList'


const defaultContacts =
            [
              {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
              {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
              {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
              {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
            ]
  
function App() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() =>{
    const savedContact = localStorage.getItem("saved-contact")
    if(savedContact !== null){
      return JSON.parse(savedContact)
    }
    return defaultContacts;
  }
    );
  

  useEffect(() => {
    localStorage.setItem("saved-contact", JSON.stringify(contacts))
  },  [contacts])

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (taskId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== taskId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
  <h1>Phonebook</h1>
  <ContactForm onAdd={addContact}/>
  <SearchBox value={filter} onFilter={setFilter}/>
  <ContactList contacts={visibleContacts}  onDelete={deleteContact}/>
</div>
  )
}

export default App
