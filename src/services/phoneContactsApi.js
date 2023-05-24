import axios from 'axios';

axios.defaults.baseURL = 'https://646de5959c677e23218a9944.mockapi.io';

export const getAllContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const deleteContact = async contactId => {
  const response = await axios.delete(`/contacts/${contactId}`);
  return response.data;
};
