import { useSelector, useDispatch } from 'react-redux';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import css from './App.module.css';
import { addContact } from 'redux/contacts/contactsSlice';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const createUser = data => {
    if (contacts.find(contact => contact.name === data.name)) {
      return Notify.info('This name already exists in the list');
    }
    dispatch(addContact({ ...data, id: nanoid() }));
  };

  return (
    <>
      <div className={css.phonebook}>
        <h1 className={css['phonebook-title']}>Phonebook</h1>

        <ContactForm createUser={createUser} />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
