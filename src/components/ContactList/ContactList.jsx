import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList({ contactsData, onDelete }) {
  return (
    <ul className={css.contactList}>
      {contactsData.map((contactData) => (
        <li className={css.contactListItem} key={contactData.id}>
          <Contact contactData={contactData} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
