using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AtividadesAPI.Geometria.Circulo
{
    [ApiController]
    [Route("api/[controller]")]
    public class CirculoController : ControllerBase
    {
        [HttpGet("/circulo")]
        public CirculoModel GetCirculo(double raio){
            return new CirculoModel(raio);
        }
    }
}