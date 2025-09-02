import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container_principal}>
      <h1>Página Inicial</h1>
      <Link className={styles.link} href="/novapagina">
        Link para proxima página
      </Link>
    </main>
  );
}
