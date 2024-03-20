import { NavLink, Link } from 'react-router-dom';
import styles from '../styles/Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.sidebar__title}>CATEGORIES</h3>
      <section className={styles.sidebar__menu}>
        <ul className={styles.list}>
          <li className={styles.list__elem}>
            <NavLink
              className={styles.link}
              to={`/categories/${1}`}>
              Category 1
            </NavLink>
          </li>
        </ul>
      </section>
      <section className={styles.sidebar__footer}>
        <Link className={styles.link}>Help</Link>
        <Link className={styles.link}>Terms & Conditions</Link>
      </section>
    </aside>
  );
};

export default Sidebar;
