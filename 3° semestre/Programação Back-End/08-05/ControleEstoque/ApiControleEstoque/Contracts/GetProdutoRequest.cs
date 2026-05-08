namespace ApiControleEstoque.Contracts

{
    public record GetProdutoRequest
    {
        public string? Nome { get; set; }
        public decimal QuantidadeMinima { get; set; } = 0;
        public Guid? CategoriaProdutoId { get; set; }
        public Guid? UnidadeMedidaId { get; set; }
        public bool? Habilitado { get; set; }
    }
}