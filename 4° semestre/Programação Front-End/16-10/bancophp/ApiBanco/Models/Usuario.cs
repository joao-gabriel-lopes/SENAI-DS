using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;

namespace ApiBanco
{
    public class Usuario
    {
        [Key] public Guid Id { get; set; }
        [StringLength(100)] public string Nome { get; set; }
        [StringLength(14)] public string Cpf { get; set; }
        [StringLength(200)] public string Senha { get; set; }

        public Usuario(string nome, string cpf, string senha)
        {
            Nome = nome;
            Cpf = cpf;
            Senha = senha;
        }

    }
}