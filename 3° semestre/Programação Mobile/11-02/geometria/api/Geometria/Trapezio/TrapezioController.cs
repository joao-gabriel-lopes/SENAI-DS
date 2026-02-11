using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Geometria.Trapezio
{
    [ApiController]
    [Route("[controller]")]
    public class TrapezioController : ControllerBase
    {
        [HttpGet("/trapezio")]
        public TrapezioModel GetLosango(decimal baseMaior, decimal baseMenor, decimal altura){
            return new TrapezioModel(baseMaior, baseMenor, altura);
        }
    }
}