using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AtividadesAPI.Geometria.Triangulo
{
    [ApiController]
    [Route("[controller]")]
    public class TrianguloController : ControllerBase
    {
        [HttpGet("/triangulo")]
        public TrianguloModel GetRetangulo(decimal comprimento, decimal largura)
        {
            return new TrianguloModel(comprimento, largura);
        }
    }
}