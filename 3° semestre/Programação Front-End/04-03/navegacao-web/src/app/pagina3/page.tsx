"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";

export default function Pagina3() {

  const params = useSearchParams();
  const id = params.get("id");
  const texto = id ? ` com id ${id}` : "";

  return (
    <div>
      <h1>Página 3{texto}</h1>
    </div>
  );
}
