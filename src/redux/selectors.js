export const getFilter = state => state.contacts.filter;
export const getContacts = state => state.contacts.items;

export const getVisibleContacts = state => {
  const contscts = getContacts(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contscts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};