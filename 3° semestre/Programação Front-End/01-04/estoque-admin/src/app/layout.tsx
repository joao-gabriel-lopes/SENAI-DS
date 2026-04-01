import Link from "next/link";
import "./globals.css";
import { styleText } from "util";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body>

        <header>
          <h1>
            Estocar: Painel Administrativo
          </h1>
        </header>

        <nav>
          <ul>

            <li>
              <Link href="/">
                Início
              </Link>
            </li>

            <li>
              <Link href="/telas/unidadeMedida/lista">
                Unidades de medida
              </Link>
            </li>

            <li>
              <Link href="/telas/categoria/lista">
                Categorias
              </Link>
            </li>

            <li>
              <Link href="/telas/produto/pesquisa">
                Produtos
              </Link>
            </li>

          </ul>
        </nav>

          <main>
            {children}
          </main>

        <footer>
          <p>Todos os direitos reservados</p>
        </footer>

      </body>

    </html>
  );
}
