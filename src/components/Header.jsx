import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import styles from '../styles/Header.module.scss';

const Header = () => {
  return (
    <header>
      <nav className={styles.navbar}>
        <Link
          to={ROUTES.HOME}
          className={styles.logo}>
          <h3>MERCURY</h3>
          <p>Embrace Your Individuality</p>
        </Link>
        <form className={styles.form}>
          <div className={styles.form__icon}>
            <svg>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#search`} />
            </svg>
          </div>
          <div className={styles.form__input}>
            <input
              type='search'
              name='search'
              placeholder='Search your style...'
              autoComplete='off'
              value=''
              onChange={() => {}}
            />
          </div>
        </form>
        <div className={styles.account}>
          <Link
            to={ROUTES.HOME}
            className={styles.account__favourite}>
            <svg className={styles['icon-fav']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#heart`} />
            </svg>
          </Link>
          <Link
            to={ROUTES.CART}
            className={styles.account__cart}>
            <svg className={styles['icon-cart']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#bag`} />
            </svg>
            <span className={styles.account__count}>0</span>
          </Link>
          <Link
            to={ROUTES.CART}
            className={styles.account__user}>
            <svg className={styles['icon-user']}>
              <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#user`} />
            </svg>
            <p className={styles.account__name}>Guest</p>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
