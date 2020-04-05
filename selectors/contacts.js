export const getContacts = state => state.contacts.data;

export const getFavoriteContacts = state =>
  state.contacts.data.filter(contact => contact.isFavorite);

export const getContactsStatus = state => state.contacts.isFetching;
