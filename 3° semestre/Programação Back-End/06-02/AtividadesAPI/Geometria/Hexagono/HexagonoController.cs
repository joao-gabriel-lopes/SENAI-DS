using Microsoft.AspNetCore.Mvc;

namespace AtividadesAPI.Geometria.Hexagono
{
    [ApiController]
    [Route("[controller]")]
    public class HexagonoController : ControllerBase
    {
        [HttpGet("/hexagono")]
        public HexagonoModel GetHexagono(double comprimento){
            return new HexagonoModel(comprimento);
        }
        
    }
}