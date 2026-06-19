namespace ApiControleEstoque.Contracts

{
    public record GetPesquisaProdutoRequest
    {
        public required Guid Id { get; set; }
        public required String ProdutoNome { get; set; }
        public required String CategoriaNome { get; set; }
        public required String UnidadeMedida { get; set; }
        public required String Descricao { get; set; }
        public required Boolean Habilitado { get; set; }
        public required String NomeArquivoImagem { get; set; }
        public required decimal QuantidadeAtual { get; set; }
    }
}