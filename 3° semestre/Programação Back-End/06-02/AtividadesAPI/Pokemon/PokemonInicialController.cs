using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AtividadesAPI.Pokemon
{
    [ApiController]
    [Route("[controller]")]
    public class PokemonInicialController : ControllerBase
    {
        [HttpGet("/pokemon")]
        public IList<PokemonModel> ApresentarOpcoes()
        {
            return DadosMocados.RetornarIniciais();
        }
    }
}