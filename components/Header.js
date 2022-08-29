import styles from './Header.module.css';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/frontend-team-from-db">Frontend team from DB</Link>
      <Link href="/frontend-team-from-api">
        Frontend team from API
      </Link>
    </header>
  );
};
