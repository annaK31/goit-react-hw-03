import { useState } from 'react'
import './App.css'
import SearchBox from './components/SearchBox'
import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'


const defaultContacts =
            [
              {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
              {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
              {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
              {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
            ]
  


function App() {
  const [contacts, setContacts] = useState(defaultContacts);
  const [filter, setFilter] = useState('');


  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (taskId) => {
    /*console.log(taskId)*/
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
