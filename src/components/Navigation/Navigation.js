import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import s from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <>
          <NavLink
            to="/contacts"
            className={s.link}
            activeClassName={s.activeLink}
          >
            Contacts
          </NavLink>
          <NavLink
            to="/upload"
            exact
            className={s.link}
            activeClassName={s.activeLink}
          >
            Download
          </NavLink>
        </>
      )}
    </nav>
  );
};

export default Navigation;
