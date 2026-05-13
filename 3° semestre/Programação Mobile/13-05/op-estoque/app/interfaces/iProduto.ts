
export default interface IProduto{
  id: string | null,
  habilitado: boolean,
  categoriaProdutoId: string,
  unidadeMedidaId: string,
  nome: string,
  nomeArquivoFoto: string | null,
  descricao: string | null,
  quantidadeAtual: number,
};