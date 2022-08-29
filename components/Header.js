import styles from './Header.module.css';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/example-with-db">Example with DB</Link>
    </header>
  );
};
