import { combineReducers } from 'redux';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

export const reducerPhoneBook = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});
