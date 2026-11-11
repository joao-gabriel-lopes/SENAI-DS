using System.ComponentModel.DataAnnotations;

namespace BarbeariaRazor.Models;

public class Cliente
{
    [Key] public Guid Id { get; set; }
    [StringLength(50)] public string Nome { get; set; }
    [StringLength(11)] public string NumeroTelefone { get; set; }
    [EmailAddress] public string Email { get; set; }
    public List<Agendamento>? Agendamentos { get; set; }

    public Cliente()
    {

    }
    public Cliente(string nome, string numeroTelefone, string email)
    {
        Id = Guid.NewGuid();
        Nome = nome;
        NumeroTelefone = numeroTelefone;
        Email = email;
    }
}
