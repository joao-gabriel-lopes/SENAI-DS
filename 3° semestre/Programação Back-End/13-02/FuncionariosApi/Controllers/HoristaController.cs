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
    public class HoristaController : ControllerBase
    {
        [HttpGet("/horista")]
        public FuncionarioModel GetHorista(string nome, string urlFoto, decimal horasTrabalhadas, decimal valorPorHora)
        {
            return new HoristaModel(nome, urlFoto, horasTrabalhadas, valorPorHora);
        }
    }
}