using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ProjetoRazor.Models
{
    public class Suplemento
    {
        [Key] public Guid Id { get; set; }
        [StringLength(50)] public string Nome { get; set; }
        [StringLength(50)] public string Marca { get; set; }
        [StringLength(50)] public string Categoria { get; set; }

        public Suplemento() { }

        public Suplemento(string nome, string marca, string categoria)
        {
            Id = Guid.NewGuid();
            Nome = nome;
            Marca = marca;
            Categoria = categoria;
        }
    }
}