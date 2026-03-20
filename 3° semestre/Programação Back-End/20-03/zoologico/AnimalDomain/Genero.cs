using System.ComponentModel.DataAnnotations;

namespace AnimalDomain;

public class Genero
{
    [Key] public Guid Id { get; set; }
    [StringLength(50)] public String Nome { get; set; }
    public String? Descricao { get; set; }
    public Genero(string nome, string? descricao)
    {
        Nome = nome;
        Descricao = descricao;
    }
}
