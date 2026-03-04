import Image from "next/image";
import Link from "next/link";
import "../page.css";

export default function Pesquisa() {
  const id = 53;

  return (
    <div className="pagina">
      <Link href={`/cadastro?id=${id}`}>Cadastrar o id {id}</Link>
      <Link href={"/"}>Voltar</Link>
    </div>
  );
}
