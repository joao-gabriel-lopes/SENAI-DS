'use client'
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import IGato from "./interfaces/IGato";
import { ListarGatoPorId } from "./api";

export default function CadastroProduto() {
    const router = useRouter();

    const parametros = useSearchParams()
    const id = parametros.get("id") ?? ""

    const idInt = Number(id || 1)

    const [gato, setGato] = useState<IGato>()

    async function CarregarDados(currentId: number) {
        setGato(await ListarGatoPorId(currentId))
    }

    useEffect(() => {
        if (id === "") {
            router.push("/?id=1")
            return
        }

        if (idInt < 1) {
            router.push("/?id=1")
        }

        if (idInt > 20) {
            router.push("/?id=20")
        }

        CarregarDados(idInt)
    }, [id, idInt, router]);

    return (
        <>
            <section className={styles.container}>


                <div className={styles.containerCard}>

                    <input type="number" name="pesquisa" id="pesquisa" className={styles.cardInput} onChange={(e) => { router.push("/?id=" + e.target.value) }} />

                    <h1 className={styles.cardTitulo}>Gato {idInt}</h1>

                    <img className={styles.cardImg} src={gato?.url} alt="" />

                    <div className={styles.containerBotao}>

                        <button className={styles.cardBotao} onClick={() => router.push(`/?id=${idInt - 1 < 1 ? 1 : idInt - 1}`)}>
                            {"⫷"}
                        </button>

                        <button className={styles.cardBotao} onClick={() => router.push(`/?id=${idInt + 1 > 30 ? 30 : idInt + 1}`)}>
                            {"⫸"}
                        </button>

                    </div>


                </div>


            </section>
        </>
    );
}
