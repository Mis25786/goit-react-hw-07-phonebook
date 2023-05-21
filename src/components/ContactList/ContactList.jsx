import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const dispatch = useDispatch();

  const getVisibleContacts = () => {
    const normalizeFilterContact = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilterContact)
    );
  };

  const arryFilterContacts = getVisibleContacts();

  return (
    <ul>
      {arryFilterContacts.map(({ id, name, number }) => (
        <li key={id} className={css['ContactList-item']}>
          <p className={css['ContactList-text']}>{name}</p>
          <p className={css['ContactList-text']}>{number}</p>

          <button
            onClick={() => dispatch(deleteContact(id))}
            className={css['ContactList-delete']}
          >
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
