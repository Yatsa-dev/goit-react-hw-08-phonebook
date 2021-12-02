import React from 'react';
import Contact from 'components/Contact';
import s from './ContactList.module.css';

export default function ContactsList() {
  return (
    <ul className={s.list}>
      <Contact />
    </ul>
  );
}
