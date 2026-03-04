import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const id = 5;

  return (
    <html lang="en">
      <body>
        <nav className="navbar">          
          <Link href={"/"}>Página principal</Link>
          <Link href={"/pagina2"}>Página 2</Link>
          <Link href={"/pagina3"}>Página 3</Link>
          <Link href={`/pagina3?id=${id}`}>Página 3 com id</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
