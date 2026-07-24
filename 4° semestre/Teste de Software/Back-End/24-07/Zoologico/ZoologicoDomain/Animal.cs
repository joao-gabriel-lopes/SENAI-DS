namespace ZoologicoDomain;

public class Animal
{
    public String Nome { get; set; }
    public String Especie { get; set; }
    public String Genero { get; set; }
    public String Sexo { get; set; }
    public int Idade { get; set; }
    public DateOnly DataEntrada { get; set; }

    public Animal(string nome, string especie, string genero, string sexo, int idade, DateOnly dataEntrada)
    {
        if (string.IsNullOrWhiteSpace(nome))
        {
            throw new ArgumentNullException("O nome do animal não pode ser nulo ou vazio");
        }

        if (string.IsNullOrWhiteSpace(especie))
        {
            throw new ArgumentNullException("A espécie do animal não pode ser nula nem vazia");
        }

        if (string.IsNullOrWhiteSpace(genero))
        {
            throw new ArgumentNullException("O gênero do animal não pode ser nulo ou vazio");
        }

        if (sexo.ToUpper() != "M" && sexo.ToUpper() != "F")
        {
            throw new ArgumentException("O sexo do animal deve ser M ou F");
        }

        if (idade < 0)
        {
            throw new ArgumentException("A idade do animal não pode ser menor que zero");
        }

        DateOnly dataAtual = DateOnly.FromDateTime(DateTime.Now);
        if (dataEntrada > dataAtual)
        {
            throw new ArgumentException("A data de entrada não pode ser maior que a data de hoje");
        }

        Nome = nome;
        Especie = especie;
        Genero = genero;
        Sexo = sexo;
        Idade = idade;
        DataEntrada = dataEntrada;
    }
}
