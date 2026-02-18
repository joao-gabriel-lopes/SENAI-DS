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
    public class ComissionadoController : ControllerBase
    {
        [HttpGet("/comissionado")]
        public FuncionarioModel GetComissionado(string nome, string urlFoto, decimal percentualComissao, decimal totalVendas)
        {
            return new ComissionadoModel(nome, urlFoto, percentualComissao, totalVendas);
        }
    }
}