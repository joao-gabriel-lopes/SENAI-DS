using Microsoft.AspNetCore.Mvc;
using primeira_api.Models;

namespace primeira_api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AlunoController : ControllerBase
    {
        [HttpGet("/alunos")]
        public List<Aluno> GetAlunos()
        {
            Aluno aluno1 = new Aluno("Pedro", 17, "Jogar videogame");
            Aluno aluno2 = new Aluno("Rodrigo", 30, "Jogar golfe");
            Aluno aluno3 = new Aluno("Rogério", 25, "Jardinagem");

            List<Aluno> alunos = [aluno1, aluno2, aluno3];

            return alunos;
        }

        [HttpGet("/aluno")]
        public Aluno GetAluno()
        {
            Aluno aluno = new Aluno("Alexandre", 20, "Jogar futebol");

            return aluno;
        }
    }

}