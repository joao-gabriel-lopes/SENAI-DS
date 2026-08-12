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
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 5
        }}
        >
            <button
                onClick={eventoIncrementar}
                style={{
                    backgroundColor: "blue"
                }}
            >
                {"+"}
            </button>

            <button
                onClick={eventoDecrementar}
                style={{
                    backgroundColor: "red"
                }}
            >
                {"-"}
            </button>

        </div>
    )
}