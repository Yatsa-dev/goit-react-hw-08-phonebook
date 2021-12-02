import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu/UserMenu';
import s from './Appbar.module.css';

export default function Appbar() {
  return (
    <header className={s.header}>
      <Navigation />
      <AuthNav />
      <UserMenu />
    </header>
  );
}
