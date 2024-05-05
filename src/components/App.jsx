import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../redux/contactsSlice';
import { changeFilter } from '../redux/filtersSlice';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import ContactList from '../components/ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const selectContacts = useSelector(state => state.contacts.items);
  const nameFilter = useSelector(state => state.filters.name);

  const handleAddContact = newContact => {
    dispatch(addContact(newContact));
  };

  const handleSearchFilter = search => {
    dispatch(changeFilter(search));
  };

  return (
    <div>
      <h1 className={css.phonebookTitle}>Phonebook</h1>
      <ContactForm onAdd={handleAddContact} />
      <SearchBox value={nameFilter} onSearch={handleSearchFilter} />
      <ContactList />
    </div>
  );
}
