import Topo from "@/componentes/Topo";
import "./globals.css";

export const metadata = {
  title: "Curso de implementação de rotas",
  description: "Implementação de app rotas com Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Topo />
        {children}
      </body>
    </html>
  );
}
