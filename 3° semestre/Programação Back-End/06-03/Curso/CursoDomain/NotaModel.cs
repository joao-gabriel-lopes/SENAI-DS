namespace CursoDomain;

public class NotaModel
{
    public String NomeAtividade { get; set; }
    public int ValorNota { get; set; }

    internal NotaModel(String nomeAtividade, int valorNota)
    {
        NomeAtividade = nomeAtividade;
        ValorNota = valorNota;
    }
}
