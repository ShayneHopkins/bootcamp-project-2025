import Link from "next/link";
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.brand}>Shayne Hopkins</div>
      <nav className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/blog">Blogs</Link>
        <Link href="/resume">Resume</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/portfolio">Portfolio</Link>
      </nav>
    </header>
  );
}
