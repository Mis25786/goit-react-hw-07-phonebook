import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

import css from './App.module.css';

export const App = () => {
  return (
    <>
      <div className={css.phonebook}>
        <h1 className={css['phonebook-title']}>Phonebook</h1>

        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </>
  );
};
