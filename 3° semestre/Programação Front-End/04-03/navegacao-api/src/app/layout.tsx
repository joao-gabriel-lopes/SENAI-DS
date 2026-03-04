import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <Link href={"/"}>Home</Link>
          <Link href={"/lista"}>Lista de carteiras</Link>
          <Link href={"/cadastro"}>Cadastrar nova carteira</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
