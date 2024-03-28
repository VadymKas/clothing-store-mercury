import { NavLink, Link } from 'react-router-dom';
import styles from '../styles/Sidebar.module.scss';
import { useSelector } from 'react-redux';
import { categories } from '../services/redux/features/categories/categoriesSlice';

const Sidebar = () => {
  const { list } = useSelector(categories);
  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.sidebar__title}>CATEGORIES</h3>
      <section className={styles.sidebar__menu}>
        <ul className={styles.list}>
          {list.map(({ name, id }) => (
            <li
              key={id}
              className={styles.list__elem}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.link_active : ''}`
                }
                to={`/categories/${id}`}>
                {name}
              </NavLink>
            </li>
          ))}
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
