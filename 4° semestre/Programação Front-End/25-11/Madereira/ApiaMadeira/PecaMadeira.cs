namespace ApiaMadeira;

public class PecaMadeira
{
    public PecaMadeira(Guid id)
    {
        Id = Guid.NewGuid();
    }

    public Guid Id { get; set; }
    public string? Nome { get; set; }
    public decimal? Comprimento { get; set; }
    public decimal? Largura { get; set; }
    public decimal? Altura { get; set; }
    public Guid? TipoMadeiraId { get; set; }
}
