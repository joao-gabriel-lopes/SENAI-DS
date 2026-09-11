import IOperacaoDetalhePost from "./iOperacaoDetalhePost";

export default interface IOperacao {
  motivo: string,
  entradaSaida: "s" | "e",
  detalhes: IOperacaoDetalhePost[]
};