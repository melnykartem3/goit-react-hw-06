import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import ContactsData from '../contactsData.json';
import { useState, useEffect } from 'react';
import css from './App.module.css';

export default function App() {
  const [contactsData, setContactsData] = useState(() => {
    const savedContacts = localStorage.getItem('contactsData');
    return savedContacts ? JSON.parse(savedContacts) : ContactsData;
  });

  const [searchFilter, setSearchFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contactsData');
    if (storedContacts) {
      setContactsData(JSON.parse(storedContacts));
    }
  }, []);

  useEffect(() => {
    if (contactsData !== null) {
      localStorage.setItem('contactsData', JSON.stringify(contactsData));
    }
  }, [contactsData]);

  const addContact = newContact => {
    setContactsData(prevContacts => {
      return [...prevContacts, newContact];
    });
  };

  const visibleContacts = contactsData.filter(contactData =>
    contactData.name.toLowerCase().includes(searchFilter.toLowerCase()),
  );

  const deleteContact = contactId => {
    setContactsData(prevContacts => {
      return prevContacts.filter(prevContact => prevContact.id !== contactId);
    });
  };

  return (
    <div>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={searchFilter} onSearch={setSearchFilter} />
      <ContactList contactsData={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
