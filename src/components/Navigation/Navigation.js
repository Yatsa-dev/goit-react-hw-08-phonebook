import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
const Navigation = () => (
  <nav>
    <NavLink to="/" className={s.link} activeclassname={s.activeLink}>
      Home
    </NavLink>
    <NavLink to="/contacts" className={s.link} activeclassname={s.activeLink}>
      Contacts
    </NavLink>
  </nav>
);

export default Navigation;
