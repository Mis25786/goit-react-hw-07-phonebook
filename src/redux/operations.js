import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
  addContact,
  deleteContact,
  getAllContacts,
} from 'services/phoneContactsApi';

axios.defaults.baseURL = 'https://646de5959c677e23218a9944.mockapi.io';

// export const getContactsThunk = createAsyncThunk('contacts/getContacts', () => {
//   return getAllContacts();
// });
// export const addContactsThunk = createAsyncThunk(
//   'contacts/addContact',
//   contact => {
//     return addContact(contact);
//   }
// );
// export const deleteContactsThunk = createAsyncThunk(
//   'contacts/deleteContact',
//   contactId => {
//     return deleteContact(contactId);
//   }
// );

//!===========================================================
export const getContactsThunk = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContactsThunk = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContactsThunk = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
