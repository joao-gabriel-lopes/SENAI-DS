using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Security.AccessControl;
using System.Threading.Tasks;

namespace ProjetoLog.Models;

public class Catalogo
{
    [Key] public Guid Id { get; set; }
    [StringLength(50)] public string Nome { get; set; }
    public string Descricao { get; set; }

    public Catalogo(string nome, string descricao)
    {
        Nome = nome;
        Descricao = descricao;
    }
}
