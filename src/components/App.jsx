import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import { getContactsThunk } from 'redux/operations';

import css from './App.module.css';

export const App = () => {
  const { contacts, isLoading, error } = useSelector(
    state => state.contacts.contacts
  );
  const dispatch = useDispatch;

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [contacts, dispatch]);

  // return (
  //   <>
  //     <div className={css.phonebook}>
  //       <h1 className={css['phonebook-title']}>Phonebook</h1>

  //       <ContactForm />
  //       <h2>Contacts</h2>
  //       <Filter />
  //       <ContactList />
  //     </div>
  //   </>
  // );
  return (
    <>
      {isLoading && <h3>Loading...</h3>}
      {error && <h2>An error occurred, please restart the application!!!</h2>}
      <div className={css.phonebook}>
        <h1 className={css['phonebook-title']}>Phonebook</h1>

        {!error ? <ContactForm /> : <h2>There are no contacts</h2>}

        {/* {contacts.length > 0 && (
          <> */}
        <h2>Contacts</h2>
        <Filter />
        {/* </>
        )} */}
        {!contacts && !error ? <ContactList /> : <h2>There are no contacts</h2>}
      </div>
    </>
  );
};
