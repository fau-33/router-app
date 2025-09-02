import Link from "next/link";

export default function Topo() {
  return (
    <div>
      <img
        src="https://images.pexels.com/photos/1030975/pexels-photo-1030975.png?auto=compress&cs=tinysrgb&h=80"
        alt="Logo"
      />
      <nav>
        <Link href="/">Home</Link>
        <Link href="/novapagina">Nova Página</Link>
      </nav>
    </div>
  );
}
