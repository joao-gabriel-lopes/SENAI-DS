using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FuncionariosApi.Models;
using Microsoft.AspNetCore.Mvc;

namespace FuncionariosApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FuncionarioController : ControllerBase
    {
        [HttpGet("/funcionarios")]
        public IList<FuncionarioModel> GetFuncionarios()
        {
            return Dados.GerarDados();
        }
    }
}