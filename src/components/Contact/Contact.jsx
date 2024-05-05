import { FaUserAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import css from "./Contact.module.css";

export default function Contact({
  contactData: { name, number, id },
  onDelete,
}) {
  return (
    <>
      <div className={css.paragraphsWrapper}>
        <p className={css.contactParagraph}>
          <FaUserAlt className={css.contactIcon} size="20" />
          {name}
        </p>
        <p className={css.contactParagraph}>
          <IoCall className={css.contactIcon} size="20" />
          {number}
        </p>
      </div>
      <div className={css.buttonWrapper}>
        <button className={css.deleteBtn} onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </>
  );
}
