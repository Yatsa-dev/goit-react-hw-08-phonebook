import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { BsFillFileEarmarkExcelFill } from 'react-icons/bs';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';
import s from './Contact.module.css';

export default function Contact() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      {contacts.map(({ name, id, number }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{name}:</p>
          <span>{number}</span>
          <button
            className={s.button}
            onClick={() => dispatch(contactsOperations.deleteContact(id))}
          >
            <BsFillFileEarmarkExcelFill className={s.button} />
          </button>
        </li>
      ))}
    </>
  );
}

Contact.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onDeleteContact: PropTypes.func,
};
