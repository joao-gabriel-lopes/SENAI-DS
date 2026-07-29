import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="principal">
        <header className="cabecalho-principal">
          <p>Biblioteca Estadual de São Paulo</p>
        </header>
        <main className="container">
          {children}
        </main>
        <footer className="rodape-principal">
          <p>João Gabriel © Todos os direitos reservados</p>
        </footer>
      </body>
    </html>
  );
}
