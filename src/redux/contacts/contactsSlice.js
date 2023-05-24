import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { deleteContact, addContact, fetchContacts } from 'redux/operations';

const contactsInitialState = { contacts: [], isLoading: false, error: null };

const handlePending = (state, action) => {
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = '';
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilledGet = (state, action) => {
  state.contacts = action.payload;
};
const handleFulfilledAdd = (state, action) => {
  state.contacts.push(action.payload);
};
const handleFulfilledDelete = (state, action) => {
  state.contacts = state.contacts.filter(
    contact => contact.id !== action.payload.id
  );
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfilledGet)
      .addCase(addContact.fulfilled, handleFulfilledAdd)
      .addCase(deleteContact.fulfilled, handleFulfilledDelete)

      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.fulfilled,
          deleteContact.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handleRejected
      );
  },
});

export const contactsReducer = contactsSlice.reducer;
