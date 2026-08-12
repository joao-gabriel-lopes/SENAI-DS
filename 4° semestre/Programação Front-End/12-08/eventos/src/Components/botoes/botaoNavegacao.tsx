'use client'

interface IBotaoNavegacao {
    distancia?: number,
    eventoVoltar: () => void,
    eventoAvancar: () => void
}

export function BotaoNavegacao({ distancia, eventoVoltar, eventoAvancar }: IBotaoNavegacao) {
    return (
        <div style={{
            width: distancia || 80,
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