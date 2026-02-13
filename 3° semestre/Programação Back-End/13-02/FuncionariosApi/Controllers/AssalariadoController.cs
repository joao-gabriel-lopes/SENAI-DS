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
    public class AssalariadoController : ControllerBase
    {
        [HttpGet("/assalariado")]
        public FuncionarioModel GetAssalariado(string nome, string urlFoto, decimal salario, decimal desconto){
            return new AssalariadoModel(nome, urlFoto, salario, desconto);
        }
    }
}