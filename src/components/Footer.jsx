import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/routes';
import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        to={ROUTES.HOME}
        className={styles.footer__logo}>
        <h3>MERCURY</h3>
      </Link>
      <section className={styles.footer__rights}>
        Developed by <a href='/'>KANA Technologies.</a>
      </section>
      <section className={styles.footer__socials}>
        <a href='https://www.facebook.com/'>
          <svg>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`} />
          </svg>
        </a>
        <a href='https://www.youtube.com/'>
          <svg>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`} />
          </svg>
        </a>
        <a href='https://www.instagram.com/'>
          <svg>
            <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`} />
          </svg>
        </a>
      </section>
    </footer>
  );
};

export default Footer;
