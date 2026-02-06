using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AtividadesAPI.Pokemon
{
    public static class DadosMocados
    {
        public static IList<PokemonModel> RetornarIniciais()
        {
            IList<PokemonModel> lista = [
                new PokemonModel("Bulbasaur", 1, "Planta", "Venenoso", "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/001.png"),
                new PokemonModel("Charmander", 4, "Fogo", null, "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/004.png"),
                new PokemonModel("Squirtle", 7, "Água", null, "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/007.png")
            ];

            return lista;
        }

    }
}