import { useSelector } from "react-redux";
import Contact from "../components/Contact/Contact";
import styles from "./ContactList.module.css";
import { selectNameFilter } from "../redux/filtersSlice";
import { selectContacts } from "../redux/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const filteredContacts = contacts.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
