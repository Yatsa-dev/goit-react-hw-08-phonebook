/* eslint-disable react-hooks/rules-of-hooks */
import { Routes, Route } from 'react-router-dom';
import Appbar from 'components/Appbar';
import Container from 'components/Container';
import HomeView from 'views/HomeView';
import RegisterView from 'views/RegisterView';
import LoginView from 'views/LoginView';
import ContactsView from 'views/ContactsView';

export default function App() {
  return (
    <Container>
      <Appbar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/register" element={<RegisterView />} />
        <Route path="/login" element={<LoginView />} />
        <Route path="/contacts" element={<ContactsView />} />
      </Routes>
    </Container>
  );
}
