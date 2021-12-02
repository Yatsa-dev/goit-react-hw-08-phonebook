// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/Container';
import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactList/ContactList';
import Filter from 'components/Filter';

// import { todosOperations, todosSelectors } from '../redux/todos';

export default function ContactsView(params) {
  //   const dispatch = useDispatch();

  //   useEffect(() => dispatch(todosOperations.fetchTodos()), [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
}
