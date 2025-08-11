import { NavLink } from 'react-router-dom';
import styles from './AppNav.module.scss';

const navItems = [
  { path: '/home', label: 'Головна' },
  { path: '/homeworks', label: 'Домашні завдання' },
  { path: '/drawings', label: 'Мої малюнки' },
  { path: '/projects', label: 'Роботи' },
];

const AppNav = () => {
  return (
    <nav className={styles.navbar}>
      {navItems.map(({ path, label }) => (
        <NavLink
          key={path}
          to={path}
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ''}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export default AppNav;
