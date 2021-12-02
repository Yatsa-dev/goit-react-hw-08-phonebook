/* eslint-disable react-hooks/rules-of-hooks */
import Container from 'components/Container';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Appbar from 'components/Appbar';

export default function App() {
  return (
    <Container>
      <Appbar />
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}
