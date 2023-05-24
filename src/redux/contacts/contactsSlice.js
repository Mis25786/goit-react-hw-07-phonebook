import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  deleteContactsThunk,
  addContactsThunk,
  getContactsThunk,
} from 'redux/operations';

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
      .addCase(getContactsThunk.fulfilled, handleFulfilledGet)
      .addCase(addContactsThunk.fulfilled, handleFulfilledAdd)
      .addCase(deleteContactsThunk.fulfilled, handleFulfilledDelete)

      .addMatcher(
        isAnyOf(
          getContactsThunk.pending,
          addContactsThunk.pending,
          deleteContactsThunk.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.fulfilled,
          addContactsThunk.fulfilled,
          deleteContactsThunk.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          getContactsThunk.rejected,
          addContactsThunk.rejected,
          deleteContactsThunk.rejected
        ),
        handleRejected
      );
  },
});

// export const { addContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
//!====================================================================
// import { createSlice } from '@reduxjs/toolkit';

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { getContacts } from 'services/fetchPhoneApi';
// import axios from 'axios';

// const contactsInitialState = { contacts: [], isLoading: false, error: null };

// const handlePending = (state, action) => {
//   state.isLoading = true;
// };
// // const handleFulfilled = (state, action) => {
// //   state.isLoading = false;
// //   state.contacts = action.payload;
// //   state.error = '';
// // };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// export const getContactsAction = createAsyncThunk(
//   'contacts/getContactsAction',
//   // async () => {
//   //   return await getContacts();
//   // }
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/contacts');
//       console.log('response :>> ', response);
//       console.log('response.contacts :>> ', response.contacts);

//       return response.contacts;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const addContactsAction = createAsyncThunk(
//   'contacts/addContactsAction',
//   async (contact, thunkAPI) => {
//     try {
//       const response = await axios.post('/contacts', contact);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// export const deleteContactsAction = createAsyncThunk(
//   'contacts/deleteContactsAction',
//   async (id, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${id}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   extraReducers: builder => {
//     builder
//       .addCase(getContactsAction.pending, handlePending)
//       .addCase(getContactsAction.fulfilled, handleFulfilled)
//       .addCase(getContactsAction.rejected, handleRejected)

//       .addCase(addContactsAction.pending, handlePending)
//       .addCase(addContactsAction.fulfilled, handleFulfilled)
//       .addCase(addContactsAction.rejected, handleRejected)

//       .addCase(deleteContactsAction.pending, handlePending)
//       .addCase(deleteContactsAction.fulfilled, handleFulfilled)
//       .addCase(deleteContactsAction.rejected, handleRejected);
//   },
// });

// // export const { addContactsAction, deleteContactsAction } =
// //   contactsSlice.actions;
// export const { addContact, deleteContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
//================================
// import { createSlice } from '@reduxjs/toolkit';
// import { contactsAction } from './reducerContacts';

// const contactsInitialState = { contacts: [], isLoading: false, error: '' };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   extraReducers: builder => {
//     builder
//       .addCase(contactsAction.pending, (state, action) => {
//         state.isLoading = true;
//       })
//       .addCase(contactsAction.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.contacts = action.payload;
//         state.error = '';
//       })
//       .addCase(contactsAction.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       });
//     // [contactsAction.pending]: (state, action) => {
//     //   state.isLoading = true;
//     // },
//     // [contactsAction.fulfilled]: (state, action) => {
//     //   state.isLoading = false;
//     //   state.contacts = action.payload;
//     //   state.error = '';
//     // },
//     // [contactsAction.rejected]: (state, action) => {
//     //   state.isLoading = false;
//     //   state.error = action.payload;
//     // },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
//?==========================================================
// import { createSlice } from '@reduxjs/toolkit';

// const contactsInitialState = { contacts: [] };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: (state, action) => {
//       state.contacts.push(action.payload);
//       // return { ...state, contacts: [...state.contacts, action.payload] };
//     },
//     deleteContact: (state, action) => {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
//*========================================================
// import { createSlice } from '@reduxjs/toolkit';

// const contactsInitialState = { contacts: [], isLoading: false, error: '' };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     fetching: (state, action) => {
//       state.isLoading = true;
//     },
//     fetchSuccess: (state, action) => {
//       state.isLoading = false;
//       state.contacts = action.payload;
//       state.error = '';
//     },
//     fetchError: (state, action) => {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     // addContact: (state, action) => {
//     //   state.contacts.push(action.payload);
//     //   // return { ...state, contacts: [...state.contacts, action.payload] };
//     // },
//     // deleteContact: (state, action) => {
//     //   return {
//     //     ...state,
//     //     contacts: state.contacts.filter(
//     //       contact => contact.id !== action.payload
//     //     ),
//     //   };
//     // },
//   },
// });

// export const { addContact, deleteContact } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
