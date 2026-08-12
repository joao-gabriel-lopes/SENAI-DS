'use client'

interface IBotaoOperacao {
    distancia?: number,
    eventoDecrementar: () => void,
    eventoIncrementar: () => void
}

export function BotaoOperacao({ distancia, eventoDecrementar, eventoIncrementar }: IBotaoOperacao) {
    return (
        <div style={{
            width: distancia || 50,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}
        >
            <button
                onClick={eventoDecrementar}
                style={{
                    backgroundColor: "lightred"
                }}
            >
                {"-"}
            </button>

            <button
                onClick={eventoIncrementar}
                style={{
                    backgroundColor: "blue"
                }}
            >
                {"+"}
            </button>
        </div>
    )
}