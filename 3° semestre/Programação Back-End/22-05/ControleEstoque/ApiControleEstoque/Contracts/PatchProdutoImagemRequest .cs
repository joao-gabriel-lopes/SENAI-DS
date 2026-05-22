namespace ApiControleEstoque.Contracts;

public record PatchProdutoImagemRequest
{
    public bool? Habilitado { get; set; }
    public Guid? CategoriaProdutoId { get; set; }
    public Guid? UnidadeMedidaId { get; set; }
    public string? Nome { get; set; }
    public string? NomeArquivoImagem { get; set; }
    public string? Descricao { get; set; }
    public decimal? QuantidadeAtual { get; set; }
}
