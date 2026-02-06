using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AtividadesAPI.Geometria.Losango
{
    [ApiController]
    [Route("[controller]")]
    public class LosangoController : ControllerBase
    {
        [HttpGet("/losango")]
        public LosangoModel GetLosango(decimal diagonalMaior, decimal diagonalMenor){
            return new LosangoModel(diagonalMaior, diagonalMenor);
        }
    }
}