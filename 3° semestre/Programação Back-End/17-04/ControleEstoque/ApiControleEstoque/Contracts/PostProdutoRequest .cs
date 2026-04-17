namespace ApiControleEstoque.Contracts;

public record PostProdutoRequest
{
    public required Guid CategoriaProdutoId { get; set; }
    public required Guid UnidadeMedidaId { get; set; }
    public required string Nome { get; set; }
    public string? Descricao { get; set; }
    public decimal? QuantidadeAtual { get; set; }
}
