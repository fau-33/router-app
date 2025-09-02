import Link from "next/link";
import styles from "./Page.module.css";

export default function NovaPagina() {
  return (
    <main className={styles.container_principal}>
      <h1>Nova Página</h1>
      <Link className={styles.link_page} href="/">
        Link para página inicial
      </Link>
    </main>
  );
}
