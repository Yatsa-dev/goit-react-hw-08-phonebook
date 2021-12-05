import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from 'components/Spinner';
import Container from '../components/Container';
import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';

import { contactsOperations, contactsSelectors } from '../redux/contacts';

export default function ContactsView(params) {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);
  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoadingContacts && <Spinner />}
      <ContactsList />
    </Container>
  );
}
