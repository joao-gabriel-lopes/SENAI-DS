using TestesLib.Excecoes;

namespace Biblioteca;

public class Usuario
{
    public String Nome { get; set; }
    public String Email { get; set; }
    public String Senha { get; set; }
    public int Idade { get; set; }

    public Usuario(string nome, string email, string senha, int idade)
    {
        if (string.IsNullOrWhiteSpace(nome))
        {
            throw new ArgumentNullException("O nome não pode ser nulo ou vazio");
        }

        if (string.IsNullOrWhiteSpace(email))
        {
            throw new ArgumentNullException("O email não pode ser nulo ou vazio");
        }

        if (string.IsNullOrWhiteSpace(senha))
        {
            throw new ArgumentNullException("A senha não pode ser nulo ou vazio");
        }

        if(idade < 16)
        {
            throw new IdadeNaoPermitidaException("O usuário deve ser maior de 16 anos");
        }

        Nome = nome;
        Email = email;
        Senha = senha;
        Idade = idade;
    }
}
