using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TestesLib.Entidades
{
    public class Cliente
    {
        public String Nome { get; set; }
        public int Idade { get; set; }
        public bool TemPendencias { get; set; }

        public Cliente(string nome, int idade, bool temPendecias)
        {
            Nome = nome;
            Idade = idade;
            TemPendencias = temPendecias;
        }
    }

}