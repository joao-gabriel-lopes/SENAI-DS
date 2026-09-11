export default interface IOperacaoRequest {
    id: string,
    hora: string,
    motivo: string,
    entradaSaida: string,
    detalhes: IOperacaoDetalheRequest[]
}

interface IOperacaoDetalheRequest {
    id: string,
    quantidade: number,
    produtoNome: string,
    categoriaNome: string,
    unidadeMedidaSigla: string
}