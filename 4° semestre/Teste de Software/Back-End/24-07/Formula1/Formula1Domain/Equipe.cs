namespace Formula1Domain;

public class Equipe
{
    public Guid Id { get; set; }
    public string Nome { get; set; }
    public DateOnly DataFundacao { get; set; }
    public double ValorEmCaixa { get; set; }

    public Equipe(Guid id, string nome, DateOnly dataFundacao, double valorEmCaixa)
    {
        if (string.IsNullOrEmpty(nome))
        {
            throw new ArgumentNullException("A equipe deve conter um nome não nulo");
        }

        if (nome.Length < 3)
        {
            throw new ArgumentException("O nome da equipe deve ter pelo menos 3 caracteres");
        }

        if(valorEmCaixa < 0)
        {
            throw new ArgumentException("O valor em caixa não pode ser negativo");
        }

        Id = id;
        Nome = nome;
        DataFundacao = dataFundacao;
        ValorEmCaixa = valorEmCaixa;
    }
}
