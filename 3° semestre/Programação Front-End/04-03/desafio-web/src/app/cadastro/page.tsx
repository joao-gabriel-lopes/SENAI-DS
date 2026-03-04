'use client';
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import "../page.css";

export default function Cadastro() {
  const params = useSearchParams();
  const id = params.get("id")
  const conteudo = id ? `com id ${id}` : "sem id"

  return (
    <div className="pagina">
      <p>Cadastro {conteudo}</p>
      <Link href={"/"}>Voltar</Link>
    </div>
  );
}
