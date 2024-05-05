import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contactsData = useSelector(state => {
    const filteredContacts = state.contacts.items.filter(contact =>
      contact.name.toLowerCase().includes(state.filters.name.toLowerCase()),
    );
    return filteredContacts;
  });

  const handleDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ul className={css.contactList}>
      {contactsData.map(contactData => (
        <li className={css.contactListItem} key={contactData.id}>
          <Contact contactData={contactData} onDelete={handleDeleteContact} />
        </li>
      ))}
    </ul>
  );
}
