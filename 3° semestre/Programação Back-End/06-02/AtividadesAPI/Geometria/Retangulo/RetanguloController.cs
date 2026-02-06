using Microsoft.AspNetCore.Mvc;

namespace AtividadesAPI.Geometria.Retangulo
{
    [ApiController]
    [Route("[controller]")]
    public class RetanguloController : ControllerBase
    {
        [HttpGet("/retangulo")]
        public RetanguloModel GetRetangulo(decimal comprimento, decimal largura){
            return new RetanguloModel(comprimento, largura);
        }
        
    }
}