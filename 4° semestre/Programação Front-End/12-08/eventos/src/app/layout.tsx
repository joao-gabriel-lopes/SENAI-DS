import "./globals.css";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-br" className="container">
      <body className="containerConteudo">
        {children}
      </body>
    </html>
  );
}
