import Link from "next/link";
import styles from "./Topo.module.css";

export default function Topo() {
  return (
    <header className={styles.topo}>
      <Link className={styles.logo} href="/">
        Logo
      </Link>
      <nav className={styles.nav}>
        <Link className={styles.link} href="/">
          Home
        </Link>
        <Link className={styles.link} href="/novapagina">
          Nova Página
        </Link>
      </nav>
    </header>
  );
}
