using Microsoft.AspNetCore.Mvc;
using primeira_api.Models;

namespace primeira_api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MatematicaController : ControllerBase
    {
        [HttpGet("/soma")]
        public Soma SomarNumeros(int numero1, int numero2)
        {
            Soma soma = new Soma(numero1, numero2);
            return soma;
        }

        [HttpGet("/subtracao")]
        public Subtracao SubtrairNumeros(int numero1, int numero2)
        {
            Subtracao subtracao = new Subtracao(numero1, numero2);
            return subtracao;
        }

        [HttpGet("/divisao")]
        public Divisao DividirNumeros(int numero1, int numero2)
        {
            Divisao divisao = new Divisao(numero1, numero2);
            return divisao;
        }

        [HttpGet("/multiplicacao")]
        public Multiplicacao MultiplicarNumeros(int numero1, int numero2)
        {
            Multiplicacao multiplicacao = new Multiplicacao(numero1, numero2);
            return multiplicacao;
        }

        [HttpGet("/potenciacao")]
        public Potenciacao PotenciarNumeros(int numero1, int numero2)
        {
            Potenciacao potenciacao = new Potenciacao(numero1, numero2);
            return potenciacao;
        }

        [HttpGet("/radiciacao")]
        public Radiciacao RadiciarNumeros(int numero1)
        {
            Radiciacao radiciacao = new Radiciacao(numero1);
            return radiciacao;
        }
    }
}