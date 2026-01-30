using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace primeira_api.Models
{
    public class Aluno
    {
        public string nome {get; set;}
        public int idade {get; set;}
        public string hobby {get; set;}

        public Aluno(string nome, int idade, string hobby)
        {
            this.nome = nome;
            this.idade = idade;
            this.hobby = hobby;
        }
    }
}