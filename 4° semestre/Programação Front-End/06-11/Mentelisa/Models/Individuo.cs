using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mentelisa.Models
{
    public class Individuo
    {
        [Key] public Guid Id { get; set; }
        [StringLength(100)] public string Nome { get; set; }
        public string Frase { get; set; }
        public string Descricao { get; set; }

        public Individuo(){ }

        public Individuo(string nome, string frase, string descricao)
        {
            Nome = nome;
            Frase = frase;
            Descricao = descricao;
        }
    }
}