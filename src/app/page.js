import Link from "next/link";
import styles from "./page.module.css";
import Topo from "@/componentes/Topo";

export default function Home() {
  return (
    <main className={styles.container_principal}>
      <Topo />
      <h1>Página Inicial</h1>
      <Link className={styles.link} href="/novapagina">
        Link para proxima página
      </Link>
    </main>
  );
}
