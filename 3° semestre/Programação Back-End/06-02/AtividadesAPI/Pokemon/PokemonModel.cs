using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtividadesAPI.Pokemon
{
    public class PokemonModel
    {
        public string Nome { get; }
        public int Numero { get; }
        public string Tipo1 { get; }
        public string? Tipo2 { get; } = null;
        public string UrlImagem { get; }

        public PokemonModel(string nome, int numero, string tipo1, string? tipo2, string urlImagem)
        {
            Nome = nome;
            Numero = numero;
            Tipo1 = tipo1;
            Tipo2 = tipo2;
            UrlImagem = urlImagem;
        }

    }
}