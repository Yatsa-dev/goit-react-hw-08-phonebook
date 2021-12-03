// const getFilter = state => state.contacts.filter;
// const getContacts = state => state.contacts.items;
// //  const getLoading = state => state.contacts.loading;

// const getVisibleContacts = state => {
//   const contscts = getContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase();

//   return contscts.filter(contact =>
//     contact.name.toLowerCase().includes(normalizedFilter),
//   );
// };

// const contactsSelectors = {
//   getContacts,
//   getFilter,
//   getVisibleContacts,
//   // getLoading,
// };
// export default contactsSelectors;

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getContacts = state => state.contacts.items;

const getVisibleContacts = state => {
  const contscts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contscts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};

const contactsSelectors = {
  getLoading,
  getFilter,
  getContacts,
  getVisibleContacts,
};
export default contactsSelectors;
