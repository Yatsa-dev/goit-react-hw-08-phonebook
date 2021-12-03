import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from '../components/Container';
import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';

import { contactsOperations } from '../redux/contacts';

export default function ContactsView(params) {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {/* {isLoadingTodos && <h1>Загружаем...</h1>} */}
      <ContactsList />
    </Container>
  );
}
