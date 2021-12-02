import { useDispatch, useSelector } from 'react-redux';
import { contactsSelectors, changeFilter } from '../../redux/contacts';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  return (
    <label>
      <p className={s.text}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={event => dispatch(changeFilter(event.target.value))}
      />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.func,
  onChange: PropTypes.func,
};
