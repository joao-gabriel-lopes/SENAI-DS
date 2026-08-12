'use client'

import { MouseEventHandler } from "react"

interface IBotaonavegacao {
    distancia?: number,
    eventoVoltar: () => void,
    eventoAvancar: () => void
}

export function BotaoNavegacao({ distancia, eventoVoltar, eventoAvancar }: IBotaonavegacao) {
    return (
        <div style={{
            width: distancia || 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}
        >
            <button
                onClick={eventoVoltar}
            >
                {"<"}
            </button>

            <button
                onClick={eventoAvancar}
            >
                {">"}
            </button>
        </div>
    )
}