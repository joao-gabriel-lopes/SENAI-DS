import Link from "next/link";
import "./page.css";

export default function Home() {
  return (
    <div className="container">
        <h1>Página principal</h1>
        <Link href={"/lista"}>Ir para a lista de carteiras</Link>
        <Link href={"/cadastro"}>Cadastrar uma nova carteira</Link>
    </div>
  );
}
