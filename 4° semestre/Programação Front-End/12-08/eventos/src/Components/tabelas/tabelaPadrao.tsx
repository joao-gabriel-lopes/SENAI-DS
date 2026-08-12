interface ITabelaPadrao {
    cabecalhos: string[],
    colunas: string[],
    lista: any[]
}

export function TabelaPadrao({ cabecalhos, colunas, lista }: ITabelaPadrao) {
    return (
        <table style={{ borderCollapse: "collapse" }}>
            <thead>
                <tr>
                    {
                        cabecalhos.map((cabecalho, index) =>
                            <th key={index}
                                style={{ border: "1px solid black", background: "#ebebeb", padding: "5px 10px" }}
                            >
                                {cabecalho}
                            </th>
                        )
                    }
                </tr>
            </thead>
            <tbody>
                {
                    lista.map((linha, indexLinha) =>
                        <tr key={indexLinha}>
                            {
                                colunas.map((coluna: string, indexColuna: number) =>
                                    <td style={{border: "1px solid black", padding:"5px 10px", textAlign: "center"}} key={indexColuna}>{linha[coluna]}</td>
                                )
                            }
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
}