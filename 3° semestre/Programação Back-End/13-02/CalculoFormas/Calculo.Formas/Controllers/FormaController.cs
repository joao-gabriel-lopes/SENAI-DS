using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Calculo.Formas.Models;
using Microsoft.AspNetCore.Mvc;

namespace Calculo.Formas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FormaController : ControllerBase
    {
        [HttpGet("/formas")]
        public IList<FormaModel> GetFuncionarios()
        {
            return Dados.GerarDados();
        }
    }
}