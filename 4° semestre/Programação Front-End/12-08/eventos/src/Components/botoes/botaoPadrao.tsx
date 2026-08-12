'use client'
import { useState } from "react"

interface IBotaoPadrao {
    text: string,
    backgroundColor?: string,
    borderColor?: string
}

export function BotaoPadrao({ text, backgroundColor, borderColor }: IBotaoPadrao) {
    const [selecionado, setSelecionado] = useState(false);

    return (
        <button
            onMouseEnter={() => setSelecionado(true)}
            onMouseLeave={() => setSelecionado(false)}

            style={{
                backgroundColor: selecionado ? "black" : (backgroundColor || "white"),
                color: selecionado ? "white" : "black",
                borderColor: borderColor || "black",
                borderWidth: 1,
                cursor: "pointer"
            }}>
            {text}
        </button>
    )
}