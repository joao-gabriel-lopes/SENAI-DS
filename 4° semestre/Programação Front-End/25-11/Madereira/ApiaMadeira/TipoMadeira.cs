namespace ApiaMadeira;

public class TipoMadeira
{
    public TipoMadeira(Guid id)
    {
        Id = Guid.NewGuid();
    }

    public Guid Id { get; set; }
    public string? Nome { get; set; }
    public decimal? PrecoPorVolume { get; set; }
    public string? Descricao { get; set; }
}
