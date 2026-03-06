namespace PilotoDomain;

public class PilotoModel
{
    public String Nome { get; set; }
    public int Idade { get; set; }

    public PilotoModel(String nome, int idade)
    {
        Nome = nome;
        Idade = idade;
    }
}
