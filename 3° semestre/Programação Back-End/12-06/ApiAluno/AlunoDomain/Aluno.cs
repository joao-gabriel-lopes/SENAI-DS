using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AlunoDomain;

public class Aluno
{
    [Key] public Guid Id { get; set; }
    public String Nome { get; set; }
    [StringLength(1)] public String Sexo { get; set; }
    public int Idade { get; set; }

    public Aluno(string nome, string sexo, int idade)
    {
        Nome = nome;
        Sexo = sexo;
        Idade = idade;
    }
    
}
