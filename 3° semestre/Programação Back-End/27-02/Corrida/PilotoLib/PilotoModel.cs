namespace PilotoLib;

public class PilotoModel
{
    public string Nome { get; set; }
    public int Idade { get; set; }

    public PilotoModel(string nome, int idade)
    {
        Nome = nome;
        Idade = idade;
    }

}

