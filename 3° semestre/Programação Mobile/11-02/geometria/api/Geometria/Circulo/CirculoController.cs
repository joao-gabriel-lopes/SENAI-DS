using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Geometria.Circulo
{
    [ApiController]
    [Route("[controller]")]
    public class CirculoController : ControllerBase
    {
        [HttpGet("/circulo")]
        public CirculoModel GetCirculo(double raio){
            return new CirculoModel(raio);
        }
    }
}