using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CursoDomain
{
    public class CursoModel
    {
        public String NomeCurso { get; set; }
        public int IdadeMinima { get; set; }
        private List<AlunoModel> _alunos { get; set; } = [];
        public IReadOnlyList<AlunoModel> Alunos => _alunos;

        public CursoModel(String nomeCurso, int idadeMinima)
        {
            NomeCurso = nomeCurso;
            IdadeMinima = idadeMinima;
        }

        public void MatricularAluno(AlunoModel aluno)
        {
            if (aluno.Idade < IdadeMinima)
            {
                throw new ArgumentException("A idade do aluno não pode ser menor que a idade mínima do curso");
            }

            _alunos.Add(aluno);

            Console.WriteLine($"{aluno.NomeAluno} matriculado(a) no curso {NomeCurso}");
        }
    }
}